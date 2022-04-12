import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

const Tools = () => {
  return (
    <div className={` ${styles.Tools} flex md:flex-row flex-col justify-around py-8`}>
 
    <div className='flex flex-col text-center items-center justify-center'>
    <h1 className={` ${styles.h1} text-4xl font-black p-2`}>THE BEST TOOLS FOR YOU!</h1>
    
    <div className='flex justify-center p-4'>
      <Link href="/tools">
        <a className="bg-purple-700 rounded-md px-3 py-2 mx-5 text-xl">Tools</a>
      </Link>
    </div>
    <div className='p-3 '>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
      
    </div>
      <h2 className='text-2xl p-2'>We collected all the useful crypto websites and tools</h2>
      <h3 className='text-2xl'>and brought them into one place!</h3>
    </div>

    <div className='flex flex-col text-center items-center justify-center'>
      <h1 className={`${styles.h1} text-4xl p-2 mb-1 font-black`}>OUR PROMO CODES</h1>
      <h2 className='text-2xl p-2 mt-1'>We only provide you with promo codes that benefit</h2>
      <h2 className='text-3xl font-bold'>YOU</h2>
      <div className='p-3'>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
      </div>
      <div className='p-4'>
        <Link href="/promocodes">
        <a className='bg-purple-700 rounded-lg px-3 py-2 mx-5 text-xl'>Promo Codes</a>
        </Link>
      </div>
      
    </div>
    </div>
  )
}

export default Tools