import React, { useState } from 'react'
import {BsEyeFill, BsEyeSlashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import OAuth from '../components/OAuth'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const {name, email, password} = formData

  function handleChange(e){
    setFormData((prevState) => ({
      ...prevState,[e.target.id]: e.target.value,
    }))
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Register</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img alt='card' className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg: ml-20'>
          <form >
          <input type='text' id='name' value={name} onChange={handleChange} placeholder='Full name' className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' />

            <input type='email' id='email' value={email} onChange={handleChange} placeholder='email address' className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' />
            <div className='relative mb-6'>
               <input type={showPassword? 'password' : 'text'} 
               id='password'
               value={password} 
               onChange={handleChange} 
               placeholder='password' 
               className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out '/>


               {showPassword? ( <BsEyeFill BsEyeSlashFill className='absolute right-4 top-4 text-xl cursor-pointer ' onClick={() => setShowPassword((prevState) => !prevState)}/>) : (<BsEyeSlashFill className='absolute right-4 top-4 text-xl cursor-pointer ' onClick={() => setShowPassword((prevState) => !prevState)}/>  )}

              
            </div>
           <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
            <p>Have a account? <Link to='/signUp' className='text-red-500 hover:text-red-600 transition duration-200 ease-in-out'>Sign in</Link> </p>
            <p className='text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out'><Link to='/forgotPassword'>Forgot password</Link> </p>
           </div>
           <button type='submit' className='w-full bg-blue-600 text-white py-3 uppercase rounded mt-2 text-sm font-medium shadow-md hover:bg-blue-800 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800'>Register</button>
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

export default SignUp