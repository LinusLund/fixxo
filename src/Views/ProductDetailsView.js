import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BreadcrumbSection  from '../Components/BreadcrumbSection'
import { useParams } from 'react-router-dom';

const ProductDetailsView = () => {
  const params = useParams()

  return (
    <>
    <Navbar />
    <BreadcrumbSection />

    <div className="container mt-5">
        <h1>{params.name}</h1>
    </div>

    <Footer />
    </>
  
  )
}

export default ProductDetailsView