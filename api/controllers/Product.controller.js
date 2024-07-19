import Product from "../Models/Product.model.js";
import sharp from "sharp";
import path from "path";

export const AddProduct = async (req, res, next) => {
    try {
        const { name, description, quantity, price, solde, category, origin, image } = req.body;
        let finalPrice = price - (price * solde / 100);

        // Compress the image before saving
        const compressedImage = await sharp(image)
            .resize(500, 500)
            .jpeg({ quality: 80 })
            .toFile(path.join(__dirname, "../../client/public/Images", `${image.name}-compressed.jpeg`));

        // Get the path of the compressed image
        const imagePath = compressedImage.path;

        // Create a new product with the compressed image path
        const product = new Product({ name, description, price, image: imagePath, category, quantity, origin, solde, finalPrice });

        if (!product) {
            return res.status(400).json({ error: 'Invalid product data' });
        }

        // Save the new product
        await product.save();

        // Print the newly created product as JSON
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};
//the modify product (admin only):

export const ModifyProduct = async (req, res, next) => {
    try {
        //get the proudct id 
        const  productid  = req.params.id;
        const { name, description, quantity, price, solde, category, origin, image } = req.body;

        let finalPrice = price - (price * solde / 100);

        // Compress the image before saving
        if (image) {
            const newcompressedImage = await sharp(image)
                .resize(500, 500)
                .jpeg({ quality: 80 })
                .toFile(path.join(process.cwd(), "client", "public", "images", `${image.name}-compressed.jpeg`));

            // Get the path of the compressed image
            const newimagePath = newcompressedImage.path;

            // Update the product with the new image path
            req.body.image = newimagePath;
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