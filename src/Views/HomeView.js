import React from 'react'
import Navbar from '../Components/Navbar';
import Showcase from '../Components/Showcase';
import NewArrivals from '../Components/NewArrivals';
import Footer from '../Components/Footer';
import FeaturedProducts from '../Components/FeaturedProducts';

function HomeView() {
  return (
    <>       
        <Navbar />
        <Showcase />
        <NewArrivals />
        <FeaturedProducts/>
        <Footer />


    </>
  )
}

export default HomeView