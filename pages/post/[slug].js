import React from 'react'
import { getPostDetails, getPosts2 } from '../../services'
import PostDetail from '../../components/PostDetail'

const PostDetails = ({post}) => {
  return (
    <div>
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