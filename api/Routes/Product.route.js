import express from 'express'
import { AddProduct, AddToCart, BuyProduct, GetAllProducts, ModifyProduct, uploadImage } from '../controllers/Product.controller.js'
import { verifrole } from '../utils/verifrole.js'
const Product_route = express.Router()

Product_route.post('/AddProduct',uploadImage,AddProduct)
Product_route.post('/ModifyProduct/:id',ModifyProduct)
Product_route.get('/GetAllProducts',GetAllProducts)
Product_route.post('/AddToCart/:userId',AddToCart)
Product_route.post('/BuyProduct/:cartid',BuyProduct)

export default Product_route