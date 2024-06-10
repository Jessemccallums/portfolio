import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './Portfolio.module.css'
import risetalk from '../../assets/risetalk.png'
import rickandmorty from '../../assets/rickandmorty.png'
import starbone from '../../assets/starbone.png'
import fashion from '../../assets/fashion.png'
import CardPortfolio from './Cards/CardPortfolio'
import btn_icon from '../../assets/icon_btn_arrow.png'

const cards_portfolio = [
    {
    img: risetalk,
    title: "Risetalk",
    link: 'https://github.com/Risetalk'
    },
    {
        img: rickandmorty,
        title: "Rick and Morty",
        link: "https://github.com/Jessemccallums/Rick-and-Morty-App"
    },
    {
        img: starbone,
        title: 'Shopify Theme Store "Starbone" ',
        link: "https://github.com/Jessemccallums/Starbone-Fashion"
    },
    {
        img: fashion,
        title: 'Shopify Theme Store "fashion" ',
        link: "https://www.figma.com/design/C4rWar8VKlntOgUfdxt2wk/Ecommerce-%231?m=auto&t=faVHHjGP2WCK3Unc-6"
    }
]

export default function Portfolio() {
    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
  return (
    <div className={styles.portfolio_box} id="portfolio">
        <div className={styles.box_title_section_portfolio}>
            <h1 className={styles.title_portfolio_section}>
                Lets have a look at my <br />
                <span className={styles.title_portfolio_color}>Portfolio</span>
            </h1>
            <button className={styles.btn_potfolio_section}>See All</button>
        </div>

        <div className={styles.slider_container} >
            <Slider {...settings}>
                {cards_portfolio.map((el, index) => {
                return <CardPortfolio key={index} img={el.img} title={el.title} link={el.link}/>
                })}
            </Slider>
        </div>

        <div className={styles.features}>
            <button className={styles.btn_positions}>Landing Page</button>
            <button className={styles.btn_positions}>Web Design</button>
            <button className={styles.btn_positions}>E commerce</button>
            <button className={styles.btn_positions}>UX/UI design</button>
            <button className={styles.btn_positions}>Shopify</button>

        </div>
        <div className={styles.second_box_portfolio}>
            <div className={styles.headline_box}>
                <h1 className={styles.headline_portfolio}>Full Stack developer | UX/UI designer </h1>
                <img className={styles.btn_icon} src={btn_icon} alt="" />
            </div>
            <div>
                <p className={styles.description_headline}>
                 I am a web developer and UX/UI designer with a strong background in languages. I speak Spanish, English, French, and have a basic understanding of Chinese. My experience working with diverse teams has enhanced my teamwork skills, and I have extensive experience in UX/UI design.
                </p>
            </div>
            
        </div>
    </div>
  )
}
