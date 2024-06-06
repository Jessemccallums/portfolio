import styles from './experience.module.css'
import timeline from '../../assets/experience_timeline.png'

export default function Experience() {
  return (
    <div className={styles.box_experience}>
        <div>
            <h1 className={styles.experience_title}>Work <span className={styles.experience_title_red}>Experience</span></h1>
        </div>
        <div className={styles.history_experience}>
            <div className={styles.countries_box}>
                <div>
                    <h1 className={styles.title_box}>Barcelona, Spain</h1>
                    <p className={styles.paragraph_box}>July 2023 - December 2023</p>
                </div>
                <div>
                    <h1 className={styles.title_box}>Buenos Aires, Argentina</h1>
                    <p className={styles.paragraph_box}>January 2023 - July 2023</p>
                </div>
                <div>
                    <h1 className={styles.title_box}>Berlin, Germany</h1>
                    <p className={styles.paragraph_box}>December 2023 - March 2024</p>
                </div>
            </div>
            <div>
                <img className={styles.experience_img} src={timeline} alt="" />
            </div>
            <div className={styles.positions}>
                <div>
                    <h1 className={styles.title_box}>Frontend Developer</h1>
                    <p className={styles.paragraph_box}>In this role, I worked with a team of developers to deliver an app connected to AI.</p>
                </div>
                <div>
                    <h1 className={styles.title_box}>UI/UX Designer, <br />
                    Full Stack Developer</h1>
                    <p className={styles.paragraph_box}>In this role, I worked with a team of developers to deliver an e-learning app and much more.</p>
                </div>
                <div>
                    <h1 className={styles.title_box}>UI/UX designer, <br />
                    Frontend Developer</h1>
                    <p className={styles.paragraph_box}>In this role, I worked with a team in Germany to deliver Shopify themes using a UX/UI approach.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
