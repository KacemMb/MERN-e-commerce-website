import React, { useState, useEffect } from 'react';
import '../Styles/ModifyProduct.css';
import { useParams } from 'react-router-dom';
const ModifyProduct = ({products}) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    category: '',
    origin: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description || '',
        quantity: product.quantity,
        price: product.price,
        category: product.category,
        origin: product.origin
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='ModifyProduct'>
      <div className='ModifyProductForm'>
        <div className='Form1'>
          <input type="text" placeholder='Product Name' value={formData.name} onChange={handleChange} /> 
          <textarea name="" id="" placeholder='Product Description' rows={6} value={formData.description} onChange={handleChange} /> 
          <input type="number" name="" id="" placeholder='Quantity' min={1} value={formData.quantity} onChange={handleChange} /> 
          <p>Quantity :{formData.quantity}Pieces</p>
          <input type="number" name="" id="" placeholder='Price' min={0} value={formData.price} onChange={handleChange} /> 
          <p>Price :{formData.price} DT </p>
          <input type="text" placeholder='Category' value={formData.category} onChange={handleChange} /> 
          <input type="text" placeholder='Origin' value={formData.origin} onChange={handleChange}/> 
          <input type="file" name="" id="" />
          <button>Show</button>
          <button>Modify</button>
        </div>
      </div>
    </div>
  );
};

export default ModifyProduct;