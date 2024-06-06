import styles from './Nav.module.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';

export default function Nav() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className={styles.nav_div}>
      <nav className={styles.nav_desktop}>
        <div className={styles.nav_ul}>
          <div className={styles.nav_item}>Home</div>
          <div className={styles.nav_item}>About</div>
          <div className={styles.nav_item}>Service</div>
          <img className={styles.nav_logo} src={logo} alt="logo" />
          <div className={styles.nav_item}>Resume</div>
          <div className={styles.nav_item}>Project</div>
          <div className={styles.nav_item}>Contact</div>
        </div>
      </nav>
      <nav className={styles.nav_mobile}>
        <div className={styles.burger_menu} onClick={updateMenu}>
          <div className={`${styles.burger_bar} ${isMenuClicked ? styles.clicked : ''}`}></div>
          <div className={`${styles.burger_bar} ${isMenuClicked ? styles.clicked : ''}`}></div>
          <div className={`${styles.burger_bar} ${isMenuClicked ? styles.clicked : ''}`}></div>
        </div>
        <div>
          <img className={styles.nav_logo} src={logo} alt="" />
        </div>
      </nav>
      <div className={`${styles.menu} ${isMenuClicked ? styles.visible : styles.hidden}`}>
        <div className={styles.nav_ul_mobile}>
          <div className={styles.nav_item_mobile}>Home</div>
          <div className={styles.nav_item_mobile}>About</div>
          <div className={styles.nav_item_mobile}>Service</div>
          <div className={styles.nav_item_mobile}>Resume</div>
          <div className={styles.nav_item_mobile}>Project</div>
          <div className={styles.nav_item_mobile}>Contact</div>
        </div>
      </div>
    </div>
  );
}
