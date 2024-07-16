import User from "../Models/User.model.js";
import { ErrorHandler } from "./ErrorHandler.js";
//verifrole to check if the user trying to add the product is a user or an admin
export const verifrole =async (req,_, next) => {
    const userType = await User.findById(req.params.id) // get the user role 
    if (!userType) return next(ErrorHandler(404, "user not found"));
    if (userType.role !== "admin") return next(ErrorHandler(403, "Forbidden"));
    next();
};