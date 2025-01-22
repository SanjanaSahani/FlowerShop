import React, {useState} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
      setCartItems((prevItems) => [...prevItems, item]);
  };

  const clearCart = () => {
    setCartItems([]); 
};

  return (
    <>
    <Header cartItems={cartItems}/>
    <Outlet context={{ cartItems, addToCart, clearCart }} />
    <Footer/>
    </>
  )
}

export default Layout