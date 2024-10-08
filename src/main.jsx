import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartContextProvider from './context/CartContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  </CartContextProvider>
  
)
