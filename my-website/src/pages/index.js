import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import reactLogo from '@site/static/img/react.png';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title text-white">{siteConfig.title}</h1>
        <p className="hero__subtitle text-blue-react">{siteConfig.tagline}</p>
        <p className='text-white'>Hello ! Bienvenue sur mon site de candidature pour l'alternance de React Hebdo & Docusaurus avec Sébastien Lorber ! Bonne visite</p>
        <img src={reactLogo} alt="React Logo" className='img-size' />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
