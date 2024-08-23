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
import AllOrders from './components/AllOrders/AllOrders';
import CheckOut from './components/CheckOut/CheckOut';
import ProtectedAuth from './components/ProtectedAuth/ProtectedAuth';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



let routes = createBrowserRouter([
  {path: '', element:<Layout/>, children: [
    {index:true, element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path: 'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path: 'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute> },
    {path: 'carts' , element:<ProtectedRoute><Carts/></ProtectedRoute>},
    {path: 'products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path: 'allOrders' , element:<ProtectedRoute><AllOrders/></ProtectedRoute>},
    {path: 'checkOut' , element:<ProtectedRoute><CheckOut/></ProtectedRoute>},
    {path: 'productDetails/:id/:category' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path: 'login' , element:<ProtectedAuth><Login/></ProtectedAuth>},
    {path: 'register' , element:<ProtectedAuth><Register/></ProtectedAuth> },
    {path: '*' , element:<ProtectedRoute><Notfound/></ProtectedRoute>},
  ]},
  
])

function App() {
  const queryClient = new QueryClient()

  return(
    <QueryClientProvider client={queryClient}>
    <UserContextProvider>
          <RouterProvider router={routes}></RouterProvider>
          <Toaster/>
          <ReactQueryDevtools initialIsOpen={false} />
    </UserContextProvider>
    </QueryClientProvider>

  )
  
}

export default App
