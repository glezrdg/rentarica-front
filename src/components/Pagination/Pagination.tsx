import React, { useState } from 'react'
import { Paginator } from 'primereact/paginator'

interface IPaginationProps {
  children?: React.ReactNode
}

const Pagination: React.FC<IPaginationProps> = (props) => {
  const [first, setFirst] = useState(0)
  const [rows, setRows] = useState(10)

  const onPageChange = (event: any) => {
    setFirst(event.first)
    setRows(event.rows)
  }

  return (
    <div className='bg-red h-8 w-full mt-6'>
      <nav
        className='flex items-center justify-between gap-x-1'
        aria-label='Pagination'
      >
        <button
          type='button'
          className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg !text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10'
          aria-label='Previous'
        >
          <svg
            className='shrink-0 size-3.5'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m15 18-6-6 6-6'></path>
          </svg>
          <span>Anterior</span>
        </button>
        <div className='flex items-center gap-x-1'>
          <button
            type='button'
            className='min-h-[38px] min-w-[38px] flex justify-center items-center !text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10'
            aria-current='page'
          >
            1
          </button>
          <button
            type='button'
            className='min-h-[38px] min-w-[38px] flex justify-center items-center !text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10'
          >
            2
          </button>
          <button
            type='button'
            className='min-h-[38px] min-w-[38px] flex justify-center items-center !text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10'
          >
            3
          </button>
        </div>
        <button
          type='button'
          className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg !text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10'
          aria-label='Next'
        >
          <span>Siguiente</span>
          <svg
            className='shrink-0 size-3.5'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m9 18 6-6-6-6'></path>
          </svg>
        </button>
      </nav>
    </div>
  )
}

export default Pagination
