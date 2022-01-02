import React,{ useState } from 'react'
import Head from 'next/head'
import PostCard from '../../components/PostCard'
import styles from '../../styles/blogs.module.css'

const Index = ({ posts  }) => {
  
  const [searchStr, setSearchStr] = useState("")

  return (
    <div className={ styles.blogs }>

      <Head>
        <title>Baraka ni kalantyaw | Blogs</title>
        <meta name="description" content="Aklan's People and Culture" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <div className={ styles.search_blog }>
        <input type="text" placeholder='Search Title' onChange={ (e)=> setSearchStr( e.target.value ) }/>
      </div>
      <h1 className={ styles.title }>Blogs</h1>

      <div className={ styles.posts }>
        { posts.map( (post, index) =>   {
          if( searchStr !==""){
            const regEx = new RegExp( searchStr,'gi' )
            if ( post.data.title.match( regEx ) ){
              return <PostCard key={ index } post={ post } />
            }
          }else{
            return <PostCard key={ index } post={ post } />
          }
        } )}
      </div>
    </div>
  )
}


export const getStaticProps = async (context)=> {

  const fs = require('fs')
  const matter = require('gray-matter')
  const moment = require('moment')

  //get files from post directory
  const fileslist = fs.readdirSync( `${process.cwd()}/blogs` )
  
 //for every filename
 const posts = fileslist.map( filename => {
   //create slug
   const slug = filename.replace('.md','')
   //read file
   const markDown = fs.readFileSync( `${process.cwd()}/blogs/${filename}`, 'utf-8')
   //parse markdown with gray-matter
   const frontMatter = matter( markDown )
   const { data } = frontMatter

   //this is my work around dealing with date serialization error 
   const newDate = moment( data.date ).format("MMMM DD YYYY")

   return { 
     slug,
     data: { ...data, date: newDate }
   }
 })

  return {
    props: {
      posts
    }
  }
}

export default Index
