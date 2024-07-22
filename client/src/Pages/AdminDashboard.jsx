import React from 'react'
import SideBar from '../Components/SideBar'
import AddProduct from '../Components/AddProduct'
import '../Styles/AdminDashboard.css'
import { Route, Routes } from 'react-router-dom'
import Products from '../Components/Products'
import ModifyProduct from '../Components/ModifyProduct'
import Orders from '../Components/Orders'
import Users from '../Components/Users'
import FeedBacks from '../Components/FeedBacks'
import Client from '../Components/Client';

const AdminDashboard = () => {
  const products = [
    { id: 1, name: 'dress', price: '$5', sold: 10, quantity: 35, origin: 'Tunis', category: 'Fashion' },
    { id: 2, name: 'shirt', price: '$10', sold: 20, quantity: 50, origin: 'USA', category: 'Apparel' },
    { id: 3, name: 'pants', price: '$15', sold: 30, quantity: 25, origin: 'China', category: 'Clothing' },
    { id: 4, name: 'shoes', price: '$20', sold: 40, quantity: 45, origin: 'UK', category: 'Footwear' },
    { id: 5, name: 'hat', price: '$25', sold: 50, quantity: 55, origin: 'France', category: 'Accessories' },
    { id: 6, name: 'dress', price: '$5', sold: 10, quantity: 35, origin: 'Tunis', category: 'Fashion' },
    { id: 7, name: 'shirt', price: '$10', sold: 20, quantity: 50, origin: 'USA', category: 'Apparel' },
    { id: 8, name: 'pants', price: '$15', sold: 30, quantity: 25, origin: 'China', category: 'Clothing' },
    { id: 9, name: 'shoes', price: '$20', sold: 40, quantity: 45, origin: 'UK', category: 'Footwear' },
    { id: 10, name: 'hat', price: '$25', sold: 50, quantity: 55, origin: 'France', category: 'Accessories' },
    { id: 11, name: 'dress', price: '$5', sold: 10, quantity: 35, origin: 'Tunis', category: 'Fashion' },
    { id: 12, name: 'shirt', price: '$10', sold: 20, quantity: 50, origin: 'USA', category: 'Apparel' },
    { id: 13, name: 'pants', price: '$15', sold: 30, quantity: 25, origin: 'China', category: 'Clothing' },
    { id: 14, name: 'shoes', price: '$20', sold: 40, quantity: 45, origin: 'UK', category: 'Footwear' },
    { id: 15, name: 'hat', price: '$25', sold: 50, quantity: 55, origin: 'France', category: 'Accessories' },
  ];


  return (
    <div className='AdminDashboard'>
      <SideBar />
      <Routes>
        <Route path='/' element={<AddProduct />} />
        <Route path='/product' element={<Products products={products} />} />
        <Route path='/update' element={<ModifyProduct products={products} />} />
        <Route path='/modify/:id' element={<ModifyProduct products={products} />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/client' element={<Client/>} />
        <Route path='/users' element={<Users />} />
        <Route path='/feedbacks' element={<FeedBacks />} />
      </Routes>
      
    </div>
  )
}

export default AdminDashboard
