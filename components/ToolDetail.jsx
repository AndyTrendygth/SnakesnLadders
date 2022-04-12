import React from 'react'
import Link from 'next/link'
import { RichText } from '@graphcms/rich-text-react-renderer';

const ToolDetail = ({tool}) => {

const getHeading = (index, text, type) => {
    let modifiedText = text;
    
    switch (type) {
    case 'heading-two':
    return <Link href={`${tool.slug}/#${text}`}><h2 key={index} className="text-xl font-medium hover:text-purple-700 cursor-pointer mx-3">{modifiedText.map((item, i) => <React.Fragment key={i}>{text}</React.Fragment>)}</h2></Link>;
    case 'heading-three':
    return <Link href={`${tool.slug}/#${text}`}><h3 key={index} className="text-xl font-light ml-8 hover:text-purple-700 cursor-pointer">{modifiedText.map((item, i) => <React.Fragment key={i}>{text}</React.Fragment>)}</h3></Link>;
    case 'heading-four':
    return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{text}</React.Fragment>)}</h4>;
    case 'paragraph':
    return <p></p>;
    default:
    return modifiedText;
    } 
  };

return (
  <div>
    <div className='flex flex-row pt-3 mb-4'>
      <div className='basis-1/4'></div>
      <div className='flex flex-col rounded-lg mx-3 mb-4 pb-2 text-center basis-1/2'>
      <h1 className='text-3xl'>{tool.name}</h1>
      <div className='flex flex-col bg-gray-700 rounded-lg mx-3 my-4 pb-2 text-left'>
        <h2 className='text-2xl text-center'>Content Table</h2>
          {tool.content.raw.children.map((typeObj,index)=>{
          const children = typeObj.children.map((item, itemIndex)=>getHeading(itemIndex, item.text, item))
          return getHeading(index, children, typeObj.type)
          })}
      </div>
          
      <div className='text-left m-3'>
        <RichText
        content={tool.content.raw}
        renderers={{
          h1: ({ children }) => <h1 className="text-white">{children}</h1>,
          h2:({children})=><h2 className='text-3xl my-2'>{children}</h2>,
          h3:({children})=><h2 className='text-2xl my-2'>{children}</h2>,
          h4: ({ children }) => <h4>{children}</h4>,
          h5: ({ children }) => <h5>{children}</h5>,
          h6: ({ children }) => <h6>{children}</h6>,
          bold: ({ children }) => <p><strong>{children}</strong></p>,
          italic: ({ children }) => <i>{children}</i>,
          underline: ({ children }) => <u>{children}</u>,
          code: ({ children }) => <code>{children}</code>,
          code_block: ({ children }) => (
          <pre
          style={{
          whiteSpace: 'pre',
          wordWrap: 'break-word',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          fontFamily: 'monospace',
          }}
          >
          {children}
          </pre>),
          p: ({children})=><p>{children}</p>,
          a: ({ children, openInNewTab, href, rel, ...rest }) => {
            if (href.match(/^https?:\/\/|^\/\//i)) {
              return (
                <Link href={href} className="hover:bg-purple-700">
                <a
                  href={href}
                  target={openInNewTab ? '_blank' : '_self'}
                  rel={rel || 'noopener noreferrer'}
                  {...rest}
                  className="hover:text-purple-700 underline"
                >
                  {children}
                </a></Link>); 
            }
          },
          img:({children, src, title, width, height, altText})=><img
          src={src}
          title={title}
          width={width}
          height={height}
          alt={altText}
          >{children}
          </img>,
          iframe:({children, url, width, height})=><iframe
          url={url}
          width={width}
          height={height}
          >{children}</iframe>,
        }}/>
      </div>
    </div>
  </div>
</div>  
  )
}

export default ToolDetail