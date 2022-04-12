import React from 'react'
import ToolDetail from '../../components/ToolDetail';
import { getToolDetail, getTools } from '../../services';

const Tools = ({tool}) => {
  return (
    <div>
        <ToolDetail tool={tool}/>
    </div>
  )
}

export default Tools

export async function getStaticProps({params}){
    const data = await getToolDetail(params.slug);
    return{
        props:{tool:data},
    };
}

export async function getStaticPaths(){
    const tools = await getTools();
    return {
        paths:tools.map(({slug})=>({params:{slug}})),
        fallback:true,
    };
}