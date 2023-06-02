import React from 'react'
import { useLocation} from 'react-router'
import{Link} from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  // console.log(location)

  // function to check if the route and location matches
const pathMathRoute = (route) => {
  if(route === location.pathname){
    return true
  }
}
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
 <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
          <Link to='/'>
            <div className='cursor-pointer'>LOGO</div>
          </Link>
      
      <div>
        <ul className='flex space-x-10'>
          <Link to='/'>
            <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute('/') && "text-black border-b-red-500"}`}>Home</li>
          </Link>
          
          <Link to='/offers'>
           <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute('/offers') && "text-black border-b-red-500"}`}>Offers</li>
          </Link>
          
          <Link to='/signin'>
             <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute('/signin') && "text-black border-b-red-500"}`}>Sign in</li>
          </Link>
         
        </ul>
      </div>
      </header>
    </div>
   
  )
}

export default Header