import React from 'react'
import BigProductBox from './BigProductBox'
import ProductCard from './ProductCard'

const GridSection2 = ({products = []})  => {

  return (
    <>
        <div className = "wrapper2">
            <div className = "gridLayout2">
                {
                  products.map(product => <ProductCard key={product.artnmr} product = {product} />)
                }
            </div>

            <div className = "BoxContainer2">
                <BigProductBox/>
            </div>

        </div>
    </>
  )
}

export default GridSection2