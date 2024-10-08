import React, { useEffect, useState, useContext, useRef } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Category from '../Category/Category'
import Slider from "react-slick";
import { CartContext } from '../../context/CartContext'
import {Helmet} from "react-helmet";


export default function ProductDetails() {

  const toTop = useRef();

  let { addProductToCart } = useContext(CartContext);
  async function addProductToCartHandler(productId) {
    await addProductToCart(productId);
  }

  let {id} = useParams()
  const [details, setDetails] = useState(null)

function getProductDetails() {
axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
.then(({data})=>{
  setDetails(data.data)
})
.catch()
}
useEffect(()=>{
  getProductDetails() 
},[id,])

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

  function handleToTop(){
      toTop.current.scrollIntoView({ behavior: "smooth" });
  }
  // onClick={handleToTop} ..where?!
  return <>
  <Helmet>
      <meta charSet="utf-8" />
      <title>{details?.title}</title>
      <meta name="keywords" content= {details?.slug} />
    </Helmet>

   <div className='container'>
   <div className='row justify-center items-center gap-3'>
    <div className='w-1/4' ref={toTop}>
    <Slider {...settings}>
      {details?.images.map((scr)=>  <img src={scr} className='w-full' alt={details?.title} />
)}
      
    </Slider>
    </div>
    <div className='w-2/4 flex flex-col justify-between h-60'>
    <div>
    <h1 className='text-lg font-semibold text-slate-800'>{details?.title}</h1>
    <p>{details?.description}</p>
    </div>
   <div>
   <p>{details?.category.name}</p>
    <div className='flex justify-between my-3'>
          <span>{details?.price}€</span>
          <span>{details?.ratingsQuantity}<i className='fas fa-star text-yellow-300'></i></span>
        </div>
        <button onClick={()=> addProductToCartHandler(details.id)} className='btn'>Add To Cart</button>
    </div>
   </div>
    </div>
  </div>
  
  <Category categoryName={details?.category?.name} />
  {/* <button onClick={handleToTop} className='btn'>To Top</button> */}
    </>
} 
