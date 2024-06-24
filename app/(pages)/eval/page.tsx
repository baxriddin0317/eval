import Button from '@/components/common/Button'
import EvalTable from '@/components/eval/EvalTable'
import React from 'react'

const Eval = () => {
  return (
    <main className='min-h-screen flex items-stretch h-full bg-brand-gray-200 pt-32 pb-10'>
      <section className='bg-white min-h-full overflow-hidden w-full pt-7 pb-4'>
        <div className='max-w-[1890px] mx-auto px-8 xl:px-14 2xl:px-20'>
          <h2 className='font-roboto text-lg lg:text-2xl font-semibold leading-6'>
          Compliance Assessment Screen
          </h2>
          <div className='flex gap-2 mb-1.5 items-center justify-end'>
            <Button className=''>
              CHECK FOR COMPLIANCE
            </Button>
            <Button className=''>
              EXPORT TO CSV
            </Button>
          </div>
          <div className="relative table-h overflow-auto">
            <EvalTable />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Eval