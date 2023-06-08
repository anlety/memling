import React from 'react'
import loader from '../assets/images/loader.svg'

const Spinner = () => {
  return (
    <div className='bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-60'>
      <div>
        <img src={loader} alt='loader' className='h-25'/>
      </div>
    </div>
  )
}

export default Spinner