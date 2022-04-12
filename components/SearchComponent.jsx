import React from 'react'
import { getPosts2 } from '../services'
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react/cjs/react.development'
import Link from 'next/link'

const SearchComponent = () => {
    const [posts,setPosts]=useState([]);
    const [search,setSearch]=useState("");
    useEffect(()=>{
        getPosts2().then((result)=>{
            setPosts(result);
        });
    },[]);

  return (
    <div>
        <input className='search-input py-2 px-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300 outline-none'
        type="text" 
        placeholder="Search something..."
        onChange={(event)=>setSearch(event.target.value)}
        />
       <div className={` flex flex-col absolute bg-gray-900 p-2 rounded-lg`}>
           {posts.filter((val)=>{
               if(search==""){
                   
               }
               else if(val.title.toLowerCase().includes(search.toLowerCase())){
                   return val
               }
           }).map((post)=>{
           return <Link href={`/post/${post.slug}`}><a><div className='hover:bg-gray-700 rounded-lg p-1'>{post.title}</div></a></Link>
       })}
       </div>
       
    </div>
  )
}

export default SearchComponent
