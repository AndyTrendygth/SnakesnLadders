import { graphql} from "graphql";
import {request,gql} from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts2  = async()=>{
  const query = gql`
  query MyQuery {
  posts {
    slug
    title
    id
  }
}
  `
  const result = await request(graphqlAPI,query);
  return result.posts;
}
//alle Kategorien außer BeginnerFriendly
export const getCategories = async()=>{
  const query = gql`
  query GetCategoires {
  categories(where: {getStarted: false}) {
    name
    slug
    id
  }
}
  `
  const result = await request(graphqlAPI, query);
  return result.categories;
}
//Alle Kategorien
export const getCategoriesAll = async()=>{
  const query = gql`
  query GetCategoires {
  categories() {
    name
    slug
    id
  }
}
  `
  const result = await request(graphqlAPI, query);
  return result.categories;
}
//BeginnerFriendly Kategorien
export const getCategories_beginner = async()=>{
  const query = gql`
  query GetCategories_beginner {
  categories(where: {getStarted: true}) {
    name
    slug
    id
  }
}
  `
  const result = await request(graphqlAPI, query);
  return result.categories;
}
//Alle Posts die BeginnerFreundlich sind
export const getPosts_beginner = async()=>{
  const query = gql`
  query GetPosts_beginner {
  posts(where: {beginner: true}) {
    title
    slug
    id
    createdAt
    featuredImage {
      url
    }
    categories {
      name
      id
    }
  }
}
  `
  const result = await request(graphqlAPI,query);
  return result.posts;
}
//PostDetails von einem Post
export const getPostDetails= async(slug)=>{
  const query = gql`
  query GetPostDetails($slug:String!) {
    post(where:{slug:$slug}) {
      createdAt
      slug
      title
      excerpt
      id
      featuredImage {
        url
      }
      categories {
        name
        slug
      }
      content{
        raw
      }
    }
}
  `
  const result = await request(graphqlAPI, query, {slug});
  return result.post;
}
//Posts die teilweise die Selben Kategorien haben und nicht der angegebene Post sind
export const getPosts_similar = async(slug,categories)=>{
  const query = gql`
  query MyQuery($categories: [String!], $slug: String!) {
  posts(where: {categories_some: {slug_in: $categories}, AND: {slug_not: $slug}}) {
    title
    id
    slug
    featuredImage{url}
    categories {
      name
      slug
    }
  }
}
`
  const result = await request(graphqlAPI,query,{slug,categories});
  return result.posts;
}

export const getCategoryPosts = async(slug)=>{
  const query = gql`
  query MyQuery( $slug: String!) {
  posts(where: {categories_some: {slug: $slug}}) {
    title
    id
    slug
    createdAt
    excerpt
    featuredImage{url}
    categories {
      name
      slug
    }
  }
}
  `
const result = await request(graphqlAPI,query,{slug});
return result.posts;
}

export const getPromonoFeat = async()=>{
  const query = gql`
  query MyQuery {
  promolinks(where: {featured: false}) {
    name
    id
    link
    description
    featured
  }
}
  `
  const result = await request(graphqlAPI,query);
  return result.promolinks
}

export const getPromoFeat = async()=>{
  const query = gql`
  query MyQuery {
  promolinks(where: {featured: true}) {
    name
    id
    link
    description
    featured
  }
}
  `
  const result = await request(graphqlAPI,query);
  return result.promolinks
}

export const getPromo = async()=>{
  const query = gql`
  query MyQuery {
  promolinks {
    name
    id
    link
    description
    featured
  }
}
  `
  const result = await request(graphqlAPI,query);
  return result.promolinks
}


