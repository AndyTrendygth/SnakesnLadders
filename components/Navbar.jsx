import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { getCategories, getCategories_beginner } from '../services';
import { useEffect } from 'react/cjs/react.development';
import SearchComponent from './SearchComponent';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [categories, setCategories] = useState([]);
  const [beginner, setBeginner] = useState([]);
  
  const handleClick2 = ()=>{setActive2(!active2);};
  const handleClick = () => {setActive(!active);};
  const handleClick3 = ()=>{setActive3(!active3);};

  useEffect(()=>{getCategories().then((newCategories)=>setCategories(newCategories));},[]);
  useEffect(()=>{getCategories_beginner().then((beginner)=>setBeginner(beginner));},[]);

return (   
<nav className=" bg-gray-900 pt-3 pb-2 shadow-gray-900 shadow-lg mx-auto">
  <div className="flex justify-between">
    <div className="flex">
      <Link href="/">
        <img src="/Logo_v14.png" alt="Logo" className=' cursor-pointer'/>
      </Link>
        
    <div className="md:flex hidden items-center space-x-1 text-white text-lg relative">
      <div className='relative'>
        <button className="flex flex-row items-center px-3 mx-5 py-2 text-center rounded-lg" onClick={handleClick2}>
          <span>Categories</span>
          <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
        </button>
          <div className={`${active2 ? '' : "hidden"} absolute w-full mt-2 rounded-md shadow-lg  `}>
            <div className="bg-gray-900 rounded-lg grid grid-cols-2">
              {categories.map((category)=>(
                <div className='p-2 mt-2 text-sm text-center hover:bg-gray-700 rounded-lg'>
                  <Link key={category.id} href={`/category/${category.slug}`}>
                    <a className='font-semibold bg-transparent'>{category.name}</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

      <div className="relative">
        <button className="flex flex-row items-center px-3 mx-5 py-2 text-center rounded-md bg-purple-700" onClick={handleClick3}>
          <span>Get Started</span>
          <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
        </button>
          <div className={`${active3 ? '' : "hidden"} absolute w-full mt-2 rounded-md shadow-lg`}>
            <div className='rounded-md px-3 py-2 mx-5 bg-gray-900'>
              {beginner.map((beginner)=>(
                <Link key={beginner.id} href={`/category/${beginner.slug}`}>
                  <a className='block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-md hover:bg-gray-400'>{beginner.name}</a>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
      
  <div className="hidden md:flex items-center space-x-1 text-white text-lg pr-5">
    <Link href="/tools"><a className="hover:bg-purple-700 rounded-md px-3 py-2 mx-5">Tools</a></Link>
    <Link href="/promocodes"><a className="py-2 px-3 hover:bg-purple-700 rounded transition duration-300">Promo Codes</a></Link>   
    <div className="search-box flex p-3 sm:hidden lg:block">
      <SearchComponent/>
    </div>
  </div>

  <div className="md:hidden flex items-center mr-2">
    <button onClick={handleClick}>
      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
  </div>


<div className={`${active ? 'md:hidden' : "hidden"} flex flex-col`}>
  <div className="items-center space-x-1 text-lg relative">
    <div className='flex flex-row pt-2'>
      <div className="relative">
        <button className="flex flex-row items-center px-3 mx-5 py-2 text-center rounded-md hover:bg-purple-700" onClick={handleClick2}>
          <span>Categories</span>
          <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
        </button>
        <div className={`${active2 ? '' : "hidden"} absolute mt-2 rounded-md shadow-lg`}>
          <div className="px-2 py-2 bg-gray-900 rounded-md grid grid-cols-2">
            {categories.map((category)=>(
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <a className='block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-md'>{category.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <button className="flex flex-row items-center px-3 mx-5 py-2 text-center rounded-md bg-purple-700" onClick={handleClick3}>
          <span>Get Started</span>
          <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
        </button>
        <div className={`${active3 ? '' : "hidden"} absolute w-full mt-2 rounded-md shadow-lg`}>
          <div className='rounded-md px-3 py-2 mx-5 bg-gray-900'>
            {beginner.map((beginner)=>(
              <Link key={beginner.slug} href={`/categories/${beginner.slug}`}>
                <a className='block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-md'>{beginner.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center space-x-1 text-lg pr-5">
    <Link href="/tools"><a className="hover:bg-purple-700 rounded-md px-3 py-2 mx-5">Tools</a></Link>
    <Link href="/promocodes"><a className="py-2 px-3 hover:bg-purple-700 rounded transition duration-300">Promo Codes</a></Link>    
    <div className="search-box p-3 ">
      <SearchComponent/>
    </div>
  </div>
  </div>
</div>
</nav>
  )
}

export default Navbar