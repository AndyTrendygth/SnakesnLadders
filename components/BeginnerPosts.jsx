import React from 'react'
import Carousel from 'react-multi-carousel'
import { useEffect } from 'react/cjs/react.development'
import { getPosts_beginner } from '../services'
import PostCard from './PostCard'
import { useState } from 'react/cjs/react.development'
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop:{breakpoint:{max:4000,min:1024},items:5},
    desktop:{breakpoint:{max:1024,min:768},items:3},
    tablet:{breakpoint:{max:768,min:640},items:2},
    mobile:{breakpoint:{max:640,min:0},items:1},}

const BeginnerPosts = () => {
const [posts,setPosts]=useState([]);
const [dataloaded,setDataloaded]=useState(false);

useEffect(()=>{
    getPosts_beginner().then((result)=>{
        setPosts(result);
        setDataloaded(true);
    });},[]);
return (
    <div>
        <h2 className='text-center text-3xl pt-2' id='Beginner-Articles'>Beginner Articles</h2>
        <Carousel responsive={responsive} containerClass='py-5 mx-8'>
                {dataloaded && posts.map((post)=>(
                <PostCard key={post.title} post={post}/>
            ))}
        </Carousel>
    </div>
  )}
export default BeginnerPosts