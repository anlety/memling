import React from 'react'
import {FcGoogle} from 'react-icons/fc'

const OAuth = () => {
  return (
    <button className='flex items-center w-full py-3 bg-red-600 justify-center rounded mt-3 cursor-pointer text-white font-semibolg hover:bg-red-700 transition duration-200 ease-in-out gap-1 text-sm uppercase active:bg-red-800 shadow-md hover:shadow-lg active:shadow-lg'><FcGoogle/>  Continue with google</button>
  )
}

export default OAuth