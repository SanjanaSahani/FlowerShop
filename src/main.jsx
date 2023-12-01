import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Sign from './components/Sign.jsx'
import Cart from './components/Cart.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "gallery",
        element: <Gallery/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "sign",
        element: <Sign/>
      },
      
      {
        path: "cart",
        element: <Cart/>
      },
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
