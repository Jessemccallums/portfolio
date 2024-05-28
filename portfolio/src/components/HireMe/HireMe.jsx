import styles from './HireMe.module.css'
import hire_photo from '../../assets/hire_photo.png'

export default function HireMe() {
  return (
    <div  className={styles.box_hire_me_big}>
    <div className={styles.box_hire_me}>
        <div>
            <img className={styles.hire_photo} src={hire_photo} alt="" />
        </div>
        <div>
            <h1 className={styles.hire_title}>Why <span className={styles.hire_title_red}>Hire me</span>?</h1>
            <p className={styles.hire_p}>I am a web developer and UX/UI designer with a strong background in languages. I speak Spanish, English, French, and have a basic understanding of Chinese. My experience working with diverse teams has enhanced my teamwork skills, and I have extensive experience in UX/UI design.</p>
            <div className={styles.mini_box}>
                <div>
                    <h1 className={styles.mini_box_title}>5.3+</h1>
                    <p className={styles.mini_box_paragraph} >Years on the field</p>
                </div>
                <div>
                    <h1 className={styles.mini_box_title}>3.5+</h1>
                    <p className={styles.mini_box_paragraph}>Languages</p>
                </div>
            </div>
            <div>
              <button className={styles.hire_btn}>Hire me</button>
            </div>
        </div>
        
    </div>
        
    </div>
  )
}
