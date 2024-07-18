import mongoose from 'mongoose'
const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    finalPrice:{
        type: Number,
        default: 0
    },  
    image:{
        type: String,
        default: 'default.jpg'
    },
    category:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    origin:{
          type: String,
        default: 'Unknown'
    },
    solde:{
        type: Number,
        default: 0
    }
});
const Product = mongoose.model('Product', ProductSchema)
export default Product