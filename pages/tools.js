import React from 'react'
import ToolCard from '../components/ToolCard'
import { getTools } from '../services'

const Tools = ({tools}) => {
  return (
    <div>
        <h1 className='text-3xl text-center py-5'>Tools</h1>
        {tools.map((tool)=>{
            
           return <ToolCard tool={tool} key={tool.id}/>
        })}
    </div>
  )
}

export default Tools

export async function getStaticProps(){
    const tools = await getTools();
    return{
        props:{tools},
    };
}

