'use client'
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const StatusTd = ({status}: {status: string}) => {
  const [selected, setSelected] = useState('#FFFFFF');

  useEffect(() => {
    if(status === 'All'){
      setSelected('#FFFFFF')
    }else if(status == 'Compliant' || status == 'Evaluated'){
      setSelected('#008743')
    }else if(status == 'Non-Compliant' || status == 'Not-Evaluated'){
      setSelected('#F41E1E')
    }else if(status == 'Partially Compliant'){
      setSelected('#D9A40F')
    }
  }, [status])
  return (
    <div className="relative h-10 w-full max-w-64 pl-2 pr-8 flex items-center gap-2.5 text-left bg-transparent border border-black/30 rounded-md">
      <span className="block w-4 h-4 rounded-full" style={{background: `${selected}`}}></span>
      <span className="block truncate">{status}</span>
      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <IoIosArrowDown
          className="w-5 h-5 text-gray-400"
          aria-hidden="true"
        />
      </span>
    </div>
  )
}

export default StatusTd