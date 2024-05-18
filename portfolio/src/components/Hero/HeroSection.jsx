import styles from './Hero.module.css'
import lines from '../../assets/lines.png'
import Jesse from './JesseHistory/Jesse'

export default function HeroSection() {
  return (
    <div>
        <div className={styles.box_lines}>
            <div>
                <img className={styles.lines_1} src={lines} alt="" />
            </div>
            <button className={styles.btn_hello}>
                Hello!
            </button>
        </div>
        <h1 className={styles.hero_title}>
            I'm <span className={styles.name_developer}>Jesse</span>, <br/>  
            Web developer
        </h1>
        <Jesse />
    </div>
  )
}
