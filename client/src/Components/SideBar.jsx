import React from 'react'
import '../Styles/SideBar.css'

const SideBar = () => {
  return (
    <div className='SideBar'>
      <div className='Managment'>
        <h1>Admin</h1>
        <div className='Managment_Section'>
          <h2>Product Managment</h2>
          <hr />
          <ul>
            <li> <img src="./Images/AddProduct.png" alt="" /> Add Product</li>
            <li> <img src="./Images/ProductsIcon.png" alt="" /> Products</li>
            <li> <img src="./Images/EditProduct.png" alt="" /> Modify Product</li>
          </ul>
        </div>
        <div className='Managment_Section'>
          <h2>Users Managment</h2>
          <hr />
          <ul>
            <li> <img src="./Images/Ordrs.png" alt="" /> Orders</li>
            <li> <img src="./Images/UsersIcon.png" alt="" /> Users</li>
            <li> <img src="./Images/FeedBacks.png" alt="" /> FeedBacks</li>
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
