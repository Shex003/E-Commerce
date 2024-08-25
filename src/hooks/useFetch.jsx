import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export default function useFetch(api, key) {
    const {data, isLoading, isError, isFetching, error} = useQuery({
        queryKey: [key],
        queryFn: ()=> getProducts(),
      });

    async function getProducts() {
        return axios.get(api);
      }
  
      
      return {data, isLoading, isError, isFetching, error};
}
