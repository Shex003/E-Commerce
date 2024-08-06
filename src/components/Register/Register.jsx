import React from 'react';
import style from './Register.module.css'
import { useFormik } from 'formik';

export default function Register() {

  function handleRegister(param){
    console.log('register', param);
  }
let formik = useFormik({
      initialValues:{
        name: '',
        email: '',
        password: '',
        rePassword: '',
        phone: ''
    },
    onSubmit:handleRegister
})

  return <>
    <div class="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
        <div class="bg-white shadow-md rounded-md p-6">

            {/* <img class="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" /> */}

            <h2 class="my-3 text-center text-3xl font-bold tracking-tight text-green-600">
                Register Now
            </h2>


            <form onSubmit={formik.handleSubmit} class="space-y-6" method="POST">

                <div>
                    <label for="your-name" class="block text-sm font-medium text-gray-700">Username</label>
                    <div class="mt-1">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} name='name' id='your-name' type="text" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="your-email" class="block text-sm font-medium text-gray-700">Email</label>
                    <div class="mt-1">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name='email' id='your-email' type="email" autocomplete="email-address" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <div class="mt-1">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name='password' id='password' type="password" autocomplete="password" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <div class="mt-1">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} name='rePassword' id='confirm-password' type="password" autocomplete="confirm-password" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                    <div class="mt-1">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} name='phone' id='phone' type="tel" autocomplete="confirm-password" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">Register
                        Account
                        </button>
                </div>
            </form>
        </div>
    </div>
</div>
    </>
}
