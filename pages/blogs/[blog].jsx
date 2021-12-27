import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { marked } from 'marked'
import styles from '../../styles/blogDetails.module.css'


const Blog = ({ data, content }) => {

  return (
    <div className={ styles.blog_details }>
      
      <div className={ styles.title}>
        <h2>{ data.title }</h2>
      </div>

      <div className={ styles.data_wrapper }>
        <div className={styles.image}>
          <Image
            src={ `/${data.cover_image }`}
            alt={ data.title }
            layout='fill'
          />
        </div>
        <div className={ styles.info }>
          <p>{ data.description }</p>
        </div>
      </div>

      <div className={styles.date}>
        <p> 
          <span>Author: { data.author }</span> <br/>
          Posted date: { data.date }
        </p>
      </div>

      <div className={ styles.content }>
        <div dangerouslySetInnerHTML={ {__html: marked( content )} }>
          {/* content */}
        </div>
      </div>

    </div>
  )
}

// create html -> think of it as a template, so it that it will not create 404 page.
export const getStaticPaths = async ()=> {
  const fs = require('fs')
  const files = fs.readdirSync(`${process.cwd()}/blogs`)
  const paths = files.map( filename => ( {params: { blog: filename.replace('.md','')}}) )
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params})=> {
  const fs = require('fs')
  const matter = require('gray-matter')

//next is,  read the file correspond the slug/blog and return as props for ui consumption
//read the markdown file
const markDown = fs.readFileSync( `${process.cwd()}/blogs/${params.blog}.md`,'utf-8')
// read markDown using gray-matter
const frontMatter = matter( markDown)
const { data, content } = frontMatter

  return{
    props: {
      data,
      content
    }
  }
}


export default Blog
