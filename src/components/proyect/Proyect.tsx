import React, { useState } from 'react';
import styles from './Proyect.module.css';
import proyects from './proyect.json';

type Tecnologia = {
  nombre: string;
  icono: string;
};

type Proyecto = {
  id: string;
  titulo: string;
  imagen: string;
  descripcion: string;
  tecnologias: Tecnologia[];
  github_url: string;
};

type ProyectosSectionProps = {
  proyectos: Proyecto[];
};

export function ProyectosSection({ proyectos }: ProyectosSectionProps) {
  return (
    <section className={styles.section}>
      {proyectos.length === 0 ? (
        <p>No hay proyectos para mostrar.</p>
      ) : (
        <div className={styles.grid}>
          {proyectos.map(({ id, titulo, imagen, descripcion, tecnologias, github_url }) => (
            <LazyImageCard
              id={id}
              key={id}
              titulo={titulo}
              imagen={imagen}
              descripcion={descripcion}
              tecnologias={tecnologias}
              github_url={github_url}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function LazyImageCard({ titulo, imagen, descripcion, tecnologias, github_url }: Proyecto) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <article className={`${styles.card} ${styles.transition}`}>
      <div className={styles.imageWrapper}>
        {!isLoaded && <div className={styles.placeholder}>Cargando...</div>}
        <img
          src={imagen}
          alt={titulo}
          className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className={styles.sectionDiv}>
        <h3 className={styles.h3}>{titulo}</h3>
        <p className={styles.p}>{descripcion}</p>
        <div className={styles.tecnologias}>
          {tecnologias.map((tecnologia, index) => (
            <div key={index} className={styles.tecnologiasDiv}>
              <img
                src={tecnologia.icono}
                alt={tecnologia.nombre}
                className={styles.tecnologiaIcono}
              />
            </div>
          ))}
        </div>
        <a
          href={github_url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.sectionGit} ${styles.colorTransition}`}
        >
          <img
            src="/assets/icons/github-outline.svg"
            className={styles.git}
            alt="GitHub"
          />
          Ver en Github
        </a>
      </div>
    </article>
  );
}

export function Proyect() {
  const title = '<PROYECT />';

  return (
    <section className={styles.proyectSection}>
      <h2 className={styles.sectionTitle}>🌐 {title}</h2>
      <ProyectosSection proyectos={proyects} />
    </section>
  );
}
