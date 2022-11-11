import React from 'react'

const ProductDetails = ({product}) => {
  return (
    <div>
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <img src={product.imageName} />
    </div>
  )
}

export default ProductDetails