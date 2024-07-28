import React, { useEffect }  from 'react';
import '../Styles/Products.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProducts } from '../Actions/products';
const Products = ({ productsData, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  const getUsername = (productId) => {
    const product = productsData.products.find(product => product._id === productId);
    return product && product.user ? product.user.full_name : '';
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
        {productsData.map((product) => (
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
const mapStateToProps = state => ({
  productsData: state.products
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);