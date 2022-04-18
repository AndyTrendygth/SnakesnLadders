import React from 'react'
import { getPosts2, getCategoriesAll, getPromo } from '../services'
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react/cjs/react.development'
import Link from 'next/link'

const SearchComponent = () => {
    const [posts,setPosts]=useState([]);
    const [categories,setCategories]=useState([]);
    const [promos,setPromo]=useState([]);
    const [search,setSearch]=useState("");
    const [act,setAct]=useState(false);

    const handle = ()=>{
        setAct(!act);
    }
   
    useEffect(()=>{
        getPosts2().then((result)=>{
            setPosts(result);
        });
        getCategoriesAll().then((result)=>{
            setCategories(result);
        });
        getPromo().then((result)=>{
            setPromo(result);
        })
    },[]);

  return (
    <div>
        <input className={`search-input py-2 px-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300 outline-none`}
        type="text" 
        placeholder="Search something..."
        onChange={(event)=>{
            setSearch(event.target.value)
            setAct(false)
        }}
        />
       <div className={`${act ? "hidden":""} flex flex-col absolute bg-gray-900 p-2 rounded-lg focus:block`}>
           {posts.filter((val)=>{
               if(search==""){
                   
               }
               else if(val.title.toLowerCase().includes(search.toLowerCase())){
                   return val
               }
           }).map((post)=>{
           return <Link href={`/post/${post.slug}`}><a onClick={handle}><div className='hover:bg-gray-700 rounded-lg p-1'>{post.title}</div></a></Link>
       })}
       {categories.filter((val)=>{
               if(search==""){
                   
               }
               else if(val.name.toLowerCase().includes(search.toLowerCase())){
                   return val
               }
           }).map((category)=>{
           return <Link href={`/category/${category.slug}`}><a onClick={handle}><div className='hover:bg-gray-700 rounded-lg p-1'>{category.name}</div></a></Link>
       })}
       {promos.filter((val)=>{
               if(search==""){
                   
               }
               else if(val.name.toLowerCase().includes(search.toLowerCase())){
                   return val
               }
           }).map((promo)=>{
           return <Link href={`${promo.link}`}><a onClick={handle}><div className='hover:bg-gray-700 rounded-lg p-1'>{promo.name}</div></a></Link>
       })}

       </div>
       
    </div>
  )
}

export default SearchComponent
