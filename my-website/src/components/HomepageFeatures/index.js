import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ma présentation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Quelques informations qui te permettront de mieux me connaître.
      </>
    ),
    link: '/docs/ma-presentation',
  },
  {
    title: 'Mes compétences',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Une liste des compétences qui peuvent être utiles pour l'alternance.
      </>
    ),
    link: '/docs/mes-competences',
  },
  {
    title: 'Mes projets',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Voici une liste de projets que j'ai réalisé et qui peuvent t'intéresser. Cela reprennds les projets développés durant ma formation et mes projets personnels.
      </>
    ),
    link: '/docs/mes-projets',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
