import React from 'react'
import Head from "next/head"

const about = () => {
  return (
    <div className='flex flex-col py-5 px-3 text-center'>
      <Head>
        <title>About | Cryptoeducating</title>
        <meta name='description' content='The About Page of cryptoeducating'/>
      </Head>
        <h1 className='text-3xl mb-5'>About</h1>
        <div className='text-left ml-5 mb-5'>
            <p>Cryptoeducating's purpose is to constantly educate the new and advanced crypto people. <br/>
             Everything you need is in one place and easy to use.<br/>
            Regular posts about simpler and more difficult topics, guides, tools and promo codes will give you an edge alongside your journey<br/>
            <br/>
            Let's educate as many people as possible! 
            Cheers.
             </p>
        </div>
        <h1 className='text-3xl '>The Team</h1>
        <div className='text-left ml-5 mb-5 flex flex-row'>
            <div className='bg-gray-700 rounded-lg p-3'>
            <h3 className='text-xl'>Founder</h3>
            <p>Andyytr</p>
            Socials
            </div> 
        </div>
        
    </div>
  )
}

export default about