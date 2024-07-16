import React from 'react'

const ProductProto = ({ productData }) => {
  const { productName, productDescription, quantity, price, category, origin, image } = productData;
  return (
    <div className='ProductProto'>
      {image && (
        <img src={URL.createObjectURL(image)} alt={productName} />
      )}
      <div className='ProduProtoNamePrice'>
        <h3>{productName}</h3>
        <p> {price} DT</p>
      </div>
      <div className="ProdRate">
        
      </div>
    </div>
  )
}

export default ProductProto
