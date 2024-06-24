'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Landing = () => {
  const route = useRouter();

  useEffect(() => {
    const Time =  () => setTimeout(() => {
      route.push('/login')
    }, 50)

    Time()
  }, [])

  return (
    <div>Landing</div>
  )
}

export default Landing