import express from 'express'
import { AddProduct, ModifyProduct } from '../controllers/Product.controller.js'
import { verifrole } from '../utils/verifrole.js'
const Product_route = express.Router()

Product_route.post('/AddProduct',AddProduct)
Product_route.post('/ModifyProduct/:id',ModifyProduct)
export default Product_route