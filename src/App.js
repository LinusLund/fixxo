import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './Views/HomeView';
import ContactsView from './Views/ContactsView';
import NotFoundView from './Views/NotFoundView';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="*" element={<NotFoundView />} />
        </Routes>
    </BrowserRouter>
  );

  }
export default App;
