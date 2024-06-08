import styles from './Nav.module.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import resume from '../../assets/pdf/jesse-mccallums-CV-2024.pdf'

import { Link } from 'react-scroll';

export default function Nav() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  const handleResumeClick = () => {
    // Abre el archivo PDF en una nueva pestaña
    window.open(resume, '_blank');
  };
  return (
    <div className={styles.nav_div}>
      <nav className={styles.nav_desktop}>
        <div className={styles.nav_ul}>
          <Link  className={styles.nav_item} to="home" smooth={true} duration={500}>Home</Link>
          <Link  className={styles.nav_item}  to="about" smooth={true} duration={500}>About</Link>
          <Link  className={styles.nav_item} to="services" smooth={true} duration={500}>Service</Link>
          <img className={styles.nav_logo} src={logo} alt="logo" />
          <div  className={styles.nav_item} onClick={handleResumeClick}>Resume</div>
          <Link  className={styles.nav_item} to='portfolio' smooth={true} duration={500}>Project</Link>
          <Link  className={styles.nav_item} to="contact" smooth={true} duration={500}>Contact</Link>
        </div>
      </nav>
      <nav className={styles.nav_mobile}>
        <div className={styles.burger_menu} onClick={updateMenu}>
          <div className={`${styles.burger_bar} ${isMenuClicked ? styles.clicked : ''}`}></div>
          <div className={`${styles.burger_bar} ${isMenuClicked ? styles.clicked : ''}`}></div>
          <div className={`${styles.burger_bar} ${isMenuClicked ? styles.clicked : ''}`}></div>
        </div>
        <div>
          <img className={styles.nav_logo_mobile} src={logo} alt="" />
        </div>
      </nav>
      <div className={`${styles.menu} ${isMenuClicked ? styles.visible : styles.hidden}`}>
        <div className={styles.nav_ul_mobile}>
          <Link className={styles.nav_item_mobile} to="home" smooth={true} duration={500}>Home</Link>
          <Link className={styles.nav_item_mobile}  to="about" smooth={true} duration={500}>About</Link>
          <Link className={styles.nav_item_mobile} to="services" smooth={true} duration={500}>Service</Link>
          <div className={styles.nav_item_mobile} onClick={handleResumeClick}>Resume</div>
          <Link className={styles.nav_item_mobile} to='portfolio' smooth={true} duration={500}>Project</Link>
          <Link className={styles.nav_item_mobile} to="contact" smooth={true} duration={500}>Contact</Link>
        </div>
      </div>
    </div>
  );
}
