import React from 'react'
import SideBar from '../Components/SideBar'
import AddProduct from '../Components/AddProduct'
import '../Styles/AdminDashboard.css'

const AdminDashboard = () => {
  return (
    <div className='AdminDashboard'>
      <SideBar />
      <AddProduct />
    </div>
  )
}

export default AdminDashboard
