import React from 'react';
import style from './Products.module.css'
import axios from 'axios'
import Loader from '../loader/loader'
import { Link } from 'react-router-dom'
import CategorySlider from '../CategorySlider/CategorySlider'
import MiniSlider from '../MiniSlider/MiniSlider'
import { CartContext } from '../../context/CartContext'
import { useQuery } from '@tanstack/react-query'
import useFetch from '../../hooks/useFetch';
import {Helmet} from "react-helmet";

export default function Products() {

  const {data, isLoading, isError, isFetching, error} = useFetch(
    `https://ecommerce.routemisr.com/api/v1/products`,
    "Products"
  );

  // const {data, isLoading, isError, isFetching, error} = useQuery({
  //   queryKey: 'Products',
  //   queryFn: getProducts
  // });

  // function getProducts() {
  //   return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  // }

return <>
<Helmet>
      <meta charSet="utf-8" />
      <title>Products </title>
    </Helmet>
<MiniSlider/>
  <div className='container mt-5'>
  {
    !isLoading?
    <div className='row gap-3'>
  {data?.data?.data.map((productInfo)=>{
    return <div className='w-2/12 px-4 mt-3 product' key={productInfo.id}>
      <div className='bg-slate-100  p-2'>
      <Link to={`productDetails/${productInfo.id}/${productInfo.category.name}`}>
      <img className='w-full' src={productInfo.imageCover} alt={productInfo.title} />
      <span className='block font-light text-green-600'>{productInfo.category.name}</span>
      <span className=' font-light text-gray-900 '>{productInfo.title.split(' ').slice(0,3).join(' ')}</span>
      <div className='flex justify-between'>
        <span>{productInfo.price}€</span>
        <span>{productInfo.ratingsQuantity}<i className='fas fa-star text-yellow-300'></i></span>
      </div>
      </Link>
      <button onClick ={()=>{addToCart(productInfo.id)}}  className='btn mt-3'>Add To Cart</button>

      </div>
     
    </div>
  })}
  </div>:
  <Loader/>
  }
  
  </div>
  </>
}
