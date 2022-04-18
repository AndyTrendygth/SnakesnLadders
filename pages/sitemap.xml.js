import React from 'react'
import fs from "fs"
import { getPosts2, getCategoriesAll } from '../services'

const Sitemap=()=>{}

function getMap (posts,categories,staticPages){
    
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages.map((url)=>{
        return`
       <url>
       <loc>${url}</loc>
       <lastmod>${new Date().toISOString}</lastmod>
       </url>
       `;
    }).join("")}
    ${posts.map((post)=>{
       
        return `
        <url>
        <loc>${`cryptoeducating.net/post/${post.slug}`}</loc>
        <lastmod>${new Date().toISOString}</lastmod>
        </url>
        `;
    }).join("")}
    ${categories.map((category)=>{
    
        return`
        <url>
        <loc>${`cryptoeducating.net/category/${category.slug}`}</loc>
        <lastmod>${new Date().toISOString}</lastmod>
        </url>
        `;
    }).join("")}
    </urlset>
`;
}

export default Sitemap

export async function getServerSideProps({res}){
    
    const baseUrl = {
        development: "http://localhost:3000",
        production: "https://cryptoeducating.net"
    }[process.env.NODE_ENV];

    const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage)=>{
        return ![
            "_app.js",
            "_document.js",
            "_error.js",
            "_sitemap.xml.js"
        ].includes(staticPage);
    })
    .map((staticPagePath)=>{
        return `${baseUrl}/${staticPagePath};`
    });

    const posts = await getPosts2();
    const categories = await getCategoriesAll();

    const sitemap = getMap(posts,categories,staticPages)

    res.setHeader("Content-Type","text/xml");
    res.write(sitemap);
    res.end();

    return {
        props:{},
    };
};