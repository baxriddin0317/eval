'use client'
import { GoogleIcon } from '@/components/incons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

const Login = () => {
  const route = useRouter();
  const [ loading, setloading ] = useState(false);
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      setloading(true);
      route.push('/home')
    } catch (error) {
      console.log(error);
    }

    setloading(false);

  }

  return (
    <main className='max-w-screen w-full grid xl:grid-cols-2 login'>
      <div className='hidden xl:block relative'>
        <Image className='absolute inset-0 object-cover' fill src={'/img/login.jpg'} alt='' />
      </div>
      <div className='flex flex-col items-center justify-center p-5'>
        <Image src={'/img/big-logo.svg'} width={448} height={125} alt='' />
        <form className='max-w-[489px] w-full' onSubmit={handleSubmit}>
          <div className='flex flex-col w-full mb-7'>
            <label className='text-brand-gray-700 font-medium text-xl mb-2' htmlFor="email">Email</label>
            <input id='email' className='w-full outline-none bg-white border border-brand-gray-300 rounded-xl px-5 py-3.5' placeholder='Enter your email' type="email" required />
          </div>
          <div className='flex flex-col w-full mb-7'>
            <label className='text-brand-gray-700 font-medium text-xl mb-2 capitalize' htmlFor="password">password</label>
            <input id='password' className='w-full outline-none bg-white border border-brand-gray-300 rounded-xl px-5 py-3.5' placeholder='••••••••' type="password" required />
          </div>
          <div className='flex flex-wrap items-center justify-between my-8'>
            <div className='flex items-center gap-2.5'>
              <input type="checkbox" name="" id="chackbox" />
              <label className='text-brand-gray-700 font-medium text-xl capitalize' htmlFor="chackbox">Remember for 30 days</label>
            </div>
            <Link className='text-brand-blue text-xl font-semibold' href={'#'}>Forgot password</Link>
          </div>
          <div className='flex flex-col gap-5'>
            <button type='submit' className='w-full flex items-center justify-center bg-brand-blue text-white text-xl font-semibold leading-8 border border-brand-600 py-3.5 rounded-xl'>
            {loading ? (
              <div className="sk-chase">
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
              </div>
            ) : <span>Sign in</span>}
            </button>
            <button type='button' className='w-full flex items-center justify-center gap-4 bg-white text-brand-gray-700 text-xl font-semibold leading-8 border border-brand-gray-300 py-3.5 rounded-xl'>
              <GoogleIcon />
              Sign in with Google
            </button>
          </div>
        </form>
        <div className='flex items-center justify-center text-xl gap-1.5 mt-11'>
          <p className=' text-brand-gray-500'>Don’t have an account?</p>
          <Link className='text-brand-blue font-semibold' href={'#'}>Sign up</Link>
        </div>
      </div>
    </main>
  )
}

export default Login