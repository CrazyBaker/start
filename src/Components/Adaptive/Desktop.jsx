import React from 'react';
import AnimatedImg from '../AnimatedImg.jsx';
import styles from '../AnimatedImg.module.css';

export default function Desktop({ scrollY }) {
  return (
    <>
      <AnimatedImg
        className={styles.logo}
        imagePath={require('../../img/logo.png')}
        animProperty="transform: translateY"
        start={0}
        end={-400}
        scrollY={scrollY}
        scrollStart={0}
        scrollEnd={800}
      />
      <AnimatedImg
        className={styles.cloud}
        imagePath={require('../../img/cloud.png')}
        animProperty="opacity"
        start={0}
        end={1}
        scrollY={scrollY}
        scrollStart={800}
        scrollEnd={1200}
      />
      <AnimatedImg
        className={styles.text}
        imagePath={require('../../img/cloudText.png')}
        animProperty="opacity"
        start={0}
        end={1}
        scrollY={scrollY}
        scrollStart={1200}
        scrollEnd={1600}
      />
      <AnimatedImg
        className={styles.buttons}
        imagePath={require('../../img/buttons.png')}
        animProperty="transform: translateY"
        start={window.innerHeight}
        end={0}
        scrollY={scrollY}
        scrollStart={1600}
        scrollEnd={2100}
      />
      <AnimatedImg
        className={styles.buttonsText}
        imagePath={require('../../img/buttonText.png')}
        animProperty="opacity"
        start={0}
        end={1}
        scrollY={scrollY}
        scrollStart={2100}
        scrollEnd={2300}
      />
    </>
  );
}
