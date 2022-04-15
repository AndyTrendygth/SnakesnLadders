import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { request } from 'graphql-request'
import useSWR from 'swr'

const fetcher = query => request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,query);

const Layout = ({children}) => {  
  const {data,error} = useSWR(`{
    categories {
    name
    slug
    id
    getStarted
    }
  }
`,fetcher)
 
  if(error) return <div>Failed to load</div>
  if (!data) {return <div>Loading...</div>}
  return (
    <>
    <Nav categories={data} />
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout