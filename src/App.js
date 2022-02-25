
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Checkout } from "./components/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import theme from  './theme/maintheme'
import './App.css'


function App() {
  return (
    <div className="App">
      <div className="header">
      
        <Header/>
        
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/order/checkout" element={<Checkout/>}/>
            <Route path="/order" element={<Order/>}/>
          </Routes>
        </div>
        <div className="footer">
          <Footer/>
        </div>

    </div>
  );
}

export default App;
