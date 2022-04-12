import Head from 'next/head'
import { getPosts } from '../services'
import Header from '../components/Header.jsx'
import BeginnerPosts from '../components/BeginnerPosts.jsx'
import Tools from '../components/Tools.jsx'
import Promosection from '../components/Promosection'



export default function Home({posts}) {
  return (
    <div>
      
      <Head>
        <title>Cryptoeducating.net</title>
        <meta name="Cryptoeducating" content="The place to learn everything in crypto" />
      </Head>
      <Header/>
      <BeginnerPosts/>
      <Tools/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return{
    props:{posts}
  }
}
