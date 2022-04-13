import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import { useState } from 'react/cjs/react.development'
import Carousel from 'react-multi-carousel'
import { getPosts_similar } from '../services'
import PostCard from './PostCard'

const responsive = {
    superLargeDesktop:{breakpoint:{max:4000,min:1024},items:5},
    desktop:{breakpoint:{max:1024,min:768},items:3},
    tablet:{breakpoint:{max:768,min:640},items:2},
    mobile:{breakpoint:{max:640,min:0},items:1},}

const FeaturedPosts = ({categories, slug}) => {
    const [posts,setPosts]=useState([]);
    const cat = [];
    
    categories.map((index)=>{
        cat.push(index.slug);
    })
    useEffect(()=>{
           getPosts_similar(slug,cat).then((result)=>setPosts(result))
    },[slug])

  return (
    <Carousel responsive={responsive} containerClass='mx-5'>
        {posts.map((post)=>(
            <PostCard key={post.title} post={post}/>
        ))}
    </Carousel>
  )
}

export default FeaturedPosts