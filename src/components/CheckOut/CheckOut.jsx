import React, { useContext } from 'react'
import style from './CheckOut.module.css'
import { useFormik } from 'formik';
import { CartContext } from '../../context/CartContext';

export default function CheckOut() {

  let {onlinePayment} = useContext(CartContext)

  let formik = useFormik({
    initialValues:{
     details: "",
        phone: "",
        city: "",
  },
  
  onSubmit:(values) => {
    payOnline(values);
    console.log(values)
  }
});

async function payOnline(values){
  await onlinePayment(values)
}


  return <>
    <div className='w-1/2 mx-auto'>
    <form onSubmit={formik.handleSubmit} className="space-y-6" method="POST">

  
  <div>
  <div>
       <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details</label>
        <div className="mt-1">
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.details} name='details' id='details' type="text" autocomplete="details" required
            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
        </div>
  </div>
  {formik.touched.details && formik.errors.details ? <div className="text-red-500 text-xs">{formik.errors.details}</div> : null}   

  <div>
       <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <div className="mt-1">
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} name='phone' id='phone' type="tell" autocomplete="phone" required
            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
        </div>
  </div>
  {formik.touched.phone && formik.errors.phone ? <div className="text-red-500 text-xs">{formik.errors.phone}</div> : null} 

  <div>
       <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
        <div className="mt-1">
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city} name='city' id='city' type="text" autocomplete="city" required
            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
        </div>
  </div>
  {formik.touched.city && formik.errors.city ? <div className="text-red-500 text-xs">{formik.errors.city}</div> : null} 

          <button
          className="flex w-full justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
           Pay Now
          </button>
  </div>
</form>
    </div>
    </>
}
