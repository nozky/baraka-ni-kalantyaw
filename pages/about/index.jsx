import React,{ useEffect, useState } from 'react'
import Contributor from '../../components/Contributor'
import styles from '../../styles/about.module.css'


const About = ({contributor}) => {
  const [people, setPeople] = useState(null)

  useEffect(()=>{
    setPeople(JSON.parse( contributor ).default)
  },[])


  return (
    <div className={ styles.about_container }>
      
      <div className={ styles.about }>
        <h1>Aklanon Journal</h1>
        <p>
          Aklanon Journal is a weekly online magazine that posts articles and other informative materials about Aklanon culture, history, art, literature and similar practices. The journal is maintained by a group of Aklanon intellectuals and techies that are located in different parts of the world. It is open for contributions from individuals who want to share their knowledge to the public for free. 
        </p>
        <p>
          For those interested in sending their articles and other materials please email us at.
        </p>
        <p>
          <a href="mailto:aklanon.journal@gmail.com">Email: <span className={styles.email}>aklanon.journal@gmail.com</span></a>
        </p>
      </div>

      <div className={ styles.contributor_container}>
        <h2>Contributor</h2>
        <div className={ styles.contributor_persons_wrapper }>
          { people && people.map( person => <Contributor info={ person } key={ person.name}/>) }
        </div>
      </div>
    </div>
  )
}

export const getStaticProps =(context) => {
  const contributor = require('../../data/contributor')
  return {
    props: {
      contributor: JSON.stringify( contributor )    
    }
  }
} 

export default About
