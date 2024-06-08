import React from 'react'
import styles from './btn.module.css'

import { Link } from 'react-scroll';

export default function Btnportfolio() {
  return (
    <div>

    <div className={styles.box_btn}>
        
    </div>
        <div className={`${styles.btns} ${styles.glasseffect}`}>
            <Link to='portfolio' smooth={true} duration={500}  className={styles.btn}>Portfolio</Link>
            <Link  to="hire-me" smooth={true} duration={500} className={styles.btn2}>Hire me</Link>
        </div>
    </div>
  )
}
