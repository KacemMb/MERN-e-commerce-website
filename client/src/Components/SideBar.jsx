import React from 'react'
import '../Styles/SideBar.css'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='SideBar'>
      <div className='Managment'>
        <h1>Admin</h1>
        <div className='Managment_Section'>
          <h2>Product Managment</h2>
          <hr />
          <ul>
            <Link to={'/admin/'} className='SideLink' ><li><img src="./Images/AddProduct.png" alt="" /> Add Product</li></Link>
            <Link to={'/admin/product'} className='SideLink'><li> <img src="./Images/ProductsIcon.png" alt="" /> Products</li></Link>
            <Link to={'/admin/update'} className='SideLink'><li> <img src="./Images/EditProduct.png" alt="" /> Modify Product</li></Link>
          </ul>
        </div>
        <div className='Managment_Section'>
          <h2>Users Managment</h2>
          <hr />
          <ul>
            <Link to={'/admin/orders'} className='SideLink'><li> <img src="./Images/Ordrs.png" alt="" /> Orders</li></Link>
            <Link to={'/admin/users'} className='SideLink'><li> <img src="./Images/UsersIcon.png" alt="" /> Users</li></Link>
            <Link to={'/admin/feedbacks'} className='SideLink'><li> <img src="./Images/FeedBacks.png" alt="" /> FeedBacks</li></Link>
          </ul>
        </div>
      </div>
      <div className='Profile'>
        <img src="./Images/Profile.png" alt="" />
        <h2>Profile</h2>
      </div>
    </div>
  )
}

export default SideBar
