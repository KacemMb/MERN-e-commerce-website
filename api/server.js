import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product_route from './Routes/Product.route.js';

dotenv.config();
const app = express();
app.use(express.json())
const port = process.env.PORT || 3000
//connect to db
const conn = mongoose.connection;
mongoose.connect(process.env.MONGO);
conn.once('open', () => {
  console.log('connected to the database');
})
app.use('/api',Product_route)
app.listen(port, () => {
  console.log(`server running on port ${port}` );
});


