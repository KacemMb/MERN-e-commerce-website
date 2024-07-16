import React from 'react'

const ProductProto = ({ productData }) => {
  const { productName, price,  image } = productData;
  return (
    <div className='ProductProto'>
      {/* Render the product image if it exists */}
      {image && (
        <img src={URL.createObjectURL(image)} alt={productName} />
      )}
      <div className='ProduProtoNamePrice'>
        {/* Display the product name */}
        <h3>{productName}</h3>
        {/* Display the product price */}
        <p> {price} DT</p>
      </div>
      <div className="ProdRate">
        
      </div>
    </div>
  )
}

export default ProductProto
