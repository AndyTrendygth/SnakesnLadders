import React from 'react'
import Link from "next/link"
import FeaturedPosts from './FeaturedPosts';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from "next/image"
import { Head } from 'next/document';

const PostDetail = ({post}) => {

    const getHeading = (index, text, type) => {
        let modifiedText = text;
        
        switch (type) {
        case 'heading-two':
        return <Link href={`${post.slug}/#${text}`}><h2 key={index} className="text-xl font-medium hover:text-purple-700 cursor-pointer mx-3">{modifiedText.map((item, i) => <React.Fragment key={i}>{text}</React.Fragment>)}</h2></Link>;
        case 'heading-three':
        return <Link href={`${post.slug}/#${text}`}><h3 key={index} className="text-xl font-light ml-8 hover:text-purple-700 cursor-pointer">{modifiedText.map((item, i) => <React.Fragment key={i}>{text}</React.Fragment>)}</h3></Link>;
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
        <div className='md:basis-1/4 basis-1/8'></div>
        <div className='flex flex-col text-center md:basis-1/2 basis-6/8'>
            <div className='flex flex-row' key={post.id}>
                {post.categories.map((category)=>(
                    <Link href={`/category/${category.slug}`}>
                    <a className='p-1 font-light bg-gray-700 rounded-lg text-left mr-2'>{category.name}</a>
                    </Link>
                ))}
            </div>
            <div className='text-4xl text-center my-4 '>
                <h1>{post.title}</h1>    
            </div>
            <div className='justify-center p-3'>
                <Image src={post.featuredImage.url} alt={post.title} className="rounded-xl" width={1600} height={900}/>
            </div>
            <div className='flex flex-col bg-gray-700 rounded-lg mx-3 mb-4 pb-2 text-left'>
                <h2 className='text-2xl text-center'>Content Table</h2>
                {post.content.raw.children.map((typeObj,index)=>{
                const children = typeObj.children.map((item, itemIndex)=>getHeading(itemIndex, item.text, item))
                return getHeading(index, children, typeObj.type)
                })}
            </div>
            <div className='text-left mx-3'>
            <RichText
        content={post.content.raw}
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
          p: ({children})=><p className='text-lg'>{children}</p>,
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
          img:({ src, title, width, height, altText})=><Image 
          src={src}
          title={title}
          width={width}
          height={height}
          alt={altText}
          />,
          iframe:({children, url, width, height})=><iframe
          url={url}
          width={width}
          height={height}
          >{children}</iframe>,
        }}/>
            </div>
        </div>
        <div className='flex md:basis-1/4'></div>
    </div>
    <div className='justify-center items-center my-4'>
        <h1 className='text-3xl text-center mt-4 my-4'>Related Posts</h1>
        <FeaturedPosts slug={post.slug} categories={post.categories}/>
    </div>
        
    </div>
    
  )
}

export default PostDetail