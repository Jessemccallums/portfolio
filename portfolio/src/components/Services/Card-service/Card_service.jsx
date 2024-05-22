import styles from './card.module.css'
export default function Card_service({ img, title }) {
  return (
    <div className={`${styles.box_card} ${styles.glasseffect}`}>
        <div>
            <h1 className={styles.card_title}>{title}</h1>
        </div>
        <div>
            <img className={styles.img_card} src={img } alt="" />
        </div>
        
        

    </div>
  )
}
