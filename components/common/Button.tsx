import React from 'react'

interface props {
  children: React.ReactNode,
  className?: string
}

const Button = ({children, className}: props) => {
  return (
    <button className={`bg-brand-blue h-11 font-roboto text-white font-medium hover:bg-transparent hover:text-brand-blue transition-all ease-in-out duration-300 border border-brand-blue rounded-lg px-4 ${className}`}>
      {children}
    </button>
  )
}

export default Button