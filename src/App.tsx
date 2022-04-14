import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/cart/CartPage';
import Checkout from './pages/cart/Checkout';
import Shipping from './pages/cart/Shipping';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import ContextProvider from './store/context-provider';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
