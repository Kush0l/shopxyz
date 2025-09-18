import './App.css'
import Products from './components/Products'
import Navbar from './components/Navbar'
import { useState, createContext, useContext } from "react"
import Login from './components/Login'

import Home from './components/Home'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';




// const CartContext = createContext();

function App() {

  

  return (

    <BrowserRouter>

     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Home />} />
     
      </Routes>
    </BrowserRouter>

    // <CartContext.Provider value={cart}>

    // <>
    //   <Navbar cart={cart}/>
    //   <Products handleClick={handleClick} />
    // </>
    // </CartContext.Provider>
  )
}

export default App
