import React, { useState } from 'react';
import style from './Register.module.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

// export default function Register() {
// let navigate = useNavigate()
// async function handleRegister(formsData) {
// console.log('register', formsData)
// let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',formsData)
// console.log( 'respons',data)
// if(data.message === 'success') {
// navigate('/login')
// }
// }

export default function Register(){

const [apiError,setError] = useState('')
const [isLoading,setLoading] = useState(false)

let navigate = useNavigate()
function handleRegister(formsData) {
    
    setLoading(true)

axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',formsData) 
.then((response)=>{console.log('success',response)
    
if(response.data.message === 'success') {
    setLoading(false)
    navigate('/login')
}
})

.catch((error)=>{
    setLoading(false)
    setError(error.response.data.message)
})

}

let validationSchema = Yup.object({
name: Yup.string().required('name is required').min(3, 'name must be at least 3 characters').max(255, 'name must be at most 255 characters'),
email: Yup.string().required('email is required').email('email is invalid'),
password: Yup.string().required('password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'password is invalid'),
rePassword: Yup.string().required('rePassword is required').oneOf([Yup.ref('password')], 'passwords must match'),
phone: Yup.string().required('phone is required').matches(/^01[1250][0-9]{8}$/, 'phone is invalid')
})

let formik = useFormik({
      initialValues:{
        name: '',
        email: '',
        password: '',
        rePassword: '',
        phone: ''
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
                Register Now
            </h2>

            {apiError ? <div className="text-red-500 text-sm">{apiError}</div>:null}

            <form onSubmit={formik.handleSubmit} className="space-y-6" method="POST">

                <div>
                    <label htmlFor="your-name" className="block text-sm font-medium text-gray-700">Username</label>
                    <div className="mt-1">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} name='name' id='your-name' type="text" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
                    </div>
                </div>
                
                {formik.touched.name && formik.errors.name ? <div className="text-red-500 text-xs">{formik.errors.name}</div> : null}
                
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
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <div className="mt-1">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} name='rePassword' id='confirm-password' type="password" autocomplete="new-password" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
                    </div>
                </div>

                {formik.touched.rePassword && formik.errors.rePassword ? <div className="text-red-500 text-sm">{formik.errors.rePassword}</div> : null}

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <div className="mt-1">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} name='phone' id='phone' type="tel" autocomplete="confirm-password" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
                    </div>
                </div>

                {formik.touched.phone && formik.errors.phone ? <div className="text-red-500 text-sm">{formik.errors.phone}</div> : null}    

                <div>
                    <button type="submit" disabled={!(formik.isValid && formik.dirty)}
                        className="flex w-full justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
                        {isLoading? <i className='fa fa-spinner fa-spin mx-3'></i>:null} Register
                        </button>
                </div>
            </form>
        </div>
    </div>
</div>
    </>
}
