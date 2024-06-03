import styles from './Highlights.module.css'
import Highlights_img from '../../assets/highlights.png'
export default function Highlights() {
    const backgroundImageStyle = {
        backgroundImage: `url(${Highlights_img})`
      };
  return (
    <div className={styles.box_highlights} style={backgroundImageStyle}>

    </div>
  )
}
