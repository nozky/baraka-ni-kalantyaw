import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/Link'
import styles from '../styles/Home.module.css'
import { hero_images } from '../data/hero_images'
import Slide from '../components/Slide'

export default function Home() {
  const[ selectedIdx, setSelectedIdx ] = useState(0)

  return (
    <div className={styles.main}>
      <Head>
        <title>Baraka ni kalantyaw | Home</title>
        <meta name="description" content="Aklan's People and Culture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={ styles.hero }>
        {hero_images.map((image,idx) => idx == selectedIdx? <Slide key={image.title} image={image} /> : null)}
        <div className={styles.circles}>
          {hero_images.map( (image, idx) => <div key={idx} className={styles.circle} onClick={()=> setSelectedIdx(idx)}>{idx}</div> )}
        </div>
      </section>

      <div className="others">
        <h3>Introduction</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui fugit, quod beatae assumenda odit incidunt corrupti ex voluptas distinctio?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est provident itaque ipsum porro nemo, saepe vel nihil culpa sapiente aperiam necessitatibus laboriosam iure corrupti eligendi quasi reprehenderit beatae repudiandae at!</p>
      </div>

      <section className={ styles.links }>
        <h3 className={styles.links_label}>Sponsors</h3>
        <div className={ styles.links_wrapper }>
          
          <div className={ styles.link }>
            <h3>Site name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt!</p>
            <Link href='#'><a>Site link</a></Link>
          </div>
          
          <div className={ styles.link }>
            <h3>Site name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt!</p>
            <Link href='#'><a>Site link</a></Link>
          </div>
          
          <div className={ styles.link }>
            <h3>Site name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt!</p>
            <Link href='#'><a>Site link</a></Link>
          </div>

          <div className={ styles.link }>
            <h3>Site name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt!</p>
            <Link href='#'><a>Site link</a></Link>
          </div>

          <div className={ styles.link }>
            <h3>Site name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, incidunt!</p>
            <Link href='#'><a>Site link</a></Link>
          </div>
        
        </div>
      </section>
      
    </div>
  )
}
