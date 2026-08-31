import React from 'react'

const Hero = () => {
  return (
    <div className='relative flex min-h-screen items-center justify-center overflow-hidden'>
      {/* Hero Content */}
      <div className='relative z-10 text-center'>
        <div className='sm:mb-6'>
          <span className='text-muted-foreground mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm dark:bg-gray-600 dark:text-gray-200'>
            <span className='h-2 w-2 rounded-full bg-pink-500'></span>
            <span>Available for opportunities</span>
          </span>
        </div>
        {/* Hero Title */}
        <h1 className='mb-6 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white'>
          Hi, I&apos;m{' '}
          <span className='text-purple-600 dark:text-yellow-400'>Hieu Pro</span>
        </h1>
      </div>
    </div>
  )
}

export default Hero
