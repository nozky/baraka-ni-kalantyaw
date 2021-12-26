import React,{ useState } from 'react'
import PostCard from '../../components/PostCard'
import styles from '../../styles/blogs.module.css'

const index = ({ posts  }) => {
  
  const [searchStr, setSearchStr] = useState("")
  return (
    <div className={ styles.blogs }>
      
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


export const getStaticProps = async ()=> {

  const fs = require('fs')
  const matter = require('gray-matter')

  //get files from post directory
  const fileslist = fs.readdirSync( `${process.cwd()}/blogs` )
  
 //get slug and front matter
 const posts = fileslist.map( filename => {
   //create slug
   const slug = filename.replace('.md','')
   //get front matter
   const markDown = fs.readFileSync( `${process.cwd()}/blogs/${filename}`, 'utf-8')
   //parse markdown with gray-matter
   const frontMatter = matter( markDown )
   const {data, content } = frontMatter

   return { 
     slug,
     data,
     content
   }
 })

  return {
    props: {
      posts
    }
  }
}

export default index
