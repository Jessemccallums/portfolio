import styles from './Contact.module.css'
import mail from '../../assets/mail.png'
import certified from '../../assets/shield-tick.png'
import star from '../../assets/star.png'
import award from '../../assets/award.png'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

export default function Contact() {
    const form = useRef();


    const handleSubmit = (e) => {
        e.preventDefault()
        const serviceId = 'service_k9yf0tm';
        const templateId = 'template_f0xsjdm'
        const publicKey = 'dKUPUVAajGlnTA2Qp'

        
        emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );

    }



  return (
    <div className={styles.box_contact}>
        <h1 className={styles.contact_title}>
        Have an Awsome Project <br />
        Idea? <span className={styles.contact_title_color}>Let’s Discuss</span>
        </h1>

        <div>
            <form ref={form} onSubmit={handleSubmit} className={styles.form_box}>
                <img src={mail} alt="" />
                <input type="email" name="user_email"   placeholder='Enter Email Address' className={styles.input_form} />
                <button  type="submit" className={styles.btn_form}>
                    Send
                </button>
            </form>
        </div>
        <div className={styles.bottom_box}>
            <div className={styles.mini_box_bottom}>
                <img src={star} alt="" className={styles.img_bottom}/>
                <h1 className={styles.bottom_title}>4.9/5 Average Ratings</h1>
            </div>
            <div className={styles.mini_box_bottom}>
                <img src={award} alt="" className={styles.img_bottom}/>
                <h1 className={styles.bottom_title}>3+ languages</h1>
            </div>
            <div className={styles.mini_box_bottom}>
                <img src={certified} alt="" className={styles.img_bottom}/>
                <h1 className={styles.bottom_title}>Certified Full Stack Developer</h1>
            </div>
        </div>

    </div>
  )
}
