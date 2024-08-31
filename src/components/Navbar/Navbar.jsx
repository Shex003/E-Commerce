// import React, { useContext, useEffect } from 'react';
// import style from './Navbar.module.css';
// import img from '../../assets/img/logo.jpg';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { userContext } from '../../context/userContext'
// import { CartContext } from '../../context/CartContext'

// export default function Navbar() {
//   let navigate = useNavigate();
//   let { isLogin, setLogin } = useContext(userContext)
//   let { noOfCartItem, getCartProducts } = useContext(CartContext);

//   function getCart() {
//     getCartProducts()
//   }
//   useEffect(() => {
//     getCart()
//   }, [])


//   function logOut() {
//     localStorage.removeItem('userToken');
//     setLogin(null);
//     navigate('/login');
//   }



//   return <>
//     <nav className='bg-slate-300 shadow-sm w-full top-0 fixed z-50'>
//       <div className='flex justify-between lg:items-center flex-col  lg:flex-row'>
//         <div className='logo flex flex-col lg:flex-row lg:items-center'>
//           <img scr={img} width={110} alt='frech-card' />
//           {isLogin ? (

//             <ul className='flex flex-col lg:flex-row'>
//               <li className='px-3 py-2'> <NavLink to={''}>Home</NavLink> </li>
//               <li className='px-3 py-2'> <NavLink to={'brands'}>Brands</NavLink> </li>
//               <li className='px-3 py-2'> <NavLink to={'products'}>Products</NavLink> </li>
//               <li className='px-3 py-2'> <NavLink className="relative" to={'carts'}>
//                 Carts
//                 <span class="absolute top-0 bg-red-500 text-white  text-xs font-medium me-2 px-2.5 py-0.5 rounded">
//                   {noOfCartItem}
//                 </span>
//               </NavLink>
//               </li>
//             </ul>

//           ) : null}

//         </div>

//         <div className='social'>
//           <ul className='flex flex-col lg:flex-row lg:items-center'>
//             {!isLogin ?
//               <>
//                 <li className='px-2'><NavLink to={'register'}>Register</NavLink></li>
//                 <li className='px-2'><NavLink to={'login'}>Login</NavLink></li>
//               </>

//               : <li className='px-2 cursor-pointer'><span onClick={() => { logOut() }}>Logout</span></li>

//             }

//             <li>
//               <i className='fab px-2 fa-facebook'></i>
//               <i className='fab px-2 fa-youtube'></i>
//               <i className='fab px-2 fa-instagram'></i>
//             </li>
//           </ul>
//         </div>
//         <button className='md:hidden'><i className="fa-solid fa-bars text-2xl"></i></button>
//       </div>
//       <div className="md:hidden">test</div>
//     </nav>

//   </>

// //   return <>

// //     <nav className="bg-gray-800">
// //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
// //         <div className="relative flex h-16 items-center justify-between">
// //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
// //             {/* Mobile menu button*/}
// //             <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
// //               <span className="absolute -inset-0.5" />
// //               <span className="sr-only">Open main menu</span>
// //               {/*
// //       Icon when menu is closed.

// //       Menu open: "hidden", Menu closed: "block"
// //     */}
// //               <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
// //               </svg>
// //               {/*
// //       Icon when menu is open.

// //       Menu open: "block", Menu closed: "hidden"
// //     */}
// //               <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
// //               </svg>
// //             </button>
// //           </div>
// //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
// //             <div className="flex flex-shrink-0 items-center">
// //               <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
// //             </div>
// //             <div className="hidden sm:ml-6 sm:block">
// //               <div className="flex space-x-4">
// //                 {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
// //                 {isLogin ? (
// //                   <ul className='flex flex-col lg:flex-row lg:items-center'>
// //                     <li className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page"><NavLink to={''}>Home</NavLink></li>
// //                     <li className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><NavLink to={'brands'}>Brands</NavLink></li>
// //                     <li className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><NavLink to={'products'}>Products</NavLink></li>
// //                     <li className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"> <NavLink className="relative" to={'carts'}>
// //                  Carts
// //                  <span class="absolute top-0 bg-red-500 text-white  text-xs font-medium me-2 px-2.5 py-0.5 rounded">
// //                    {noOfCartItem}
// //                  </span>
// //                </NavLink>
// //               </li>
// //                   </ul>
// //                 ) : null}
// //               </div>
// //             </div>
// //           </div>
// //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
// //             <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// //               <span className="absolute -inset-1.5" />
// //               <span className="sr-only">View notifications</span>
// //               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
// //               </svg>
// //             </button>
// //             {/* Profile dropdown */}
// //             <div className="relative ml-3">
// //               <div>
// //                 <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
// //                   <span className="absolute -inset-1.5" />
// //                   <span className="sr-only">Open user menu</span>
// //                   <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
// //                 </button>
// //               </div>
// //               {/*
// //       Dropdown menu, show/hide based on menu state.

// //       Entering: "transition ease-out duration-100"
// //         From: "transform opacity-0 scale-95"
// //         To: "transform opacity-100 scale-100"
// //       Leaving: "transition ease-in duration-75"
// //         From: "transform opacity-100 scale-100"
// //         To: "transform opacity-0 scale-95"
// //     */}
// //               <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
// //                 {/* Active: "bg-gray-100", Not Active: "" */}
// //                 <ul className='flex flex-col lg:flex-row lg:items-center'>
// //                 {!isLogin ?
// //                 <>
// //                 <li className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0"><NavLink to={'register'}>Register</NavLink></li>
// //                 <li className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1"><NavLink to={'login'}>Login</NavLink></li>
// //                 </>
// //                 : <li className='block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1'><span onClick={() => { logOut() }}>Logout</span></li>
// //   }
// // </ul>
// //               </div>
              
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Mobile menu, show/hide based on menu state. */}
// //       <div className="sm:hidden" id="mobile-menu">
// //         <div className="space-y-1 px-2 pb-3 pt-2">
// //           {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

// //           <ul>
// //             <li className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page"><NavLink to={''}>Home</NavLink></li>
// //             <li href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><NavLink to={'brands'}>Brands</NavLink></li>
// //             <li href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><NavLink to={'products'}>Products</NavLink></li>
// //             <li href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><NavLink className="relative" to={'carts'}></NavLink></li>
// //           </ul>

// //         </div>
// //       </div>
// //     </nav>
// //   </>
// }


import React, { useContext, useEffect, useState } from 'react';
import style from './Navbar.module.css';
import img from '../../assets/img/logo.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import { CartContext } from '../../context/CartContext';

export default function Navbar() {
  let navigate = useNavigate();
  let { isLogin, setLogin } = useContext(userContext);
  let { noOfCartItem, getCartProducts } = useContext(CartContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    getCartProducts();
  }, []);

  function logOut() {
    localStorage.removeItem('userToken');
    setLogin(null);
    navigate('/login');
  }

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <>
      <nav className='bg-slate-300 shadow-sm w-full top-0 fixed z-50'>
        <div className='flex items-center justify-between px-4 py-1'>
          <div className='logo flex items-center'>
            <img src={img} width={110} alt='frech-card' />
            <div className='hidden lg:flex lg:items-center ml-4'>
              {isLogin && (
                <ul className='flex space-x-4'>
                  <li className='px-3 py-2'>
                    <NavLink to={''}>Home</NavLink>
                  </li>
                  <li className='px-3 py-2'>
                    <NavLink to={'brands'}>Brands</NavLink>
                  </li>
                  <li className='px-3 py-2'>
                    <NavLink to={'products'}>Products</NavLink>
                  </li>
                  <li className='px-3 py-2 relative'>
                    <NavLink to={'carts'}>
                      Carts
                      <span className='absolute top-0 right-0 bg-red-500 text-white text-xs font-medium px-2.5 py-0.5 rounded'>
                        {noOfCartItem}
                      </span>
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </div>

          <button className='lg:hidden' onClick={toggleDropdown}>
            <i className='fa-solid fa-bars text-2xl'></i>
          </button>

          <div className='hidden lg:flex lg:items-center ml-auto'>
            <ul className='flex space-x-4'>
              {!isLogin ? (
                <>
                  <li className='px-2'>
                    <NavLink to={'register'}>Register</NavLink>
                  </li>
                  <li className='px-2'>
                    <NavLink to={'login'}>Login</NavLink>
                  </li>
                </>
              ) : (
                <li className='px-2 cursor-pointer'>
                  <span onClick={logOut}>Logout</span>
                </li>
              )}
              <li className='flex space-x-2 items-center'>
                <i className='fab fa-facebook'></i>
                <i className='fab fa-youtube'></i>
                <i className='fab fa-instagram'></i>
              </li>
            </ul>
          </div>
        </div>

        {isDropdownOpen && (
          <div className='lg:hidden bg-slate-300 shadow-sm'>
            <ul className='flex flex-col items-center py-4'>
              <li className='px-3 py-2'>
                <NavLink to={''}>Home</NavLink>
              </li>
              <li className='px-3 py-2'>
                <NavLink to={'brands'}>Brands</NavLink>
              </li>
              <li className='px-3 py-2'>
                <NavLink to={'products'}>Products</NavLink>
              </li>
              <li className='px-3 py-2 relative'>
                <NavLink to={'carts'}>
                  Carts
                  <span className='absolute top-0 right-0 bg-red-500 text-white text-xs font-medium px-2.5 py-0.5 rounded'>
                    {noOfCartItem}
                  </span>
                </NavLink>
              </li>
              {isLogin && (
                <>
                  <li className='px-3 py-2 cursor-pointer'>
                    <span onClick={logOut}>Logout</span>
                  </li>
                  <li className='flex space-x-4 py-2'>
                    <i className='fab fa-facebook'></i>
                    <i className='fab fa-youtube'></i>
                    <i className='fab fa-instagram'></i>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
