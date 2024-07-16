import React from 'react'
import '../Styles/AddProduct.css'
import ProductProto from './ProductProto'

const AddProduct = () => {
  return (
    <div className='AddProduct'>
        <div className='AddProductForm'>
            <div className='Form1'>
                <input type="text" placeholder='Product Name'/>
                <textarea name="" id="" placeholder='Product Description' rows={6}></textarea>
                <input type="number" name="" id="" placeholder='Quantity' min={1} defaultValue={1}/>
                <p>Quantity :XXX Pieces</p>
                <input type="number" name="" id="" placeholder='Price'min={0} defaultValue={0}/>
                <p>Price :XXX DT </p>
                <input type="text" placeholder='Category'/>
                <input type="text" placeholder='Origin'/>
                <input type="file" name="" id="" />
                <button>Show</button>
                <button>Add</button>
            </div>
        </div>
        <div className='Show_Product'>
            <ProductProto />
        </div>
    </div>
  )
}

export default AddProduct
