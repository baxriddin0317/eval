import React from 'react'

interface props {
  children: React.ReactNode,
  className?: string
}

const Button = ({children, className}: props) => {
  return (
    <button className={`bg-brand-blue text-xl text-white font-medium hover:bg-transparent hover:text-brand-blue transition-all ease-in-out duration-300 border border-brand-blue rounded-lg px-6 ${className}`}>
      {children}
    </button>
  )
}

export default Button