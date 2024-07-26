import React, { useState } from 'react';
import '../Styles/Orders.css';
import { Link } from 'react-router-dom';
// Sample orders data for testing
const orders = [
  {
    id: 1,
    name: "John Doe",
    date: "2022-01-01",
    total: 100.00,
    status: "Pending",
  },
  {
    id: 2,
    name: "John Doe",
    date: "2022-01-01",
    total: 100.00,
    status: "shipped",
  },
  {
    id: 3,
    name: "John Doe",
    date: "2022-01-01",
    total: 100.00,
    status: "Delivered",
  },
  
    {
      id: 4,
      name: "John Doe",
      date: "2022-01-01",
      total: 100.00,
      status: "cancelled",
    },
];

const Orders = () => {
  const [filter, setFilter] = useState('all');

  const filteredOrders = filter === 'all' ? orders : orders.filter(order => order.status.toLowerCase() === filter);

  return (
    <div className='container'>
      <div className="orders-container">
      <h1>Orders</h1>
      <p>View and manage your orders</p>
      <div className="filters">
        <label htmlFor="status-filter">Filter by status:</label>
        <select id="status-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
      <div className="order-list">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Total</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.total}</td>
                <td>{order.date}</td>
                
                <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
                <td>
                <Link to={`/admin/client`}>
                      <button className="action-btn view">View</button>
                </Link>
                  <button className="action-btn cancel">Cancel</button>
                  <button className="action-btn track">Track</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Orders;








