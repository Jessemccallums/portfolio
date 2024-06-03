import Card_testimonial from './Cards/Card_testimonial'
import styles from './Testimonials.module.css'
import joel from '../../assets/testimonials/testimonial_1.jpeg'
import santiago from '../../assets/testimonials/testimonial_2.jpeg'
import miguel from '../../assets/testimonials/testimonial_3.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testimonials() {
    const settings = {
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false // Desactiva las flechas de navegación
    };

    const cards_testimonials = [
        {
        img_user: joel,
        name_user: "Joel Vegas",
        comment_user: "I highly recommend Jesse McCallums as an outstanding professional and valuable team member. His exceptional teamwork skills, ability to foster collaboration, and positive attitude were crucial to our project's success. Jesse's commitment to excellence is evident in his work, making him a great asset to any project or company.",
        headline_user:"Ssr. Software Engineer"
        },
        {
            img_user: miguel,
            name_user: "Miguel Agustin",
            comment_user: "Recomiendo a esta persona ya que posee todo lo que se busca de un Developer Full Stack, su capacidad de adaptación es algo que sorprende, me encantó trabajar con él, sus habilidades blandas esta pulidas y la habilidades técnicas esta en muy buen nivel.",
            headline_user:"FullStack Developer"
        },
        {
            img_user: santiago,
            name_user: "Santiago Ceaglio",
            comment_user: "Jesse's friendly and professional demeanor enhances team dynamics. His strategic mindset and quick decision-making lead to effective solutions. With a strong work ethic and dedication, he consistently delivers high-quality results. Jesse would be a valuable asset to any company.",
            headline_user:"Software developer"
        },
    ]
  return (
    <div className={styles.testimonials_box}>
        <div className={styles.box_headline}>
            <h1 className={styles.title_headline}>
            Testimonials That <br />
            Speak to <span className={styles.title_headline_color}>My Results</span></h1>
            <p className={styles.p_headline}>
            In this section, you will find testimonials related to my work from colleagues I've collaborated with on various projects.
            </p> 
        </div>
       
        <div className={styles.slider_container} >
            <Slider {...settings}>
                {cards_testimonials.map((el, index) => {
                return <Card_testimonial key={index} img_user={el.img_user} name_user={el.name_user} comment_user={el.comment_user} headline_user={el.headline_user}/>
                })}
            </Slider>
        </div>
    </div>
  )
}
