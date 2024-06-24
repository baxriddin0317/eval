'use client'
import { evalData } from '@/lib/data'
import React, { useState } from 'react'
import StatusListbox from '../common/StatusListbox'
import StatusTd from '../common/StatusTd'

const EvalTable = () => {
  const [filter, setFilter] = useState<string>('All');
  const statuses = ['All', 'Compliant', 'Non-Compliant', 'Partially Compliant'];

  const filteredRows = filter === 'All' ? evalData : evalData.filter(row => row.status === filter);

  return (
    <table className='w-full'>
      <thead className='sticky z-20 top-0'>
        <tr className='bg-brand-gray-400 text-black/85 h-[62px]'>
          <th className='text-left pl-12'>Section Number</th>
          <th className='text-left pl-12'>Requirement Head......</th>
          <th>Solicitation Requirement</th>
          <th>Vendor Response</th>
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
            <td className='pl-12 border-l border-brand-black-200'>{item.sectionNumber}</td>
            <td className='pl-12'>{item.requirement}</td>
            <td className='w-[414px] px-5'>
              <div className='!max-w-96 max-h-56 overflow-y-auto py-5'>
                {item.solicitation}
              </div>
            </td>
            <td className='w-[414px] px-5'>
              <div className='!max-w-96 max-h-56 overflow-y-auto py-5'>
                {item.vendor}
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

export default EvalTable