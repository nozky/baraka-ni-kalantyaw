import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import { hero_images } from '../data/hero_images'
import Slide from '../components/Slide'

export default function Home() {
  const[ selectedIdx, setSelectedIdx ] = useState(0)

  useEffect(()=>{
    let count = 0
    const timer = setInterval(()=> {
      setSelectedIdx( count )
      if( count < hero_images.length - 1){
        count++
      }else{
        count = 0 
      }
    },15000)

    return()=>{
      clearInterval( timer )
    }

  },[])

  

  return (
      <div className={styles.main}>
      <Head>
        <title>Baraka ni kalantyaw | Home</title>
        <meta name="description" content="Aklan's People and Culture" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

      <section className={ styles.hero }>
        {hero_images.map((image,idx) => <Slide active={ idx === selectedIdx? true : false } key={idx} image={image}/> )}
        <div className={styles.circles}>
          {hero_images.map( (image, idx) => selectedIdx === idx ?  <div key={idx} className={styles.circle_active} onClick={()=> setSelectedIdx(idx)}>{idx}</div>  : <div key={idx} className={styles.circle} onClick={()=> setSelectedIdx(idx)}>{idx}</div> )}
        </div>
      </section>

      <div className="others">
        <h2>Welcome to Aklanon Journal</h2>
        <p>
          Aklanon Journal is a weekly online magazine that posts articles and other informative materials about Aklanon culture, history, art, literature and similar practices.
          <br/>The journal is maintained by a group of Aklanon intellectuals and techies that are located in different parts of the world. It is open for contributions from individuals who want to share their knowledge to the public for free.
        </p>
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
