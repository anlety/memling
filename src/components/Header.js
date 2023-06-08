import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate} from 'react-router';
import {getAuth, onAuthStateChanged } from 'firebase/auth';


const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [pageState, setPageState] = useState('Sign in')
  // console.log(location)

  const auth = getAuth()
  useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if(user){
        setPageState('Profile')
      }else{
        setPageState('Sign in')
      }
    })
  },[auth])

  // function to check if the route and location matches
function pathMatchRoute(route) {
  if(route === location.pathname){
    return true
  }
}
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
 <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
          
            <div className='cursor-pointer'
            onClick={() => navigate("/")}
            >LOGO</div>
          
      
      <div>
        <ul className='flex space-x-10'>
          
            <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${pathMatchRoute('/') && "text-black border-b-red-500"}`}
            onClick={() => navigate("/")}
            >Home</li>
          
          
          
           <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
           onClick={() => navigate("/offers")}
           >Offers</li>
          
          
         
             <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${
              (pathMatchRoute('/signIn') || pathMatchRoute('/profile')) && "text-black border-b-red-500"}`}
             onClick={()=> navigate('/profile')}
             >
             {pageState}
             </li>
          
         
        </ul>
      </div>
      </header>
    </div>
   
  )
}

export default Header