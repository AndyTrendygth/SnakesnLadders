import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Nav from './Nav'

//const fetcher = query => request(graphql(sollte der key aus dem .env sein),query(muss händisch rein leider))

const Layout = ({children}) => {  
  //const {data,error} = useSWR(`{abfrage}`,fetcher)
  //data hält das ergebnis von der Abfrage, data einfach an Nav geben 
  return (
    <>
    <Nav categories={categories} beginner={beginner}/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout