import express from 'express'
import { AddProduct, AddToCart, BuyProduct, GetAllOrders, GetAllProducts, GetOrderDetails, ModifyProduct, uploadImage } from '../controllers/Product.controller.js'
import { verifrole } from '../utils/verifrole.js'
const Product_route = express.Router()

Product_route.post('/AddProduct',uploadImage,AddProduct)
Product_route.post('/ModifyProduct/:id',ModifyProduct)
Product_route.get('/GetAllProducts',GetAllProducts)
Product_route.post('/AddToCart/:userId',AddToCart)
Product_route.post('/BuyProduct/:cartid',BuyProduct)
Product_route.get('/GetAllOrders',GetAllOrders)
Product_route.get('/GetOrderDetails/:id',GetOrderDetails)

export default Product_route