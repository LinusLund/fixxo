import React from 'react';
import Navbar from '../Components/Navbar';
import Showcase from '../Components/Showcase';
import NewArrivals from '../Components/NewArrivals';
import Footer from '../Components/Footer';
import FeaturedProducts from '../Components/FeaturedProducts';
import PamelaSection from '../Components/PamelaSection';
import { FeaturedProductsContext } from '../contexts/context';
import { GridProductsContext } from '../contexts/context';
import { useContext } from 'react';
import GridSection from '../Components/GridSection';
import GridSection2 from '../Components/GridSection2';
import InfoBoxes from '../Components/infoBoxes';

const HomeView = () => {

  const featured = useContext(FeaturedProductsContext)
  const gridProducts = useContext(GridProductsContext)
  

  return (
    <div className = "HomePage">       
        <Navbar />
        <Showcase />
        <NewArrivals />
        <FeaturedProducts title ="Featured Products" products={featured}/>
        <PamelaSection />
        <GridSection products={gridProducts} /> 
        <GridSection2 products={gridProducts} />
        <InfoBoxes />
        <Footer />


    </div>
  )
}

export default HomeView