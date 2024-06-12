
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
import OAuth from '../components/OAuth'

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
        navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  }
  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label  class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Your email</label>
                      <input 
                      type="email" 
                      id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-gray-50 focus:border-gray-50 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="name@gmail.com"
                      onChange={handleChange}
                     />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-gray-50 focus:border-gray-50 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      type="password" 
                      id="password"
                      placeholder="••••••••"
                      onChange={handleChange}
                      />
                  </div>
                
                  <button type="submit" class="w-full text-white font-medium rounded-lg text-md px-5 py-2.5 text-center bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900" disabled={loading}>Sign in</button>
                 <OAuth/>
                  <p class="text-md font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link to="/sign-up" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
                  {
         errorMessage &&(
          <Alert status='error'>
          <AlertIcon />
          <AlertDescription> {errorMessage}</AlertDescription>
        </Alert>
         )
        }
              </form>
              
          </div>
      </div>
  </div>
</section>
    </div>
  )
}
