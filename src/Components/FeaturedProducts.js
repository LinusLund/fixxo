import React from 'react';
import ProductCard from './ProductCard'


const FeaturedProducts = ({title, products = []}) => {

  return (
    <>
        <section className="featured">
            <h5 className="f-title">{title}</h5>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {
                        products.map(product => <ProductCard key={product.artnr} product = {product} />)
                    }

                </div>
            </div>
        </section>
    </>        
    
  )
}

export default FeaturedProducts