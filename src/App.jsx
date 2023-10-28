import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Products from './components/products/Products'
import Home from './components/home/Home'

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
