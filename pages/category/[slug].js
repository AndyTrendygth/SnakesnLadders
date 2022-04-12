import React from 'react'
import PostCard from '../../components/PostCard';
import { getCategoriesAll, getCategoryPosts } from '../../services';
import { useRouter } from 'next/router';


const CategoryPage = ({posts}) => {
    const router = useRouter();
    const {slug} = router.query;
    
  return (
    <div className='mx-5 my-8'>
        <h1 className='text-3xl text-center my-3 capitalize'>{slug}</h1>
        <div className='grid grid-cols-3 grid-flow-row'>
            
            {posts.map((post, index)=>{
                return <PostCard key={index}  post={post}/>
               
            })}
        </div>
    </div>
  );
};

export default CategoryPage

export async function getStaticProps({params}){
    const posts = await getCategoryPosts(params.slug);
    return{
        props:{posts},
    };
}

export async function getStaticPaths(){
    const categories = await getCategoriesAll();
    return {
        paths:categories.map(({slug})=>({params:{slug}})),
        fallback:true,
    };
}

