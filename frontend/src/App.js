import React from 'react'
import { Routes, Route } from "react-router-dom";

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import ProductDetails from './components/product/ProductDetails'
import Login from './components/user/Login';
import Register from './components/user/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact="true" />
        <Route path="/search/:keyword" element={<Home />} exact="true" />
        <Route path="/product/:id" element={<ProductDetails />} exact="true" />
        <Route path="/login" element={<Login />} exact="true" />
        <Route path="/register" element={<Register />} exact="true" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;