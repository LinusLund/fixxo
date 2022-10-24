import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const params = useParams
  return (
    <div className='container mt-5'>
        <h1>{params.name}</h1>
    </div>
  )
}

export default ProductDetails