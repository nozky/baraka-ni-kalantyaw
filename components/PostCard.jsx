import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/postCard.module.css'

const PostCard = ({ post }) => {
  return (
    <div className={ styles.post_card }>
      <h1 className={ styles.title }>
        <Link href={`/blogs/${ post.slug }`}>
          <a>{post.data.title}</a>
        </Link>
      </h1>

      <div className={ styles.image_wrapper }>
        <Image 
          src={ post.data.cover_image }
          alt={ post.data.title }
          layout='fill'
        />  
      </div>

      <p className={ styles.info }>
        <span className={  styles.author }>Author: { post.data.author }</span> <br/>
        <span className={ styles.date }> Post Date: { post.data.date }</span> <br/>
        <span className={ styles.description }>{ post.data.description }</span> 
      </p> 

      <div className={ styles.link }>
        <Link href={`/blogs/${ post.slug }`}>
          <a>Read More...</a>
        </Link>
      </div>

      <hr />
    </div>
  )
}

export default PostCard
