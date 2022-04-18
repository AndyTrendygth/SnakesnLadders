import React from 'react'
import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.css"
import SearchComponent from './SearchComponent'
import { useState } from 'react';

const Nav = ({categories}) => {
    const [active, setActive] = useState(false);
    const handleClick = () => {setActive(!active);};
  return (
    <nav>
        <div className={`md:flex flex-row justify-between items-center hidden`}>
            <div className='flex flex-row'>
            <Link href="/"><a><Image src="/Logo_v14-min.png" alt="Cryptoeducating Logo" className='cursor-pointer' width={265} height={75}/></a></Link>
                <div className={`${styles.nav} md:hidden`}>
                   <button className='mt-8 mb-2' >Categories</button>
                   <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                   <div className={`${styles.navitem} bg-gray-700 rounded-lg pt-4 px-1 pb-2 absolute`}>
                    <div className='grid grid-cols-2'>
                        {categories.categories.map((category)=>{
                            if(category.getStarted==false){
                            return <div key={category.id}>
                                <Link href={`/category/${category.slug}`}>
                                <a className='hover:text-purple-700 m-1'>{category.name}</a>
                                </Link>
                            </div>
                        }})
                        }
                   </div>
                   </div>
                </div>
                <div className={`my-8 pl-3 ${styles.nav}`}>
                    <button className='mb-2'>Get Started</button>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    <div className={` ${styles.navitem} absolute bg-gray-700 rounded-lg pt-4 px-1 pb-2 `}>
                    {categories.categories.map((category)=>{
                        if(category.getStarted==true){
                            return <div key={category.id}>
                                <Link href={`/category/${category.slug}`}>
                                <a className='hover:text-purple-700 m-1'>{category.name}</a>
                                </Link>
                            </div>
                        }})
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div>
                <Link href="/promocodes"><a className='hover:bg-purple-700 p-3 rounded-lg'>Promo Codes</a></Link>
                </div>
                <div className='mx-4'>
                    <SearchComponent/>
                </div>
            </div>
        </div>
        <div className="md:hidden flex justify-between mt-2 mr-2">
        <Link href="/"><a><Image src="/Logo_v14-min.png" alt="Cryptoeducating Logo" className='cursor-pointer' width={265} height={75}/></a></Link>
        <button className="" onClick={handleClick}>
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </button> </div>
        <div className={`${active ? "":"hidden"} flex flex-col`}>
            <div className='flex flex-row justify-center'>
            <div className={`${styles.nav} md:hidden mx-2`}>
                   <button className='mt-8 mb-2' >Categories</button>
                   <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                   <div className={`${styles.navitem} bg-gray-700 rounded-lg pt-4 px-1 pb-2 absolute`}>
                    <div className='grid grid-cols-2'>
                        {categories.categories.map((category)=>{
                            if(category.getStarted==false){
                            return <div key={category.id}>
                                <Link href={`/category/${category.slug}`}>
                                <a className='hover:text-purple-700 m-1'>{category.name}</a>
                                </Link>
                            </div>
                        }})
                        }
                   </div>
                   </div>
                </div>
                <div className={`mt-8 mb-4 pl-3 ${styles.nav} mx-2`}>
                    <button className='mb-2'>Get Started</button>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    <div className={` ${styles.navitem} absolute bg-gray-700 rounded-lg pt-4 px-1 pb-2 `}>
                    {categories.categories.map((category)=>{
                        if(category.getStarted==true){
                            return <div key={category.id}>
                                <Link href={`/category/${category.slug}`}>
                                <a className='hover:text-purple-700 m-1'>{category.name}</a>
                                </Link>
                            </div>
                        }})
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center'>
                <div>
                <Link href="/promocodes"><a className='hover:bg-purple-700 p-3 rounded-lg'>Promo Codes</a></Link>
                </div>
            </div>
            <div className='flex flex-row m-4 justify-center'>
                    <SearchComponent/>
            </div>
        </div>
    </nav>
  )
}

export default Nav

