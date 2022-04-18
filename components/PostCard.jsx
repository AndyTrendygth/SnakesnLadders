import React from 'react'
import moment from 'moment'
import Link from "next/link"
import Image from "next/image"

const PostCard = ({post}) => {

  return (
    <Link href={`/post/${post.slug}`}>
    <div className='bg-gray-800 rounded-lg mr-5 hover:shadow-gray-500 hover:shadow-lg pb-4 cursor-pointer mb-3'>
      <div className=' rounded-lg'>
        <Image src={post.featuredImage.url} alt="Article Image" className='rounded-lg' height={900} width={1600}  />
        <div className='flex flex-row pt-2'>
          {post.categories.map((category)=>(
            <p className='p-1 mx-1 font-light bg-gray-700 rounded-lg text-left' key={category.id}>{category.name}</p>
          ))} 
        </div>
        <p className='mx-2 pt-1 font-light hidden md:block'>
             {moment(post.createdAt).format('MM-DD-YYYY')}
          </p>
        <div className='text-center align-middle pt-4'>
          <h2 className='text-2xl'>{post.title}</h2>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default PostCard