import React from 'react'
import Link from 'next/link'
const Promolink = ({promolink, feat}) => {
  return (
    <Link href={promolink.link}>
    <a>
    <div className='flex flex-row'>
        <div className={`${feat ? "bg-purple-700":'bg-gray-700'} my-3 mx-6 p-3 rounded-lg align-middle flex md:flex-row flex-col basis-3/4`}>
            <h2 className='text-2xl pr-3 cursor-pointer'>{promolink.name}</h2>
            <p className='mt-1'>{promolink.description}</p>
            <div className='flex flex-row justify-end'>
                {feat? <p className='font-thin text-right mt-1 ml-5'>Sponsored</p>: ''}
            </div>
        </div>
    </div> 
    </a>
    </Link>
  )
}

export default Promolink