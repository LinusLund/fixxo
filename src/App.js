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
import { ProductContext, FeaturedProductsContext, GridProductsContext } from './contexts/context';


function App() {

  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [gridProducts, setGridProducts] = useState([])

 useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()

    const fetchGridData = async () => {
      const result  = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setGridProducts(await result.json())
    }
    fetchGridData()

 })





  
  
  return (
    <BrowserRouter>
      <ProductContext.Provider value ={products}>
        <FeaturedProductsContext.Provider value={featured}>
          <GridProductsContext.Provider value={gridProducts}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/Contacts" element={<ContactsView />} />
              <Route path="/Products" element={<ProductsView />} />
              <Route path="/products/:name" element={<ProductDetailsView />} />
              <Route path="/Categories" element={<CategoriesView />} />
              <Route path="/Search" element={<SearchView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </GridProductsContext.Provider> 
        </FeaturedProductsContext.Provider>
      </ProductContext.Provider>
    </BrowserRouter>
  );

  }
export default App;
