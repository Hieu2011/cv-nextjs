import { CodeSquareIcon } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
      <div
        className='flex h-10 w-10 flex-col items-center justify-center
          rounded-lg bg-blue-800 dark:bg-blue-500'
      >
        <CodeSquareIcon className='h-6 w-6 text-white' />
      </div>
      <h1
        className='hidden font-bold text-blue-800 sm:block sm:text-xl
          md:text-2xl dark:text-blue-400'
      >
        {'<DevCV />'}
      </h1>
    </div>
  )
}

export default Logo
