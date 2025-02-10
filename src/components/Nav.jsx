import React from 'react'
import styles from './nav.module.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
   <div className={styles.nav}>
      <h1 >RecipeApp🍕 </h1>
      <Link to={`/`} className={styles.homeLink}>Home</Link>
   </div>
  
    </>
  )
}

export default Nav