import './App.css';
import Footer from './components/Footer/Footer.tsx';
import Header from './components/Header/Header.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage.tsx';
import CartPage from './pages/CartPage/CartPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
