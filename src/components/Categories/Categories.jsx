import React from 'react'
import style from './Categories.module.css'
import axios from 'axios'
import Loader from '../loader/loader'
import { Link } from 'react-router-dom'
import CategorySlider from '../CategorySlider/CategorySlider'
import MiniSlider from '../MiniSlider/MiniSlider'
import { CartContext } from '../../context/CartContext'
import { useQuery } from '@tanstack/react-query'
import useFetch from '../../hooks/useFetch';
import {Helmet} from "react-helmet";

export default function Categories() {
  // function getCategories() {
  //   return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  // }

  // const {data, isLoading, isError, isFetching, error} = useQuery({
  //   queryKey: ['Categories'],
  //   queryFn: getCategories
  // })

  const {data, isLoading, isError, isFetching, error} = useFetch(
    'https://ecommerce.routemisr.com/api/v1/categories',
    "Categories"
  );
  return <>
  <Helmet>
      <meta charSet="utf-8" />
      <title>Categories </title>
    </Helmet>
    <div>Categories</div>
    </>
}
