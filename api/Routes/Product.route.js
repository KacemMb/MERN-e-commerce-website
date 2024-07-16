import express from 'express'
import { AddProduct } from '../controllers/Product.controller.js'
import { verifrole } from '../utils/verifrole.js'
const Product_route = express.Router()

Product_route.post('/AddProduct/:id',verifrole,AddProduct)
export default Product_route