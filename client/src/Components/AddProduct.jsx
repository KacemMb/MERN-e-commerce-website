import React from 'react'
import '../Styles/AddProduct.css'
import ProductProto from './ProductProto'
import axios from 'axios';
import { useState } from "react";
const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('0');
  const [image, setImage] = useState('null');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [origin, setOrigin] = useState('');
  const [showProduct, setShowProduct] = useState(false);
  const [productData, setProductData] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'quantity':
        setQuantity(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'origin':
        setOrigin(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleShowProduct = () => {
    if (name && description && quantity && price &&  category && origin )
    {
      setProductData({ name, description, quantity, price, category, origin, image,});
      setShowProduct(true);
    } else {
      alert('Please fill in all fields');
    }
  };
  const handleAddProduct = () => {
    if (productData) {
      axios.post('http://localhost:3001/api/AddProduct/', productData) .then((response) => {
          console.log(response);
          alert('Product added successfully');
        })
       .catch((error) => {
          console.error(error);
          alert('Error adding product');
        });
    } else {
      alert('Please fill in all fields');
    }
  };
  return (
    <div className='AddProduct'>
        <div className='AddProductForm'>
            <div className='Form1'>
                <input type="text" placeholder='Product Name' name="name"   onChange={handleInputChange} required/>
                <textarea  name="" id="" placeholder='Product Description' rows={6}  onChange={handleInputChange} required></textarea>
                <input type="number" name="" id="" placeholder='Quantity' min={1} defaultValue={1}  onChange={handleInputChange}/>
                <p>Quantity :XXX Pieces</p>
                <input type="number" name="" id="" placeholder='Price'min={0} defaultValue={0}  onChange={handleInputChange}/>
                <p>Price :XXX DT </p>
                <input type="text" placeholder='Category'  onChange={handleInputChange} required/>
                <input type="text" placeholder='Origin'  onChange={handleInputChange} optional/>
                <input type="file" name="" id="" onChange={handleImageChange} required/>
                <button onClick={handleShowProduct}>Show</button>
                <button onClick={handleAddProduct}>Add</button>
            </div>
        </div>
        {showProduct && (
        <div
          className='Show_Product'
          style={{
            border: '2px solid',
            borderColor: name && description && quantity && price && category && origin ? 'green' : 'red',
          }}
        >
          <ProductProto productData={productData} />
        </div>
      )}
    </div>
  )
}

export default AddProduct
