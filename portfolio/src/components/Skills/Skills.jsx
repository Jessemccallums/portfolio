import styles from './Skills.module.css'

export default function Skills() {
  return (
    <div className={styles.box_skills}>
        <h1 className={styles.title_skills}>Skills</h1>
        <p className={styles.skills_name}>
          <span className={styles.skills_name_color}>Figma</span> Photoshop Illustrator Canva 
          <span className={styles.skills_name_color}>UX/UI</span><br /> 
          Notion <span className={styles.skills_name_color}>React</span> Javascript 
          <span className={styles.skills_name_color}>NextJS</span> CSS HTML <br /> 
          Tailwind CSS <span className={styles.skills_name_color}>NodeJS</span> ExpressJS 
          <span className={styles.skills_name_color}>Shopify</span> <br /> 
          <span className={styles.skills_name_color}>PostgreSQL</span> MongoDB Mysql PHP Laravel <br /> 
          Prompt Engineering AI <span className={styles.skills_name_color}>ChatGPT</span> Sequelize SQL <br /> 
          <span className={styles.skills_name_color}>Web design</span> E-commerce
        </p>
    </div>
  )
}
