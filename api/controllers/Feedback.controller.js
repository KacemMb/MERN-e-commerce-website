import Feedback from "../Models/Feedback.model.js";
import Product from "../Models/Product.model.js";
import User from "../Models/User.model.js";

export const AddFeedback = async(req,res,next)=>{
    try {
        // Get the feedback data from the  body
        const {email, message } = req.body;
        const userId = await User.findOne({email})
        const prodid = req.params.prodid
        // Check if the user exists
        if (!userId) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        // Get the product with the  ID
        const product = await Product.findById(prodid);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        
        // Check if the product already has a feedback with the  user
     const existingFeedback = await Feedback.findOne({ user_id: userId._id});
        if (existingFeedback&&prodid) {
            return res.status(400).json({ error: 'Feedback already exists for this user and product' });
        }

        // Create a new Feedback 
        const newFeedback = new Feedback({user_id: userId._id,  comment:message });

        await newFeedback.save()
        // Update the product with the new feedback
        product.feedbacks.push(newFeedback);

        await product.save();
        
        res.status(201).json({ message: 'Feedback added successfully'});
    }
    catch (error) {
        next(error);//don't know if the nex here is necessary if nor i wil replace it
    }
}
        
