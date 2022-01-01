import React from 'react'
import Image from 'next/image'
import styles from '../styles/slide.module.css'

const Slide = ({ image }) => {

  return (
    <div className={ styles.slide}>
      
      <div className={styles.image}>
        <Image
          alt={ image.title }
          src={image.url}
          layout='fill'
        />
      </div>
      
      <div className={ styles.title }>
        <h2>Aklan&apos;s Best</h2>
        <h1>{ image.title }</h1>
        <p>{ image.description }</p>
      </div>
    </div>
  )
}

export default Slide
