import React from 'react'
import Promolink from '../components/Promolink.jsx'
import { getPromoFeat, getPromonoFeat } from '../services/index.js'
import Head from "next/head"

const promocodes = ({promolinks, feats}) => {
  return (
    <div className='text-center pt-3 mb-1'>
      <Head>
        <title>All available Crypto Promo Codes | Cryptoeducating.net</title>
        <meta name='description' content='View all Promo codes our affiliates provide and click on them in order to sign up and receive a bonus.'/>
      </Head>
        <h1 className='text-3xl text-center'>All available Promo Codes and Affiliates!</h1>
        {feats.map((feat)=>{
        return <Promolink promolink={feat} feat={true} key={feat.id}/>
        })}
        {promolinks.map((promolink)=>{
            return <Promolink promolink={promolink} feat={false} key={promolink.id}/>
        })}
    </div>
  )
}

export default promocodes

export async function getStaticProps(){
    const feats = await getPromoFeat();
    const promolinks = await getPromonoFeat();
    return{
        props:{feats, promolinks},
    };
}