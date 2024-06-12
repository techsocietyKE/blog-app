import React from 'react'

export default function About() {
  return (
    <div>
    <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
            <div>
                    <label  class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Full Name</label>
                    <input type="text"  id="name" placeholder="your@gmail.com" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-gray-50 focus:border-gray-50 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                <div>
                    <label  class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email"  id="email" placeholder="your@gmail.com" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-gray-50 focus:border-gray-50 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-gray-50 focus:border-gray-50 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
              
                <button type="submit" class="w-full text-white font-medium rounded-lg text-md px-5 py-2.5 text-center bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900">Sign in</button>
                <button type="submit" class="w-full text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900">Continue with Google</button>
                <p class="text-md font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
            </form>
            
        </div>
    </div>
</div>
</section>
  </div>
  )
}
