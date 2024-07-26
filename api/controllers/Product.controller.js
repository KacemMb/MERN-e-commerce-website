import Product from "../Models/Product.model.js";
import sharp from "sharp";
import path from "path";
import multer from "multer";
import { fileURLToPath } from 'url';
import User from "../Models/User.model.js"
import Cart from "../Models/Cart.model.js";
import Order from "../Models/Order.model.js";


// Utility to get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for image upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// AddProduct controller
export const AddProduct = async (req, res, next) => {
    try {
        const { name, description, quantity, price, solde, category, origin } = req.body;
        let finalPrice = price - (price * solde / 100);

        // Check if the image file exists in the request
        if (!req.file) {
            return res.status(400).json({ error: 'Image is missing' });
        }

        // Get the buffer of the uploaded image
        const imageBuffer = req.file.buffer;

        // Compress the image using sharp
        const compressedImageName = `${req.file.originalname.split('.')[0]}-compressed.jpeg`;
        const compressedImagePath = path.join( 'images', compressedImageName);

        await sharp(imageBuffer)
            .resize(500, 500)
            .jpeg({ quality: 80 })
            .toFile(compressedImagePath);

        // Create a new product with the compressed image path
        const product = new Product({
            name,
            description,
            price,
            image: compressedImagePath, // Store only the image path
            category,
            quantity,
            origin,
            solde,
            finalPrice,
        });

        // Save the new product
        await product.save();

        // Return the newly created product as JSON
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};

// Export the multer upload middleware
export const uploadImage = upload.single('image');



//the modify product (admin only):
export const ModifyProduct = async (req, res, next) => {
    try {
        //get the proudct id 
        const  productid  = req.params.id;
        const { image } = req.body;

        // Compress the image before saving
        if (image) {
            const compressedImageName = `${image.originalname.split('.')[0]}-compressed.jpeg`;
            const compressedImagePath = path.join( 'images', compressedImageName);

            await sharp(image.buffer)
                .resize(500, 500)
                .jpeg({ quality: 80 })
                .toFile(compressedImagePath);

            // Update the product with the new image path
            req.body.image = compressedImagePath;
        }

        // Find the product to update
        const product = await Product.findByIdAndUpdate(productid, req.body, { new: true });
        if (!product) return res.status(404).json({ error: 'Product not found' });
        // Print the updated product as JSON
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}
export const BuyProduct = async (req, res, next) => {
    try {
        // Get the cart ID from request params
        const cart = await Cart.findById(req.params.cartid);
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        // Loop through each item in the cart to update product quantities
        for (const item of cart.items) {
            const product = await Product.findById(item.productId);
            // Decrease the product quantity based on the cart item quantity
            await Product.findByIdAndUpdate(product._id, { $inc: { quantity: -item.quantity } });
        }

        // Create a new order
        const order = new Order({  userId: cart.userId,items:cart.items, totalprice: cart.totalprice });
        await order.save();

        // Delete the cart after purchase
        await Cart.findByIdAndDelete(req.params.cartid);

        // Return the order details
        res.status(201).json({ message: 'Product ordered successfully', order });
    } catch (error) {
        next(error);
    }
};

//Add product to panier 
export const AddToCart = async (req, res, next) => {
    try {
        // Get the product by name
        const product = await Product.findOne({ name: req.body.name });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Check if the product quantity is enough
        if (product.quantity < req.body.quantity) {
            return res.status(400).json({ error: 'Not enough quantity' });
        }

        // Get the user ID from request body
        const userId = req.params.userId;
        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Find or create the cart for the user
        let cart = await Cart.findOne({ userId: userId });
        if (!cart) {
            cart = new Cart({ userId: userId, items: [], totalprice: 0 });
        }

        // Check if the product is already in the cart
        const cartItem = cart.items.find(item => item.productId.equals(product._id));
        if (cartItem) {
            // Update the quantity of the existing item
            cartItem.quantity += req.body.quantity;
        } else {
            // Add the new product to the cart
            cart.items.push({
                productId: product._id,
                quantity: req.body.quantity,
            });
        }

        // Update the total price
        cart.totalprice += req.body.quantity * product.price;

        // Save the updated cart
        await cart.save();

        // Update the product quantity
        await Product.findByIdAndUpdate(product._id, { $inc: { quantity: -req.body.quantity } });

        // Return a success message
        res.status(201).json({ message: "Product added to the cart" });
    } catch (error) {
        next(error);
    }
};
export const GetAllProducts = async (req, res, next) => {
    try {
    // Retrieve all products from the database
    const products = await Product.find();
    // Return all the products 
    res.json(products);
} catch (error) {
    next(error);
 }
};