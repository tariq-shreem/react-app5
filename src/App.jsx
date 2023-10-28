import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Products from './components/products/Products.jsx'
import Home from './components/home/Home.jsx'

export default function App() {
  return (
    <>
     <Navbar />
     <Products />
     <Home />
     <Footer />
    </>
  )
}
