'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

function Register() {
    const [name,setName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const router = useRouter()
    const handleRegister = async (e : React.FormEvent)=>{
        e.preventDefault()
        try {
            const result = await axios.post('/api/auth/register',{
                name,email,password
            })
            console.log(result)
        } catch (error) {
            console.log(error)
            
        }
    }
  return (

    <div className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4 text-white'>

      {/* Blur Background Effects */}
      <div className='absolute top-[-120px] left-[-120px] h-72 w-72 rounded-full bg-purple-600/30 blur-3xl'></div>

      <div className='absolute bottom-[-120px] right-[-120px] h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl'></div>

      <div className='absolute top-[40%] left-[45%] h-52 w-52 rounded-full bg-pink-500/20 blur-3xl'></div>

      {/* Register Card */}
      <div className='relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl'>

        <div className='mb-8 text-center'>
          <h1 className='text-4xl font-bold tracking-wide'>
            Create Account
          </h1>

          <p className='mt-2 text-sm text-gray-400'>
            Join and start your journey today
          </p>
        </div>

        <form className='space-y-5' onSubmit={handleRegister}>

          {/* Name */}
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-medium text-gray-300'
            >
              Name
            </label>

            <input
              type='text'
              placeholder='Enter your name'
              className='rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-cyan-400 focus:bg-white/15'
              onChange={(e)=>setName(e.target.value)} value={name}
            />
          </div>

          {/* Email */}
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-medium text-gray-300'>
              Email
            </label>

            <input
              type='email'
              placeholder='Enter your email'
              className='rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-cyan-400 focus:bg-white/15'
              onChange={(e)=>setEmail(e.target.value)} value={email}
            />
          </div>

          {/* Password */}
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-medium text-gray-300'>
              Password
            </label>

            <input
              type='password'
              placeholder='Enter your password'
              className='rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-cyan-400 focus:bg-white/15'
              onChange={(e)=>setPassword(e.target.value)} value={password}
            />
          </div>

          {/* Login Redirect */}
          <p className='text-center text-sm text-gray-400'>
            Already have an account?{' '}
            <span className='cursor-pointer font-medium text-cyan-400 transition hover:text-cyan-300' onClick={()=>router.push("/login")}>
              Login
            </span>
          </p>

          {/* Register Button */}
          <button
            className='w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold tracking-wide text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30'
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className='my-6 flex items-center gap-4'>
          <hr className='flex-1 border-white/10' />
          <span className='text-sm text-gray-400'>OR</span>
          <hr className='flex-1 border-white/10' />
        </div>

        {/* Google Button */}
        <button
          className='flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/10 py-3 font-medium transition-all duration-300 hover:bg-white/20'
        >
          <FcGoogle className='text-2xl' />

          <span>Sign Up with Google</span>
        </button>
      </div>
    </div>
  )
}

export default Register