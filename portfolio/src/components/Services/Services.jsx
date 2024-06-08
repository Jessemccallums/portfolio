import styles from './service.module.css'
import Card_service from './Card-service/Card_service'
import service_1 from '../../assets/service_1.png'
import service_2 from '../../assets/service_2.png'
import service_3 from '../../assets/service_3.png'

export default function Services() {
    const services = [
    {
        img: service_1,
        title: "UI/ UX Design"
    },
    {
        img: service_2,
        title: "Web Design"
    },
    {
        img: service_3,
        title: "Landing Page"
    }
]



  return (
    <div className={styles.box_services} id="services">
        <div className={styles.box_top_services}>
            <div>
                <h1 className={styles.service_title}>My <span className={styles.blue_title}>Services</span></h1>
            </div>
            <div className={styles.service_box_p}>
                <p className={styles.service_p}>Here, you can see the latest project I have been working on, which has an approach to UX/UI and code.</p>
            </div>
        </div>

        <div className={styles.box_cards}>
            {services.map((el, index) => {
                return (
                    <Card_service key={index} img={el.img} title={el.title} />
                )
            })}
        </div>
    </div>
  )
}
