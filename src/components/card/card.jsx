import styles from './card.module.css'

export function Card() {
  return (
    <section className={`${styles.card}`}>
      <div className={`${styles.cardDiv}`}>
        <img
          src='/assets/icons/logo_cat.webp'
          alt='Foto de perfil'
          className={`${styles.cardImg}`}
        />
      </div>
      <div className={`${styles.cardInfo}`}>
        <h1 className={`${styles.infoTitle}`}>
          Gabriel Alejandro De Olival Padron
        </h1>
        <p className={`${styles.cardSubtitle}`}>
          <span className={`${styles.infoUsername}`}>@gabo2447</span>
        </p>
        <p className={`${styles.cardSubtitle}`}>
          1 año de experiencia como desarrollador Full Stack
        </p>
        <p className={`${styles.cardIcons}`}>
          <a target='_blank' title='Curriculum' href='#' className={styles.CardA}><img width={'35'} height={'35'} src='/public/assets/icons/curriculum-resume.svg' alt='Curriculum' className={`${styles.spanImg} ${styles.transition}`} /></a>
          <a target='_blank' title='Correo' href='mailto:gabrieldeolival2@gmail.com?Subject=Interesado%20en%20tus%20servicios' className={styles.CardA}><img width={'35'} height={'35'} src='/public/assets/icons/email-outline.svg' alt='Mail' className={`${styles.spanImg} ${styles.transition}`} /></a>
          <a target='_blank' title='Linkedin' href='https://www.linkedin.com/in/Gabo2447/' className={styles.CardA}><img width={'35'} height={'35'} src='/public/assets/icons/linkedin-outline.svg' alt='Linkendi' className={`${styles.spanImg} ${styles.transition}`} /></a>
          <a target='_blank' title='Github' href='https://github.com/Gabo2447' className={styles.CardA}><img width={'35'} height={'35'} src='/public/assets/icons/github-outline.svg' alt='GitHub' className={`${styles.spanImg} ${styles.transition}`} /></a>
        </p>
      </div>
    </section>
  )
}
