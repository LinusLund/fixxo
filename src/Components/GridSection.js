import React from 'react'
import BigProductBox from './BigProductBox'
import ProductCard from './ProductCard'

const GridSection = ({products = []})  => {

  return (
    <>
        <div className = "wrapper">

            <div className = "BoxContainer">
                <BigProductBox/>
            </div>

            <div className = "gridLayout">
                {
                  products.map(product => <ProductCard key={product.artnmr} product = {product} />)
                }
            </div>


        </div>
    </>
  )
}

export default GridSection