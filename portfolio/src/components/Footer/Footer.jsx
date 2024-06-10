import styles from './Footer.module.css'
import arrow_btn from '../../assets/icon_btn_arrow.png'
import icon_1 from '../../assets/icons/facebook.svg'
import icon_2 from '../../assets/icons/instagram.svg'
import icon_3 from '../../assets/icons/whatsapp.svg'
import icon_4 from '../../assets/icons/x.svg'
import icon_5 from '../../assets/icons/youtube.svg'
import logo from '../../assets/logo.png'
import arrow_btn_2 from '../../assets/arrow_btn.svg'
import { Link } from 'react-scroll';
import resume from '../../assets/pdf/jesse-mccallums-CV-2024.pdf'

import emailjs from '@emailjs/browser'
import { useRef } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Footer() {
    const form = useRef();
    const handleResumeClick = () => {
        // Abre el archivo PDF en una nueva pestaña
        window.open(resume, '_blank');

        };
            const handleSubmit = (e) => {
                e.preventDefault();
                const serviceId = 'service_k9yf0tm';
                const templateId = 'template_f0xsjdm'
                const publicKey = 'dKUPUVAajGlnTA2Qp'
        
                emailjs
                .sendForm(serviceId, templateId, form.current, publicKey)
                .then(
                  () => {
                    toast.success('Email sent successfully!');
                  },
                  (error) => {
                    toast.error(`Failed to send email: ${error.text}`);
                  }
                );
            }
  return (
    <div className={styles.box_footer}>
        <div className={styles.mini_box_1}>
            <h1 className={styles.title_box_1}>Lets Connect there</h1>
            <button className={styles.btn_box_1}>Hire me <img className={styles.arrow_btn} src={arrow_btn} alt="" /></button>
        </div>
        <div className={styles.mini_box_2}>
                <div className={styles.mini_box_sub_1}>
                    <img className={styles.logo_img} src={logo} alt="" />
                    <p className={styles.description_footer}>
                    I am a web developer and UX/UI designer with a strong background in languages. I speak Spanish, English, French, and have a basic understanding of Chinese. My experience working with diverse teams has enhanced my teamwork skills, and I have extensive experience in UX/UI design.
                    </p>
                    <div className={styles.social_icons_box}>
                        {/* <a href=""><img className={styles.social_icons} src={icon_1} alt="" /></a> */}
                        <a href="https://www.instagram.com/jesseoncode?igsh=NDNuZmVxdHQ5enN3"><img className={styles.social_icons} src={icon_2} alt="" /></a>
                        {/* <a href=""><img className={styles.social_icons} src={icon_3} alt="" /></a> */}
                        <a href="https://x.com/mccallumshope?t=eyaTQ0y3175Fg435kwxzew&s=09"><img className={styles.social_icons} src={icon_4} alt="" /></a>
                        <a href="https://youtube.com/@jessemccode?si=gV6zIXKm45xVwDgz"><img className={styles.social_icons} src={icon_5} alt="" /></a>
                    </div>
                </div>

                <div className={styles.footer_menu_1}>
                    <h1 className={styles.footer_menu_1_title}>Navigation</h1>
                    <div className={styles.footer_menu_1_ul}>
                        <Link className={styles.footer_menu_1_li} to="home" smooth={true} duration={500}>Home</Link>
                        <Link className={styles.footer_menu_1_li} to="about" smooth={true} duration={500}>About Us</Link>
                        <Link className={styles.footer_menu_1_li} to="services" smooth={true} duration={500}>Service</Link>
                        <div className={styles.footer_menu_1_li} onClick={handleResumeClick}>Resume</div>
                        <Link className={styles.footer_menu_1_li} to="portfolio" smooth={true} duration={500}>Project</Link>
                    </div>
                </div>
                <div className={styles.footer_menu_1}>
                    <h1 className={styles.footer_menu_1_title}>Contact</h1>
                    <div className={styles.footer_menu_1_ul}>
                        <div className={styles.footer_menu_1_li}>+58 4121181409 </div>
                        <div className={styles.footer_menu_1_li}>jessemccallums2001@gmail.com</div>
                        <div className={styles.footer_menu_1_li}>www.jesseoncode.tech</div>
                    </div>
                </div>
                <div className={styles.box_cta}>
                    <h1 className={styles.title_cta}>Get the latest information</h1>
                    <form ref={form} onSubmit={handleSubmit} className={styles.input_box_cta}>
                        <input className={styles.input_mail} required type="email" name="user_email" id="" placeholder='Email Address' />
                        <button className={styles.btn_input}><img src={arrow_btn_2} alt="" /></button>
                    </form>
                </div>
        </div>
        <div className={styles.copy_titles_box}>
            <h1 className={styles.copy_titles}>Copyright© 2024 Jesse developer. All Rights Reserved.</h1>
            <p className={styles.copy_titles}>User Terms & Conditions | Privacy Policy</p>
        </div>

    </div>
  )
}
