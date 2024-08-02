import express from 'express';
import dotenv from 'dotenv';
import Product_route from './Routes/Product.route.js';
import UserRoute from './Routes/User.route.js';
import cors from 'cors';
import connectDB from './DB/Connection.js';
import feedRoute from './Routes/FeedBack.route.js';

dotenv.config();
const app = express();
console.clear();
app.use(cors());
app.use(express.json())
const port = process.env.PORT || 3000
//connect to db
connectDB()
app.use('/api/product',Product_route)
app.use('/api/user',UserRoute)
app.use('/api/feedbacks',feedRoute)
app.listen(port, () => {
  console.log(`server running on port ${port}` );
});


// http://localhost:2024/api/product/AddProduct