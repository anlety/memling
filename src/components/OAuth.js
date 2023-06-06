
import React from 'react'
import { useNavigate } from 'react-router';
import {FcGoogle} from 'react-icons/fc'
import { toast } from 'react-toastify'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

const OAuth = () => {
  const navigate = useNavigate()
  async function onGoogleClick(){
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider()
      const result= await signInWithPopup(auth, provider);
      const user = result.user;
      // console.log(user)
      const docRef = doc(doc,"users", user.uid);
      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()) {
        await setDoc(docRef,{
          name: user.displayNames,
          email: user.email,
          Timestamp: serverTimestamp(),
        })
        navigate('/')
      }
      
    } catch (error) {
      toast.error('Could not connect to Google')
    }
  }
  return (
    <button type='button' onClick={onGoogleClick} className='flex items-center w-full py-3 bg-red-600 justify-center rounded mt-3 cursor-pointer text-white font-semibolg hover:bg-red-700 transition duration-200 ease-in-out gap-1 text-sm uppercase active:bg-red-800 shadow-md hover:shadow-lg active:shadow-lg'><FcGoogle/>  Continue with google</button>
  )
}

export default OAuth