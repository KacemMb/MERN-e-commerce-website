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

const AdminDashboard = () => {

  return (
    <div className='AdminDashboard'>
      <SideBar />
      <Routes>
        <Route path='/' element={<AddProduct />} />
        <Route path='/product' element={<Products />} />
        <Route path='/update' element={<ModifyProduct />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/users' element={<Users />} />
        <Route path='/feedbacks' element={<FeedBacks />} />
      </Routes>
      
    </div>
  )
}

export default AdminDashboard
