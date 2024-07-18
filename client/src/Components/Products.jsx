import React from 'react';
import '../Styles/Products.css';
//Data for testing
const ProductTable = () => {
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
  <div className='Products'>
    <table className="product-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Sold</th>
          <th>Quantity</th>
          <th>Origin</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.sold}</td>
            <td>{product.quantity}</td>
            <td>{product.origin}</td>
            <td>{product.category}</td>
            <td>
              <button className="modify-button">Modify</button>
              <button className="delete-button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

   </div>
   );  
};

export default ProductTable;
