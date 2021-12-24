import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from './index.module.scss';
import Timeline from '../components/Timeline'
import Button from '@mui/material/Button';
import globalStyles from '../css/global.module.scss'
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function Home() {

  const {siteConfig} = useDocusaurusContext();

  function Hero() {
    const {isDarkTheme} = useThemeContext();
    const theme = createTheme({
      palette: isDarkTheme
      ? {
          mode: 'dark',
          primary: {
            main: globalStyles.darkPrimary,
          },
          secondary: {
            main: globalStyles.darkSecondary,
          },
        }
      : {
          mode: 'light',
          primary: {
            main: globalStyles.lightPrimary,
          },
          secondary: {
            main: globalStyles.lightSecondary,
          },
        },
      typography: {
        fontFamily: ['Athiti'],
      },
    })
    return(
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    )
  }
  
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Hero />
      <main>
        <Timeline />
      </main>
    </Layout>
  );
}
