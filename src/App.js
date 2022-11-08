import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomeView from './Views/HomeView';
import ContactsView from './Views/ContactsView';
import NotFoundView from './Views/NotFoundView';
import ProductsView from './Views/ProductsView';
import ProductDetailsView from './Views/ProductDetailsView';
import CategoriesView from './Views/CategoriesView';
import SearchView from './Views/SearchView';
import { ProductContext } from './contexts/context';

function App() {

  const [products, setProducts] = useState({

    allProducts:[],

    featuredProducts:[],

    gridProducts:[]

  })

  useEffect (() => {

    const fetchAllProducts = async () => {

      let result = await fetch ('https://win22-webapi.azurewebsites.net/api/products')

      setProducts({...products, allProducts: await result.json()})

    }
    fetchAllProducts()

  
const fetchFeaturedProducts = async () => {
  let result = await fetch ('https://win22-webapi.azurewebsites.net/api/products?take=8')
   setProducts({...products, featuredProducts: await result.json()})

 }
fetchFeaturedProducts()

const fetchGridProducts = async () => {
  let result = await fetch ('https://win22-webapi.azurewebsites.net/api/products?take=4')
   setProducts({...products, gridProducts: await result.json()})

 }
fetchGridProducts()

},[])




  
  

  return (
    <BrowserRouter>
      <ProductContext.Provider value ={products}>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/Contacts" element={<ContactsView />} />
        <Route path="/Products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/Categories" element={<CategoriesView />} />
        <Route path="/Search" element={<SearchView />} />
        <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );

  }
export default App;
