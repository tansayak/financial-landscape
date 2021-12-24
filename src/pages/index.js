import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import Timeline from '../components/Timeline'
import Button from '@mui/material/Button';
import ThemeWrapper from '../components/ThemeWrapper'

export default function Home() {

  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <ThemeWrapper>
        <header className={styles.hero}>
          <div className={styles.landscape} />
          <div className={styles.container}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <Link to="/paper/driving-forces/factors/">
              <Button variant="contained" color="secondary">Consultation Paper</Button>
            </Link>
          </div>
        </header>
      </ThemeWrapper>
      <main>
        <Timeline />
      </main>
    </Layout>
  );
}
