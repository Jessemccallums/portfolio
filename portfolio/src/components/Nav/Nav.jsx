import styles from './Nav.module.css'
import logo from '../../assets/logo.png'

export default function Nav() {
  return (
    <div className={styles.nav_div}>
        <nav>
          <div className={styles.nav_ul}>
            <div className={styles.nav_item}>Home</div>
            <div className={styles.nav_item}>About</div>
            <div className={styles.nav_item}>Service</div>
                <img className={styles.nav_logo} src={logo} alt="" />
          
            <div className={styles.nav_item}>Resume</div>
            <div className={styles.nav_item}>Project</div>
            <div className={styles.nav_item}>Contact</div>
          </div>
        </nav>
    </div>
  )
}
