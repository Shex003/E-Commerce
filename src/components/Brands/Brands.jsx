import React from 'react';
import style from './Brands.module.css'
import axios from 'axios'
import Loader from '../loader/loader'
import { Link } from 'react-router-dom'
import CategorySlider from '../CategorySlider/CategorySlider'
import MiniSlider from '../MiniSlider/MiniSlider'
import { CartContext } from '../../context/CartContext'
import { useQuery } from '@tanstack/react-query'
import useFetch from '../../hooks/useFetch';
import {Helmet} from "react-helmet";

export default function Brands() {
  // function getBrands() {
  //   return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  // }

  // console.log('Brands')

  // const {data, isLoading, isError, isFetching, error} = useQuery({
  //   queryKey: ['Brands'],
  //   queryFn: getBrands
  // })

  const {data, isLoading, isError, isFetching, error} = useFetch(
    'https://ecommerce.routemisr.com/api/v1/brands',
    "Brands"
  );

  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Brands </title>
    </Helmet>
    <div>Brands</div>
    </>
}
