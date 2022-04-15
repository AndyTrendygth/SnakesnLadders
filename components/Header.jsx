import Image from 'next/image'
import React from 'react'
import styles from "./Header.module.css"
import bg from "../public/Headerbg_v5-min.png"

const Header = () => {
  return ( 
    <div className={` flex flex-col items-center justify-center text-center pt-9 pb-24`}style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100%',
      backgroundRepeat:'no-repeat',
    }}>
      
        <h1 className={`${styles.h1} lg:text-5xl pt-8 font-black text-2xl`} >WELCOME TO</h1>
        <h1 className={`${styles.h1} lg:text-5xl pt-4 font-black text-2xl`} >CRYPTOEDUCATING.NET</h1>
        <h2 className='text-2xl pb-8 font-thin'>crypto made simple for you</h2>
        <div>
          <h2 className='text-3xl pt-28 mt-10 font-bold'>
            Crypto shouldn't be difficult
          </h2>
          <h2 className='text-3xl pb-5 pt-4 font-normal'>
            Get educated <p className='underline inline'>NOW</p> with our short and beginner friendly articles!
          </h2>
        </div>
        <div className='pb-8 pt-8'>
          <a href="#Beginner-Articles" aria-label='Beginner Articles Link'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg></a>
        </div>
    </div>
  )
}
export default Header