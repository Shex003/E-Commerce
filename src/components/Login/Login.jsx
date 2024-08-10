import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { userContext } from '../../context/userContext';


export default function Login(){

    let {setLogin} = useContext(userContext)

  const [apiError,setError] = useState('')
  const [isLoading,setLoading] = useState(false)
  
  let navigate = useNavigate()
  function handleRegister(formsData) {
      
      setLoading(true)
  
  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',formsData) 
  .then((response)=>{console.log('success',response)
      
  if(response.data.message === 'success') {
    localStorage.setItem('useToken',response.data.token)
    setLogin(response.data.token)
    setLoading(false)
    navigate('/')
  }
  })
  
  .catch((error)=>{
      setLoading(false)
      setError(error.response.data.message)
  })
  
  }
  
  let validationSchema = Yup.object({
    email: Yup.string().required('email is required').email('email is invalid'),
    password: Yup.string().required('password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'password is invalid'),
  })
  
  let formik = useFormik({
        initialValues:{
          email: '',
          password: '',
      },
      validationSchema,
      onSubmit:handleRegister
  })
  
    return <>
      <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">
  
              {/* <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" /> */}
  
              <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-green-600">
                  Login
              </h2>
  
              {apiError ? <div className="text-red-500 text-sm">{apiError}</div>:null}
  
              <form onSubmit={formik.handleSubmit} className="space-y-6" method="POST">
  
                  
                  
                  <div>
                      <label htmlFor="your-email" className="block text-sm font-medium text-gray-700">Email</label>
                      <div className="mt-1">
                          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name='email' id='your-email' type="email" autocomplete="email" required
                              className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
                      </div>
                  </div>
  
                  {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-xs">{formik.errors.email}</div> : null}
  
                  <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                      <div className="mt-1">
                          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name='password' id='password' type="password" autocomplete="password" required
                              className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
                      </div>
                  </div>
  
                  {formik.touched.password && formik.errors.password ? <div className="text-red-500 text-sm">{formik.errors.password}</div> : null}
  
                  
                  <div>
                          <button type="submit" disabled={!(formik.isValid && formik.dirty)}
                          className="flex w-full justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
                          {isLoading? <i className='fa fa-spinner fa-spin mx-3'></i>:null} Login
                          </button>
                  </div>
              </form>
          </div>
      </div>
  </div>
      </>
  }
