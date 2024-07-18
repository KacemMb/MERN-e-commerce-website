import React from 'react'
import '../Styles/AddProduct.css'
import ProductProto from './ProductProto'
import axios from 'axios';
import { useState } from "react";
import toast from 'react-hot-toast';
const AddProduct = () => {

  // Product data state 
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    quantity: 1,
    price: 0,
    solde: 0,
    category: 'unknown',
    origin: 'unknown',
    image: "null",
  });

  // state for test if the form is valid
  const [isValidate, setIsValidate] = useState(false);

  // state for show the product
  const [showProduct, setShowProduct] = useState(false);

  //handler for adding the product data
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  }

  //Handler for adding the product image
  const handleImageChange = (e) => {
    setProductData({ ...productData, image: e.target.files[0] });
  }
  
//Handler for showing the ProductProto
  const handleShowProduct = () => {
    const { name, description, quantity, price, category, origin, } = productData;
    if (name && description && quantity && price &&  category && origin )
    {
      setShowProduct(true);
      setIsValidate(true);
    } else {
      toast.error('Please fill in all fields');
      setIsValidate(false);
    }
  };

  const sendProduct = async () => {
    try {
      console.log("product data : ",productData);
      const res = await axios.post('http://localhost:2024/api/product/AddProduct', productData);
      if(res.status === 201){
        toast.success('Product added successfully');
      }
      
    } catch (error) {
      console.error("error in sending data",error);
    }
  }
  const handleAddProduct = () => {
    sendProduct();
  }
  return (
    <div className='AddProduct'>
        <div className='AddProductForm'>
            <div className='Form1'>
                <input type="text" placeholder='Product Name' name="name"   onChange={handleChange} required/>
                <textarea  name="description" id="" placeholder='Product Description' rows={4}  onChange={handleChange} required></textarea>
                <input type="number" name="quantity" id="" placeholder='Quantity' min={1}   onChange={handleChange}/>
                <p>Quantity :{productData.quantity} Pieces</p>
                <input type="number" name="price" id="" placeholder='Price'min={0}   onChange={handleChange}/>
                <p>Price :{productData.price} DT </p>
                <input type="number" name='solde' placeholder='Sold %' min={0} max={90} onChange={handleChange}/>
                <p>FinalPrice :{productData.price - (productData.price/100 * productData.solde)} DT </p>
                <input type="text" placeholder='Category' name='category'  onChange={handleChange} required/>
                <input type="text" placeholder='Origin' name='origin'  onChange={handleChange} optional/>
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
            borderColor: isValidate ? 'green' : 'red',
          }}
        >
          <ProductProto productData={productData} />
        </div>
      )}
    </div>
  )
}

export default AddProduct
