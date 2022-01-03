import React from 'react'
import Image from 'next/image'
import styles from '../styles/contributor.module.css'
import Link from 'next/link'
const Contributor = ({info}) => {
  return (
    <div className={ styles.contributor }>
      <div className={ styles.image}>
        <Image
          src={ info.image }
          layout='fill'
        />
      </div>
      <p>{info.nickname}</p>
      <div className={styles.tooltip}>
        <p>
          <span>{info.name}</span> <br/>
          <span>{info.email}</span> <br/>
          <span>
            <Link href={info.siteLink}>
              <a> Visit: { info.siteLink }</a>
            </Link>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Contributor
