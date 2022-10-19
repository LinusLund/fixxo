import React from 'react'
import Navbar from '../Components/Navbar';
import Showcase from '../Components/Showcase';
import NewArrivals from '../Components/NewArrivals';
import Footer from '../Components/Footer';

function HomeView() {
  return (
    <>       
        <Navbar />
        <Showcase />
        <NewArrivals />
        <Footer />
    </>
  )
}

export default HomeView