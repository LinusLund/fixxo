import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Showcase from '../Components/Showcase';
import NewArrivals from '../Components/NewArrivals';
import Footer from '../Components/Footer';
import FeaturedProducts from '../Components/FeaturedProducts';

function HomeView() {

  const [featuredProducts, setFeaturedProducts] = useState([
    {id: 1, name: "Modern Black Blouse", category :"Fashion", price:"$35.00", rating: 5, img: "https://images.pexels.com/photos/1528375/pexels-photo-1528375.jpeg?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
    {id: 2, name: "Modern Black Blouse", category :"Fashion", price:"$35.00", rating: 5, img: "https://images.pexels.com/photos/5435178/pexels-photo-5435178.jpeg?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
    {id: 3, name: "Modern Black Blouse", category :"Fashion", price:"$35.00", rating: 5, img: "https://images.pexels.com/photos/5422609/pexels-photo-5422609.jpeg?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
    {id: 4, name: "Modern Black Blouse", category :"Fashion", price:"$35.00", rating: 5, img: "https://images.pexels.com/photos/3993247/pexels-photo-3993247.jpeg?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" }
])

const [topProducts, setTopProducts] = useState([
  {id: 1, name: "Modern Black Blouse", category :"Fashion", price:"$35.00", rating: 5, img: "https://images.pexels.com/photos/1528375/pexels-photo-1528375.jpeg?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
  {id: 2, name: "Modern Black Blouse", category :"Fashion", price:"$35.00", rating: 5, img: "https://images.pexels.com/photos/5435178/pexels-photo-5435178.jpeg?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
  {id: 3, name: "Modern Black Blouse", category :"Fashion", price:"$35.00", rating: 5, img: "https://images.pexels.com/photos/5422609/pexels-photo-5422609.jpeg?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" }
])

  return (
    <>       
        <Navbar />
        <Showcase />
        <NewArrivals />
        <FeaturedProducts title ="Featured Products" products = {featuredProducts} />
        <FeaturedProducts title ="Top Products" products = {topProducts} />
        <Footer />


    </>
  )
}

export default HomeView