import React, { useEffect, useState } from 'react'
import style from './Category.module.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Loader from '../loader/loader'

export default function Category(props) {
  // let category=props.categoryName
  let {category} = useParams()
  const [isLoading, setLoading] = useState(true)
  console.log(props)

  const [product, setDetails] = useState([])

function getRelatedCategory() {
axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
.then(({data})=>{
  let allProducts = data.data;
  let related = data.data.filter((prod)=>{
    return prod.category.name === category
  })
  console.log(related)
  setDetails(related)
  setLoading(false)
})
.catch(()=>{
  setLoading(false)
})
}
useEffect(()=>{
  getRelatedCategory()
},[])

return <>
<div className='container'>
    {
      !isLoading?
      <div className='row gap-3'>
    {product.map((productInfo)=>{
      return <div className='w-2/12 px-4'>
        <Link to={`/productDetails/${productInfo.id}/${productInfo.category.name}`}>
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
