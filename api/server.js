import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product_route from './Routes/Product.route.js';
import UserRoute from './Routes/User.route.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json())
const port = process.env.PORT || 3000
//connect to db
const conn = mongoose.connection;
mongoose.connect(process.env.MONGO);
conn.once('open', () => {
  console.log('connected to the database');
})
app.use('/api/product',Product_route)
app.use('/api/user',UserRoute)
app.listen(port, () => {
  console.log(`server running on port ${port}` );
});


// http://localhost:2024/api/product/AddProduct