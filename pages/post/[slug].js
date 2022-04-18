import React from 'react'
import { getPostDetails, getPosts2 } from '../../services'
import PostDetail from '../../components/PostDetail'
import Head from "next/head"

const PostDetails = ({post}) => {
  return (
    <div>
       <Head>
          <title>{post.title} | Cryptoeducating</title>
        <meta name='description' content={post.excerpt}/>
        <meta property='og:type' content='article'/>
        <meta property='og:title' content={post.title}/>
        <meta property='og:description' content={post.excerpt}/>
        <meta property='og:image' content={post.featuredImage.url}/>
        <meta property='og:url' content={`https://cryptoeducating.net/post/${post.slug}`}/>
      </Head>
        <PostDetail post={post}/>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}){
    const data = await getPostDetails(params.slug);
  
    return{
      props:{post:data}
    }
  }

export async function getStaticPaths(){
    const posts = await getPosts2();

    return{
        paths:posts.map(({slug})=>({params:{slug}})),
        fallback: false,
    }
}