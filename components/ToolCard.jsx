import React from 'react'
import Link from 'next/link';

const ToolCard = ({tool}) => {
  return (
    <Link href={`/tools/${tool.slug}`}>
      <a>
    <div className='flex flex-row'>
      <div className='flex flex-row my-3 mx-6 p-3 basis-3/4 hover:shadow-gray-500 shadow-sm align-middle bg-gray-700 rounded-lg cursor-pointer'>
        <h1 className='text-2xl font-medium mr-3 hover:text-purple-700'>{tool.name}</h1>
        <p className='font-normal mt-1 ml-2'>{tool.description}</p>    
      </div>
      <div className='flex basis-1/4 '></div>
    </div>
    </a>
    </Link>
  )
}

export default ToolCard