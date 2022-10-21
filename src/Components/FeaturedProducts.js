import React from 'react'
import ProductCard from './ProductCard'

const featuredProducts = () => {
  return (
    
        <section className="featured">
            <h5 className="f-title">Featured Products</h5>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g4">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
            
    
  )
}

export default featuredProducts