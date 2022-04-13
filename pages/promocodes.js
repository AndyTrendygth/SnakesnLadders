import React from 'react'
import Promolink from '../components/Promolink.jsx'
import { getPromoFeat, getPromonoFeat } from '../services/index.js'

const promocodes = ({promolinks, feats}) => {
  return (
    <div className='text-center pt-3 mb-1'>
        <h1 className='text-3xl text-center'>All available Promo Codes and Affiliates!</h1>
        {feats.map((feat)=>{
        return <Promolink promolink={feat} feat={true}/>
        })}
        {promolinks.map((promolink)=>{
            return <Promolink promolink={promolink} feat={false}/>
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