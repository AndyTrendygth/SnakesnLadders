import React from 'react'
import PostCard from '../../components/PostCard';
import { getCategoriesAll, getCategoryPosts } from '../../services';
import { useRouter } from 'next/router';
import Head from 'next/head';


const CategoryPage = ({posts}) => {
    const router = useRouter();
    const {slug} = router.query;
    
  return (
      <>
      <Head>
          <title>All Articles in {slug} - simply explained | Cryptoeducating</title>
          <meta name='description' content={`View all the simply written articles about ${slug}, guides and tutorials.`}/>
      </Head>
      <div className='mx-5 my-8'>
        <h1 className='text-3xl text-center my-3 capitalize'>{slug}</h1>
        <div className='grid md:grid-cols-3 grid-flow-row'>
            {posts.map((post)=>{
                return <PostCard key={post.title}  post={post}/>
            })}
        </div>
    </div>
    </>
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

