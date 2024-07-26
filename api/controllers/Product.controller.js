import Product from "../Models/Product.model.js";
import sharp from "sharp";
import path from "path";
import multer from "multer";
import { fileURLToPath } from 'url';

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
        const compressedImagePath = path.join( './Images', compressedImageName);

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