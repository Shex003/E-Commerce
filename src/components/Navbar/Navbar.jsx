import React, { useContext, useState } from 'react';
import style from './Navbar.module.css';
import img from '../../assets/img/logo.jpg';
import {NavLink} from 'react-router-dom';
import {userContext} from '../../context/userContext'


export default function Navbar() {
  let {isLogin} = useContext(userContext)
  return <>
  <nav className='bg-slate-300 shadow-sm py-4'>
  <div className='flex justify-between lg:items-center flex-col  lg:flex-row'>
  <div className='logo flex flex-col lg:flex-row lg:items-center'>
  <img scr={img} width={110} alt='frech-card'/>
  {isLogin?

<ul className='flex flex-col lg:flex-row'>
<li className='px-3 py-2'> <NavLink to={''}>Home</NavLink> </li>
<li className='px-3 py-2'> <NavLink to={'brands'}>Brands</NavLink> </li>
<li className='px-3 py-2'> <NavLink to={'products'}>Products</NavLink> </li>
<li className='px-3 py-2'> <NavLink to={'carts'}>Carts</NavLink> </li>
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
      
    :      <li className='px-2'><NavLink to={'logout'}>Logout</NavLink></li>

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
