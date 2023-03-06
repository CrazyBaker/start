import React from 'react';
import AnimatedImg from '../AnimatedImg.jsx';
import stylesMobile from '../AnimatedImgMobile.module.css';
import styles from '../AnimatedImg.module.css';

const Adaptive = ({ screenWidth, scrollY }) => {
  if (screenWidth < 1080 && screenWidth > 768) {
    return (
      <>
        <AnimatedImg
          className={stylesMobile.logo}
          imagePath={require('../../img/logo.png')}
          animProperty="transform: translateY"
          start={0}
          end={-400}
          scrollY={scrollY}
          scrollStart={0}
          scrollEnd={800}
        />
        <AnimatedImg
          className={stylesMobile.cloud}
          imagePath={require('../../img/cloud.png')}
          animProperty="opacity"
          start={0}
          end={1}
          scrollY={scrollY}
          scrollStart={800}
          scrollEnd={1200}
        />
        <AnimatedImg
          className={stylesMobile.text}
          imagePath={require('../../img/cloudText.png')}
          animProperty="opacity"
          start={0}
          end={1}
          scrollY={scrollY}
          scrollStart={1200}
          scrollEnd={1600}
        />
        <AnimatedImg
          className={stylesMobile.buttons}
          imagePath={require('../../img/buttonsMobile.png')}
          animProperty="transform: translateY"
          start={window.innerHeight}
          end={0}
          scrollY={scrollY}
          scrollStart={1600}
          scrollEnd={2200}
        />
        <AnimatedImg
          className={stylesMobile.buttonsText}
          imagePath={require('../../img/buttonsTextMobile.png')}
          animProperty="opacity"
          start={0}
          end={1}
          scrollY={scrollY}
          scrollStart={2200}
          scrollEnd={2500}
        />
      </>
    );
  }

  if (screenWidth < 768 && screenWidth > 554) {
    return (
      <>
        <AnimatedImg
          className={stylesMobile.logo}
          imagePath={require('../../img/logo.png')}
          animProperty="transform: translateY"
          start={0}
          end={-265}
          scrollY={scrollY}
          scrollStart={0}
          scrollEnd={800}
        />
        <AnimatedImg
          className={stylesMobile.cloud}
          imagePath={require('../../img/cloud.png')}
          animProperty="opacity"
          start={0}
          end={1}
          scrollY={scrollY}
          scrollStart={800}
          scrollEnd={1200}
        />
        <AnimatedImg
          className={stylesMobile.text}
          imagePath={require('../../img/cloudText.png')}
          animProperty="opacity"
          start={0}
          end={1}
          scrollY={scrollY}
          scrollStart={1200}
          scrollEnd={1600}
        />
        <AnimatedImg
          className={stylesMobile.buttons}
          imagePath={require('../../img/buttonsMobile.png')}
          animProperty="transform: translateY"
          start={window.innerHeight}
          end={-100}
          scrollY={scrollY}
          scrollStart={1600}
          scrollEnd={2200}
        />
        <AnimatedImg
          className={stylesMobile.buttonsText}
          imagePath={require('../../img/buttonsTextMobile.png')}
          animProperty="opacity"
          start={0}
          end={1}
          scrollY={scrollY}
          scrollStart={2200}
          scrollEnd={2500}
        />
      </>
    );
  }

  if (screenWidth < 554) {
    return (
      <>
        <AnimatedImg
          className={stylesMobile.logo}
          imagePath={require('../../img/logo.png')}
          animProperty="transform: translateY"
          start={0}
          end={-165}
          scrollY={scrollY}
          scrollStart={0}
          scrollEnd={800}
        />
        <AnimatedImg
          className={stylesMobile.cloud}
          imagePath={require('../../img/cloud.png')}
          animProperty="opacity"
          start={0}
          end={1}
          scrollY={scrollY}
          scrollStart={800}
          scrollEnd={1200}
        />
        <AnimatedImg
          className={stylesMobile.text}
          imagePath={require('../../img/cloudText.png')}
          animProperty="opacity"
          start={0}
          end={1}
          scrollY={scrollY}
          scrollStart={1200}
          scrollEnd={1600}
        />
        <AnimatedImg
          className={stylesMobile.buttons}
          imagePath={require('../../img/buttonsMobile.png')}
          animProperty="transform: translateY"
          start={window.innerHeight}
          end={-130}
          scrollY={scrollY}
          scrollStart={1600}
          scrollEnd={2200}
        />
        <AnimatedImg
          className={stylesMobile.buttonsText}
          imagePath={require('../../img/buttonsTextMobile.png')}
          animProperty="opacity"
          start={0}
          end={1}
          scrollY={scrollY}
          scrollStart={2200}
          scrollEnd={2500}
        />
      </>
    );
  }
};

export default Adaptive;
