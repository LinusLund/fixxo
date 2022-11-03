import React from 'react';
import Navbar from '../Components/Navbar';
import Showcase from '../Components/Showcase';
import NewArrivals from '../Components/NewArrivals';
import Footer from '../Components/Footer';
import FeaturedProducts from '../Components/FeaturedProducts';
import PamelaSection from '../Components/PamelaSection';
import { ProductContext } from '../contexts/context';
import { useContext } from 'react';
const HomeView = () => {

  const productContext = useContext(ProductContext)

  return (
    <div className = "HomePage">       
        <Navbar />
        <Showcase />
        <NewArrivals />
        <FeaturedProducts title ="Featured Products" products={productContext.featuredProducts}/>
        <PamelaSection />
        <Footer />


    </div>
  )
}

export default HomeView