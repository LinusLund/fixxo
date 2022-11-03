import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BreadcrumbSection  from '../Components/BreadcrumbSection';
import FeaturedProducts from '../Components/FeaturedProducts';
import { ProductContext } from '../contexts/context';
import { useContext } from 'react';


const ProductsView = () => {

  const productContext = useContext(ProductContext)
  return (
     <>
     <Navbar />
     <BreadcrumbSection />
     <FeaturedProducts title="All Products" products={productContext.allProducts} />
     <Footer />
    </>
  )
}

export default ProductsView