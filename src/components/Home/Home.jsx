import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import Loader from '../loader/loader'
import { Link } from 'react-router-dom'

export default function Home() {

  const [product, setProduct] = useState([])
  const [isLoading, setLoading] = useState(true)

function getProducts() {
  axios.get('https://ecommerce.routemisr.com/api/v1/products')
  .then(({data})=>{setProduct(data.data)
    setLoading(false)
  })
  .catch(()=>{
    setLoading(false)
  })
}


useEffect(()=>{
  getProducts()
},[])


  return <>
    <div className='container'>
    {
      !isLoading?
      <div className='row gap-3'>
    {product.map((productInfo)=>{
      return <div className='w-2/12 px-4'>
        <Link to={`productDetails/${productInfo.id}`}>
        <img className='w-full' src={productInfo.imageCover} alt={productInfo.title} />
        <span className='block font-light text-green-600'>{productInfo.category.name}</span>
        <span className=' font-light text-gray-900 '>{productInfo.title.split(' ').slice(0,3).join(' ')}</span>
        <div className='flex justify-between'>
          <span>{productInfo.price}€</span>
          <span>{productInfo.ratingsQuantity}<i className='fas fa-star text-yellow-300'></i></span>
        </div>
        </Link>
       
      </div>
    })}
    </div>:
    <Loader/>
    }
    
    </div>
    </>
}
