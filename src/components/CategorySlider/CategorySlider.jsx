import React, { useEffect, useState } from 'react'
import style from './CategorySlider.module.css'
import axios from 'axios'
import Slider from "react-slick";


export default function CategorySlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: true,
  };
  const [categories, setCategories] = useState([])
  function getCategories(){
    axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    .then(({data})=>{
      setCategories(data.data)
    })
    .catch()
  }
  useEffect(()=>{
    getCategories()
  },[])

  return <>
  <div className='container py-5s'>
    <h2 className='py-4 text-gray-800 text-xl font-light'>Shop Popular Categoriies</h2>
  <Slider {...settings}>
      {categories.map((category)=> <div className='' >
      <img src={category.image} className='w-full h-52' alt={category.name} />
      <h3 className='font-light mt-2'>{category.name}</h3>
      </div>)}
    </Slider>
  </div>
     
    </>
}
