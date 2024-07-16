import Product from "../Models/Product.model.js";
// Add a product
export const AddProduct = async (req, res, next) => {
    try {
        //gather the infos from the body 
    const {name,description,price,image,origin} = req.body;
    //compress the image before sending it to the db
    const buffer = await sharp(req.file.buffer)
       .resize(500, 500)
       .png()
       .toBuffer();
        // create a new product
    const product = new Product({name, description, price, image:buffer, category, quantity,origin});
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