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
import UserContextProvider from './context/userContext';
import ProtectedRoute from './components/protectedRoute/protectedRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { Toaster } from 'react-hot-toast';


let x = createBrowserRouter([
  {path: '', element:<Layout/>, children: [
    {index:true, element:<Home/>},
    {path: 'categories' , element:<Categories/>},
    {path: 'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute> },
    {path: 'carts' , element:<ProtectedRoute><Carts/></ProtectedRoute>},
    {path: 'products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path: 'productDetails/:id/:category' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path: 'login' , element:<Login/>},
    {path: 'register' , element:<Register/>},
    {path: '*' , element:<Notfound/>},
  ]},
  
])

function App() {

  return(
    <UserContextProvider>
          <RouterProvider router={x}></RouterProvider>
          <Toaster/>
    </UserContextProvider>

  )
  
}

export default App
