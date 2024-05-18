import styles from './Jesse.module.css'
import comillas from '../../../assets/icon_comilla.png'
import stars from '../../../assets/stars.png'
import jesse from '../../../assets/jesse.png'
import circles from '../../../assets/circle.png'

export default function Jesse() {
  return (
    <div className={styles.box_everything}>
        <div className={styles.review_box}>
            <div>
                <img className={styles.comillas} src={comillas} alt="" />
            </div>
            <div className={styles.review_text}>
                Jesse's Exceptional product design ensure our website's success. Highly Recommended
            </div>
        </div>

        <div className={styles.jesse_box}>
            <div className={styles.circle_box}>
                <img className={styles.circle_img} src={circles} alt="" />
            </div>
            <div className={styles.box_jesse}>
                <img className={styles.jesse_img} src={jesse} alt="" />
            </div>
        </div>

        <div className={styles.box_experience}>
            <div>
                <img className={styles.stars} src={stars} alt="" />
            </div>
            <h2>
                5 Years
            </h2>
            <p>
               Experience
            </p>
        </div>
    </div>
  )
}
