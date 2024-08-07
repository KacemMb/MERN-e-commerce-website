import React, { useEffect } from 'react';
import '../Styles/Products.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../Slices/ProductsSlice';

const Products = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id);
  };
  if (productsData.loading) return <div>Loading...</div>;
  if (productsData.error) return <div>Error: {productsData.error}</div>;

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
          {productsData.products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.sold}</td>
              <td>{product.quantity}</td>
              <td>{product.origin}</td>
              <td>{product.category}</td>
              <td>
                <Link to={`/admin/update/${product._id}`}>
                  <button className="modify-button">Modify</button>
                </Link>
                <button className="delete-button"  onClick={() => handleDelete(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default Products;
