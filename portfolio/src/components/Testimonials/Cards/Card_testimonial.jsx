import styles from './Card.module.css'
import quote from '../../../assets/testimonials/quote-down.png'
import stars from '../../../assets/stars.png'

export default function Card_testimonial({ img_user, name_user, comment_user, headline_user }) {
  return (
    <div className={`${styles.card_box} ${styles.glasseffect}`}>
        <div className={styles.top_comment_box}>
            <div className={styles.left_box_main}>
                <div className={styles.left_box}>
                    <div className={styles.img_testimonial}>
                        <img className={styles.img_testimonial} src={img_user} alt="" />  
                    </div>
                    <div>
                        <h1 className={styles.user_name}>{name_user}</h1>
                        <p className={styles.headline_user}>{headline_user}</p>
                    </div>
                </div>
                <div>
                    <img src={stars} alt="" />
                </div>
                
                
            </div>
            <div className={styles.right_box}>
                <img className={styles.quoate_img} src={quote} alt="" />
            </div>
        </div>
        <div className={styles.comment_box}>
            <p className={styles.comment}>{comment_user}</p>
        </div>
    </div>
  )
}
