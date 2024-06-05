
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {
  Alert,
  AlertIcon,
  AlertDescription,
  Spinner,
} from '@chakra-ui/react'
import { useDispatch,useSelector } from 'react-redux'
import {signInStart,signInSuccess,signInFailure} from '../redux/user/userSlice'

export default function SignIn() {
  const [formData,setFormData] = useState({})
  const {loading,error: errorMessage} = useSelector(state=>state.user);

  const dispatch = useDispatch()

  const navigate = useNavigate()
    const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]: e.target.value.trim()});
  }

  const handleSubmit = async (ev) =>{
    ev.preventDefault();
    if ( !formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all the fields")) 
    }
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
      })
      const data = await res.json();

      if (data.success === false){
        dispatch(signInFailure(data.message))
      }

      if(res.ok){
        dispatch(signInSuccess(data))
        // navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex gap-5 p-3 max-w-3xl mx-auto flex-col md:items-center md:flex-row '>
        <div className='flex-1'>
        <Link className='flex whitespace-nowrap' to={'/'}>
          <span className='text-6xl px-2 rounded-lg text-white bg-gradient-to-r from-blue-600 via-blue-500 to-pink-500'>Tech</span><h1 className='text-6xl'>Masters</h1>
          </Link>
        </div>
        <div className='flex-1'>
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="block text-gray-700 text-xl  mb-3" >Email</label>
              <input
              className='w-full my-1 border border-gray-400  py-1 outline-none rounded-md'
              type='text'
              placeholder='email'
              id='email'
              onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="block text-gray-700 text-xl  mb-3" >Password</label>
              <input
              className='w-full my-1 border border-gray-400  py-1 outline-none rounded-md'
              type='password'
              placeholder='password'
              id='password'
              onChange={handleChange}
              />
            </div>
            <div className='w-full flex'>
         <button type='submit' className='text-xl font-semibold bg-gradient-to-r py-1 rounded-md mt-3 w-full text-white from-purple-700 to-pink-700'  disabled={loading}>
       Sign In
       </button>
       </div>
       <div className='my-2 gap-3 flex text-xl'>
        <span>Dont have an account</span>
        <Link className='text-[blue]' to='/sign-up'>Sign Up</Link>
       </div>
          </form>
          <button type='submit' className='text-xl text-black hover:text-white font-semibold hover:bg-gradient-to-r py-1 rounded-md mt-3 w-full border border-purple-400 from-purple-700 to-pink-700' >
          Continue with Google
          </button>
          {
         errorMessage &&(
          <Alert status='error'>
          <AlertIcon />
          <AlertDescription> {errorMessage}</AlertDescription>
        </Alert>
         )
        }
        </div>
      </div>
    </div>
  )
}
