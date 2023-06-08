import React, { useState } from 'react'
// import { FcUpRight } from 'react-icons/fc'

const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    toilet: 1,
    parking: false,
    furnished: false,
    address: '',
    description: '',
    offer: true,
    regularPrice: 1,
    discountPrice: 1,
  })

  const {type, name, bedrooms, bathrooms, toilet, parking, furnished, address, description, offer, regularPrice, discountPrice} = formData
  function handleChange(){
} 
 return (
    <main className='max-w-md px-2 mx-auto'>
      <h1 className='text-3xl text-center mt-6 font-bold '>Create a listing</h1>
      <form>
      <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
      <div className='flex'>
        <button type='button' id='type' value='sell' onClick={handleChange} className={`px-7 mr-3 py-3 fond-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type === 'rent' ? 'bg-white text-black' : 'bg-slate-600 text-white'}`}>Sell</button>


        <button type='button' id='type' value='sell' onClick={handleChange} className={`px-7 ml-3 py-3 fond-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type === 'sell' ? 'bg-white text-black' : 'bg-slate-600 text-white'}`}>Rent</button>
      </div>
       <p className='text-lg mt-6 font-semibold'>Name</p>
       <input type='text' id='name' maxLength='33' minLength='10' placeholder='Name' onChange={handleChange} required value={name} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded shadow-md transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'/>

       <div className='flex justify-between space-x-6 mb-6'>
          <div className=''>
            <p className='text-lg font-semibold'>Beds</p>
            <input className='w-full rounded px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 shadow-md transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center' type='number' id='bedrooms'  value={bedrooms} onChange={handleChange} min='1' max='20' required/>

          </div>
          <div className=''>
            <p className='text-lg font-semibold'>bathrooms</p>
          <input className='w-full rounded px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 shadow-md transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center' type='number' id='bathrooms' value={bathrooms} onChange={handleChange} min='1' max='20' required/>
          </div>
          <div className=''>
            <p className='text-lg font-semibold'>Toilet</p>
          <input className='w-full rounded px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 shadow-md transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center' type='number' id='toilet' value={toilet} onChange={handleChange} min='1' max='20' required/>
          </div>
       </div>

       <p className='text-lg mt-6 font-semibold'>Parking spot</p>
      <div className='flex'>
        <button type='button' id='parking' value={true} onClick={handleChange} className={`px-7 mr-3 py-3 fond-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!parking ? 'bg-white text-black' : 'bg-slate-600 text-white'}`}>Yes</button>


        <button type='button' id='parking' value={false} onClick={handleChange} className={`px-7 ml-3 py-3 fond-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${parking ? 'bg-white text-black' : 'bg-slate-600 text-white'}`}>No</button>
      </div>

      <p className='text-lg mt-6 font-semibold'>Furnished</p>
      <div className='flex'>
        <button type='button' id='furnished' value={true} onClick={handleChange} className={`px-7 mr-3 py-3 fond-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'}`}>Yes</button>


        <button type='button' id='furnished' value={false} onClick={handleChange} className={`px-7 ml-3 py-3 fond-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'}`}>No</button>
      </div>

      <p className='text-lg mt-6 font-semibold'>Address</p>
       <textarea type='text' id='address' placeholder='Address' onChange={handleChange} required value={address} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded shadow-md transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'/>

      <p className='text-lg  font-semibold'>Description</p>
       <textarea type='text' id='description' placeholder='Description' onChange={handleChange} required value={description} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded shadow-md transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'/>


       <p className='text-lg mt-6 font-semibold'>Offer</p>
      <div className='flex mb-6'>
        <button type='button' id='offer' value={true} onClick={handleChange} className={`px-7 mr-3 py-3 fond-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!offer ? 'bg-white text-black' : 'bg-slate-600 text-white'}`}>Yes</button>


        <button type='button' id='offer' value={false} onClick={handleChange} className={`px-7 ml-3 py-3 fond-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${offer ? 'bg-white text-black' : 'bg-slate-600 text-white'}`}>No</button>
      </div>

      <div className='flex items-center mb-6'>
        <div className=''>
          <p className='text-lg font-semibold'>Regular price</p>
          <div className='flex w-full justify-center items-center space-x-5'>
            <input type='number' id='regularPrice' value={regularPrice} onChange={handleChange} min="200" max="400000000" required className='w-full px-4 py-2 shadow-md text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out  focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'/>

            {type=== "rent" && (
            <div className=''>
              <p className='text-md w-full whitespace-nowrap'>$ / Month</p>
            </div>
          )}
          </div>
        </div>
      </div >


      { offer && (
      <div className='flex items-center mb-6'>
        <div className=''>
          <p className='text-lg font-semibold'>Discount price</p>
          <div className='flex w-full justify-center items-center space-x-5'>
            <input type='number' id='discountPrice' value={discountPrice} onChange={handleChange} min="200" max="400000000" required={offer} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out  focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center shadow-md'/>

            {type === "rent" && (
            <div className=''>
              <p className='text-md w-full whitespace-nowrap'>$ / Month</p>
            </div>
          )}
          </div>


          
        </div>
      </div > )}
      

      <div className='mb-6'>
        <p className='text-lg font-semibold'>Image</p>
        <p className='text-gray-500'>Your first image will be the cover (max 6 images)</p>
        <input type='file' id='images' onChange={handleChange} accept='.jpg, ,png, .jpeg' multiple required className='w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out shadow-md focus:text-gray-700 focus:bg-white focus:border-slate-600'/>
      </div>

      <button type='submit' className='mb-6 w-full px-7 py-3 bg-blue-600 text-white rounded font-medium text-sm uppercase shadow-md hover:shadow-lg focus:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out'>Create listing</button>
      </form>
    </main>
  )
}

export default CreateListing