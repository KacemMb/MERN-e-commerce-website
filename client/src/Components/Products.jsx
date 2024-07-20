import React from 'react';
import '../Styles/Products.css';
import { Link } from 'react-router-dom';
//Data for testing
const Products = ({products}) => {
 
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
               <Link to={`/admin/update`}>
                  <button className="modify-button">Modify</button>
                </Link>
              <button className="delete-button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

   </div>
   );  
};

export default Products;
