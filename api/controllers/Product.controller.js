import Product from "../Models/Product.model.js";
import sharp from "sharp";
// import error from "../Utils/ErrorHandler.js";
// Add a product
export const AddProduct = async (req, res, next) => {
    try {
        //gather the infos from the body 
    const {name,description,quantity,price,solde,category,origin,image} = req.body;
    let finalPrice = price - (price * solde / 100);
    //compress the image before sending it to the db
    // const buffer = await sharp(image)
    //    .resize(500, 500)
    //    .png()
    //    .toBuffer();
        // create a new product
    const product = new Product({name, description, price, image, category, quantity,origin,solde,finalPrice});
    if (!product) {
        return res.status(400).json({ error: 'Invalid product data' });
    }
    // Save the new product 
    await product.save();
//print the newly created product sous forme json
    res.status(201).json(product);
} catch (error) {
    next(error);
}
};