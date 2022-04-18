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
        <meta title=''/>
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
