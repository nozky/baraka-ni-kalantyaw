import React,{ useEffect, useState } from 'react'
import Contributor from '../../components/Contributor'
import styles from '../../styles/about.module.css'


const Index = ({contributor}) => {
  const [people, setPeople] = useState(null)

  useEffect(()=>{
    setPeople(JSON.parse( contributor ).default)
  },[])


  return (
    <div className={ styles.about_container }>
      
      <div className={ styles.about }>
        <h1>About Page</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolor maiores nisi reprehenderit impedit facere consectetur cumque eligendi autem commodi. Sunt nulla sit minus dolore fugiat? Magnam odit minima alias.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt cumque provident dolore tenetur quidem ipsum recusandae cupiditate quos dicta!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maxime excepturi distinctio, sint eaque repudiandae.</p>
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

export default Index
