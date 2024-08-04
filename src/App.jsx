import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import Carts from './components/Carts/Carts';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Notfound from './components/Notfound/Notfound';
import Login from './components/Login/Login';


let x = createBrowserRouter([
  {path: '', element:<Layout/>, children: [
    {index:true, element:<Home/>},
    {path: 'categories' , element:<Categories/>},
    {path: 'brands' , element:<Brands/>},
    {path: 'carts' , element:<Carts/>},
    {path: 'products' , element:< Products/>},
    {path: 'login' , element:<Login/>},
    {path: 'register' , element:<Register/>},
    {path: '*' , element:<Notfound/>},
  ]},
  
])

function App() {

  return <RouterProvider router={x}></RouterProvider>
    
  
}

export default App
