import React, { useEffect, useState } from 'react';
import '../Styles/Orders.css';
import { connect } from 'react-redux';
import { fetchOrders, fetchOrderDetails } from '../Actions/orders';
import { Link } from 'react-router-dom';

const Orders = ({ ordersData, fetchOrders, fetchOrderDetails }) => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const getUsername = (orderId) => {
    const order = ordersData.orders.find(order => order._id === orderId);
    return order && order.user ? order.user.full_name : '';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const filteredOrders = Array.isArray(ordersData.orders)
    ? (filter === 'all' ? ordersData.orders : ordersData.orders.filter(order => order && order.status && order.status.toLowerCase() === filter))
    : [];

  useEffect(() => {
    filteredOrders.forEach(order => {
      if (!order.user) {
        fetchOrderDetails(order._id);
      }
    });
  }, [filteredOrders, fetchOrderDetails]);

  if (ordersData.loading) return <div>Loading...</div>;
  if (ordersData.error) return <div>Error: {ordersData.error}</div>;

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
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{getUsername(order._id)}</td>
                  <td>{order.totalprice}</td>
                  <td>{formatDate(order.date)}</td>
                  <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
                  <td>
                    <Link to={`/admin/client/${order._id}`}>
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

const mapStateToProps = state => ({
  ordersData: state.orders,
});

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(fetchOrders()),
  fetchOrderDetails: (orderId) => dispatch(fetchOrderDetails(orderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
