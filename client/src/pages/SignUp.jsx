
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {
  Alert,
  AlertIcon,
  AlertDescription,
  Spinner,
} from '@chakra-ui/react'
import OAuth from '../components/OAuth'

export default function SignUp() {
  const [formData,setFormData] = useState({})
  const [errorMessage,setErrorMessage] = useState(null)
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()
    const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]: e.target.value});
  }

  const handleSubmit = async (ev) =>{
    ev.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all the fields")  
    }
    try {
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
      })
      const data = await res.json();

      if (data.success === false){
        return setErrorMessage(data.message)
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in')
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false)
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
              <label className="block text-gray-700 text-xl  mb-3" >Your Username</label>
              <input
              className='w-full my-1 border border-gray-400  py-1 outline-none rounded-md'
              type='text'
              placeholder='Username'
              id='username'
              onChange={handleChange}
              />
            </div>
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
        {
          loading?(
           <div className='flex items-center justify-center'>
             <Spinner color='red.500' />
            <span className='pl-3'>Loading...</span>
           </div>
          ):'Sign Up'
        }
       </button>
       </div>
       <div className='my-2 gap-3 flex text-xl'>
        <span>Have an account</span>
        <Link className='text-[blue]' to='/sign-in'>Sign In</Link>
       </div>
          </form>
         <OAuth/>
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
