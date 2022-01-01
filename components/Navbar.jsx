import React,{ useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'

const Navbar = () => {

const [showMenus, setShowMenus] = useState( false )

const toggleMenus =()=>{
  setShowMenus(!showMenus)
}
  return (
    <div className={ styles.navbar} onClick={toggleMenus}>
        <div className={styles.logo}>
          <Link href="/">
            <a alt="site logo">
              <Image src='/logo.png' width={128} height={87} alt='logo'/>
            </a>
          </Link>
        </div>
        <div className={styles.humburger} onClick={ toggleMenus }>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={ showMenus?  `${ styles.menus} ${styles.show}` : styles.menus  }>
          <li><Link href='/'><a>Home</a></Link></li>
          <li><Link href='/blogs'><a>Blogs</a></Link></li>
          <li><Link href='/destination'><a>Destination</a></Link></li>
          <li><Link href='/products'><a>Local Products</a></Link></li>
          <li><Link href='/gallery'><a>Gallery</a></Link></li>
          <li><Link href='/about'><a>About</a></Link></li>
        </ul>
    </div>
  )
}

export default Navbar
