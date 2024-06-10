import styles from './CardPortfolio.module.css';

export default function CardPortfolio({ img, title, link }) {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to right top, rgba(0, 0, 0, 0.72), rgb(211 190 255 / 6%)), url(${img})`
  };

  return (
    <a href={link} className={styles.link_url}>
    <div className={styles.box_card_portfolio} style={backgroundImageStyle}>
      <div>
        <h1 className={styles.title_card}>{title}</h1>
      </div>
    </div>
    </a>
  );
}