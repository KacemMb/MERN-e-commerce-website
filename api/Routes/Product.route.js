import express from 'express'
import { AddProduct, AddToCart, BuyProduct, deleteProduct, GetAllOrders, GetAllProducts, GetOrderDetails, ModifyProduct, uploadImage } from '../Controllers/Product.controller.js'
const Product_route = express.Router()

Product_route.post('/AddProduct',uploadImage,AddProduct)
Product_route.post('/ModifyProduct/:id',ModifyProduct)
Product_route.get('/GetAllProducts',GetAllProducts)
Product_route.post('/AddToCart/:userId',AddToCart)
Product_route.post('/BuyProduct/:cartid',BuyProduct)
Product_route.get('/GetAllOrders',GetAllOrders)
Product_route.get('/GetOrderDetails/:id',GetOrderDetails)
Product_route.delete('/deleteProduct/:id',deleteProduct)

export default Product_route

// http://localhost:2024//api/product/deleteProduct/:id  delete product 
//  http://localhost:2024//api/user//delete/:id delete user 