'use client'
import { vendorData } from '@/lib/data'
import React, { useState } from 'react'
import StatusListbox from '../common/StatusListbox'
import StatusTd from '../common/StatusTd'

const VendorTable = () => {
  const [filter, setFilter] = useState<string>('All');
  const statuses = ['All', 'Evaluated', 'Not-Evaluated'];

  const filteredRows = filter === 'All' ? vendorData : vendorData.filter(row => row.status === filter);

  return (
    <table className='w-full'>
      <thead className='sticky z-20 top-0'>
        <tr className='bg-brand-gray-400 text-black/85 h-[62px]'>
          <th className='text-left pl-7'>Evaluation Criteria</th>
          <th className='text-center'>Vendor Response “Recomendation”</th>
          <th>Response Rating “Recomendation”</th>
          <th className='text-left pl-5'>Recommended Evaluator Statement</th>
          <th>
            <div className='flex items-center justify-center gap-6'>
              <span>Status</span>
              <StatusListbox filter={filter} setFilter={setFilter} statuses={statuses} />
            </div>
          </th>
        </tr>
      </thead>
      <tbody className=''>
        {filteredRows.map((item,idx) => (
          <tr className='hover:bg-brand-gray-600 border-b border-brand-black-200 max-h-56 text-brand-black-100' key={item.id}>
            <td className='pl-12 border-l border-brand-black-200'>{item.criteria}</td>
            <td className='text-center'>{item.vendor}</td>
            <td className='text-center'>
              {item.rating}
            </td>
            <td className='w-[378px] px-5'>
              <div className='!max-w-96 max-h-56 overflow-y-auto py-5'>
                {item.statement}
              </div>
            </td>
            <td className='text-center'>
              <div className='flex items-center justify-center gap-6'>
                <StatusTd status={item.status} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default VendorTable