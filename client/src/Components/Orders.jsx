import React, { useState } from 'react';
import '../Styles/Orders.css';

// Sample orders data for testing
const orders = [
  {
    id: 1,
    date: "2022-01-01",
    total: 100.00,
    status: "Pending",
    products: [
      { id: 1, name: "Product 1", quantity: 2, price: 50.00 },
      { id: 2, name: "Product 2", quantity: 1, price: 20.00 }
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    },
    billingAddress: {
      name: "John Doe",
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: 2,
    date: "2022-01-05",
    total: 50.00,
    status: "Shipped",
    products: [
      { id: 3, name: "Product 3", quantity: 1, price: 30.00 }
    ],
    shippingAddress: {
      name: "Jane Doe",
      address: "456 Elm St",
      city: "Othertown",
      state: "NY",
      zip: "67890"
    },
    billingAddress: {
      name: "Jane Doe",
      address: "456 Elm St",
      city: "Othertown",
      state: "NY",
      zip: "67890"
    },
    paymentMethod: "PayPal"
  },
  {
    id: 3,
    date: "2022-01-10",
    total: 200.00,
    status: "Delivered",
    products: [
      { id: 1, name: "Product 1", quantity: 3, price: 50.00 },
      { id: 4, name: "Product 4", quantity: 2, price: 40.00 }
    ],
    shippingAddress: {
      name: "Bob Smith",
      address: "789 Oak St",
      city: "Thistown",
      state: "TX",
      zip: "34567"
    },
    billingAddress: {
      name: "Bob Smith",
      address: "789 Oak St",
      city: "Thistown",
      state: "TX",
      zip: "34567"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: 4,
    date: "2022-01-15",
    total: 150.00,
    status: "Cancelled",
    products: [
      { id: 2, name: "Product 2", quantity: 2, price: 20.00 },
      { id: 5, name: "Product 5", quantity: 1, price: 30.00 }
    ],
    shippingAddress: {
      name: "Alice Johnson",
      address: "321 Pine St",
      city: "That town",
      state: "FL",
      zip: "90123"
    },
    billingAddress: {
      name: "Alice Johnson",
      address: "321 Pine St",
      city: "That town",
      state: "FL",
      zip: "90123"
    },
    paymentMethod: "PayPal"
  }
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
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.total}</td>
                <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
                <td>
                  <button className="action-btn view">View</button>
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








