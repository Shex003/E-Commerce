import React, { useContext, useEffect } from 'react';
import style from './Navbar.module.css';
import img from '../../assets/img/logo.jpg';
import {NavLink, useNavigate} from 'react-router-dom';
import {userContext} from '../../context/userContext'
import {CartContext} from '../../context/CartContext'

export default function Navbar() {
  let navigate = useNavigate();
  let {isLogin, setLogin} = useContext(userContext)
  let {noOfCartItem, getCartProducts} = useContext(CartContext);

  function getCart(){
    getCartProducts()
  }
  useEffect(()=>{
    getCart()
  }, [])


  function logOut () {
    localStorage.removeItem('userToken');
    setLogin(null);
    navigate('/login')
    }



  return <>
  <nav className='bg-slate-300 shadow-sm w-full top-0 fixed z-50'>
  <div className='flex justify-between lg:items-center flex-col  lg:flex-row'>
  <div className='logo flex flex-col lg:flex-row lg:items-center'>
  <img scr={img} width={110} alt='frech-card'/>
  {isLogin?

<ul className='flex flex-col lg:flex-row'>
<li className='px-3 py-2'> <NavLink to={''}>Home</NavLink> </li>
<li className='px-3 py-2'> <NavLink to={'brands'}>Brands</NavLink> </li>
<li className='px-3 py-2'> <NavLink to={'products'}>Products</NavLink> </li>
<li className='px-3 py-2'> <NavLink className="relative" to={'carts'}>
  Carts
  <span class="absolute top-0 bg-red-500 text-white  text-xs font-medium me-2 px-2.5 py-0.5 rounded">
    {noOfCartItem}
    </span>
    </NavLink> </li>
</ul>

  :null}
 
  </div>

  <div className='social'>
    <ul className='flex flex-col lg:flex-row lg:items-center'>
      {!isLogin? 
      <>
        <li className='px-2'><NavLink to={'register'}>Register</NavLink></li>
        <li className='px-2'><NavLink to={'login'}>Login</NavLink></li>
      </>
      
    :      <li className='px-2 cursor-pointer'><span onClick={()=>{logOut()}}>Logout</span></li>

    }
    
    <li>
      <i className='fab px-2 fa-facebook'></i>
      <i className='fab px-2 fa-youtube'></i>
      <i className='fab px-2 fa-instagram'></i>
    </li>
    </ul>
  </div>

  </div>
  </nav>
    
    </>
}
