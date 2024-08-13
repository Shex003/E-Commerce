import React from 'react'
import style from './MiniSlider.module.css'
import Slider from "react-slick";
import img1 from '../../assets/img/slider-image-2.jpeg'
import img2 from '../../assets/img/slider-image-3.jpeg'
import img3 from '../../assets/img/grocery-banner.png'
import img4 from '../../assets/img/grocery-banner-2.jpeg'



export default function MiniSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return <>
    <div className='container'>
      <div className='row'>
        <div className='w-1/3'>
          <img src={img1} className='w-full h-40' alt="" />
          <img src={img2} className='w-full h-40' alt="" />
        </div>
        <div className='w-2/3'>
          <Slider {...settings}>
            <img src={img3} className='w-full h-80' alt="" />
            <img src={img4} className='w-full -h-80' alt="" />
          </Slider>
        </div>
      </div>
    </div>
    </>
}
