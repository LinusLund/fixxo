import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './Views/HomeView';
import ContactsView from './Views/ContactsView';
import NotFoundView from './Views/NotFoundView';
import ProductsView from './Views/ProductsView';
import ProductDetailsView from './Views/ProductDetailsView';
import CategoriesView from './Views/CategoriesView';
import SearchView from './Views/SearchView';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/Contacts" element={<ContactsView />} />
        <Route path="/Products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/Categories" element={<CategoriesView />} />
        <Route path="/Search" element={<SearchView />} />
        <Route path="*" element={<NotFoundView />} />
        </Routes>
    </BrowserRouter>
  );

  }
export default App;
