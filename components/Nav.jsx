import React from 'react'
import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.css"
import SearchComponent from './SearchComponent'
import { getCategories, getCategories_beginner } from '../services'

const Nav = ({categories,beginner}) => {
    console.log(categories);
  return (
    <nav className=''>
        <div className='flex md:flex-row flex-col md:justify-between items-center'>
            <div className='flex md:flex-row flex-col'>
            <Link href="/"><a><Image src="/Logo_v14-min.png" alt="Cryptoeducating Logo" className='cursor-pointer' width={265} height={75}/></a></Link>
                <div className={`${styles.nav} ` }>
                   <button className='mt-8 mb-2' >Categories</button>
                   <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                   <div className={` ${styles.navitem} bg-gray-700 rounded-lg pt-4 px-1 pb-2 absolute` }>
                    <div className='grid grid-cols-2'>
                        {console.log(categories)}
                       
                   </div>
                   </div>
                </div>
                <div className={`my-8 pl-3 ${styles.nav}`}>
                    <button>Get Started</button>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    <div className={` ${styles.navitem} absolute bg-gray-700 rounded-lg pt-4 px-1 pb-2 `}>
                    <div className='grid grid-cols-2'>
                        <div>
                            a
                        </div>
                        <div>
                            b
                        </div>
                        <div>
                            c
                        </div>
                        <div>
                            d
                        </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
            <div className='flex md:flex-row flex-col md:justify-around items-center'>
                <div className='mt-8 mx-8'>
                    <Link href="/tools"><a className='hover:bg-purple-700 p-3 rounded-lg'>Tools</a></Link>
                </div>
                <div className='mt-8 mx-8'>
                <Link href="/promocodes"><a className='hover:bg-purple-700 p-3 rounded-lg'>Promo Codes</a></Link>
                </div>
                <div className='mt-5 mx-4'>
                    <SearchComponent/>
                </div>
            </div>
        <div className="md:hidden flex items-center mr-2">
        <button>
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </button>
        </div>
        </div>
    </nav>
  )
}

export default Nav

