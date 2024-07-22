import React from 'react';
import '../Styles/Client.css';

const Client = () => {
  const clients = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      orders: [
        {
          id: 1,
          date: "2022-01-01",
          total: 100.00,
          status: "Pending",
          products: [
            { id: 1, name: "Product A", quantity: 2, price: 25.00 },
            { id: 2, name: "Product B", quantity: 1, price: 50.00 }
          ]
        },
        {
          id: 2,
          date: "2022-02-01",
          total: 200.00,
          products: [
            { id: 3, name: "Product C", quantity: 4, price: 50.00 }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      address: "456 Oak St",
      city: "Othertown",
      state: "TX",
      zip: "67890",
      orders: [
        {
          id: 3,
          date: "2022-03-01",
          total: 150.00,
          products: [
            { id: 4, name: "Product D", quantity: 3, price: 50.00 }
          ]
        }
      ]
    }
  ];

  return (
    <div className="client-container">
      {clients.map(client => (
        <div className="client-card" key={client.id}>
          <h1>{client.name}</h1>
          <p>Email: {client.email}</p>
          <p>Phone: {client.phone}</p>
          <p>Address: {client.address}, {client.city}, {client.state} {client.zip}</p>
          <div className="orders">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Products</th>
                </tr>
              </thead>
              <tbody>
                {client.orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.date}</td>
                    <td>${order.total.toFixed(2)}</td>
                    <td>
                      <ul>
                        {order.products.map(product => (
                          <li key={product.id}>
                            {product.quantity} x {product.name} (${product.price.toFixed(2)})
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Client;
