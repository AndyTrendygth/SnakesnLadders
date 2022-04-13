import React from 'react'
import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.css"

const Nav = () => {
  return (
    <nav className=''>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row'>
            <Link href="/"><a><Image src="/Logo_v14-min.png" alt="Cryptoeducating Logo" className='cursor-pointer' width={265} height={75}/></a></Link>
                <div className={`${styles.nav}` }>
                   <button className='my-8' >Categories</button>
                   <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                   <div className={` ${styles.navitem} bg-gray-700 rounded-lg pt-4 px-1 pb-2 absolute` }>
                      <div className="hover:bg-gray-500 text-center rounded-lg">
                       <Link href="/category/defi"><a className='font-semibold'>link1</a></Link>
                    </div> 
                    <div className="hover:bg-gray-500 text-center rounded-lg">
                    <Link href="/"><a href="/" className='font-semibold'>link2</a></Link>
                    </div> 
                    <div className="hover:bg-gray-500 text-center rounded-lg">
                    <a href="/" className='font-semibold'>link3</a>
                    </div> 
                    <div className="hover:bg-gray-500 text-center rounded-lg">
                    <a href="/" className='font-semibold'>link4</a>
                    </div> 
                   </div>
                   
                </div>
                <div className='my-8 pl-3'>
                    Get Started
                </div>
            
            </div>
            
            <div>
                <div>
                    Tools
                </div>
                <div>
                    promocodes
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav