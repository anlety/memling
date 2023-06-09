import React, {useState} from 'react'

import {Link} from 'react-router-dom'
import OAuth from '../components/OAuth'
import { toast } from 'react-toastify'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
 
  

  function handleChange(e){
    setEmail(e.target.value)
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent successfully')
    } catch (error) {
      toast.error('Could not reset the password')
    }
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img alt='card' className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg: ml-20'>
          <form onSubmit={handleSubmit}>
          

            <input type='email' id='email' value={email} onChange={handleChange} placeholder='email address' className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' />
           
           <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
            <p>Don't have a account? <Link to='/signUp' className='text-red-500 hover:text-red-600 transition duration-200 ease-in-out'>Register</Link> </p>
            <p className='text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out'><Link to='/signIn'>Sign in</Link> </p>
           </div>
           <button  type='submit' className='w-full bg-blue-600 text-white py-3 uppercase rounded mt-2 text-sm font-medium shadow-md hover:bg-blue-800 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800'>Send reset password</button>
           <div className='flex items-center mx-4 mt-3 before:border-t  before:flex-1  before:border-gray-300 after:border-gray-300 after:border-t after:flex-1' >
            <p className='font-semibold text-center mx-4'>OR</p>
           </div>
           <OAuth/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword