import Head from 'next/head'
import Header from '../components/Header.jsx'
import BeginnerPosts from '../components/BeginnerPosts.jsx'
import Tools from '../components/Tools.jsx'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Cryptoeducating.net</title>
        <meta name="Cryptoeducating" content="The place to learn everything in crypto" />
        <meta name='description' content='The Landing Page of cryptoeducating'/>
      </Head>
      <Header/>
      <BeginnerPosts/>
      <Tools/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}
