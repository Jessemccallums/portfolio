import React from 'react'
import styles from './btn.module.css'

export default function Btnportfolio() {
  return (
    <div>

    <div className={styles.box_btn}>
        
    </div>
        <div className={`${styles.btns} ${styles.glasseffect}`}>
            <button className={styles.btn}>Portfolio</button>
            <button className={styles.btn2}>Hire me</button>
        </div>
    </div>
  )
}
