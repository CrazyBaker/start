import { React, useEffect, useState } from "react";
import AnimatedImg from "../AnimatedImg.jsx";
import styles from "../AnimatedImgMobile.module.css";

export default function Mobile() {
  const [scrollY, setScrollY] = useState(0);
  const tabletResolution = 768;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

    return () => {
      document.body.removeEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    };
  }, [scrollY]);
  return (
    <>
      {window.innerWidth < 1080 && window.innerWidth > 768 && (
        <AnimatedImg
          className={styles.logo}
          imagePath={require("../../img/logo.png")}
          animProperty="transform: translateY"
          start={0}
          end={-430}
          scrollY={scrollY}
          scrollStart={0}
          scrollEnd={800}
        />
      )}
      {window.innerWidth < 768 && window.innerWidth > 554 && (
        <AnimatedImg
          className={styles.logo}
          imagePath={require("../../img/logo.png")}
          animProperty="transform: translateY"
          start={0}
          end={-265}
          scrollY={scrollY}
          scrollStart={0}
          scrollEnd={800}
        />
      )}

      {window.innerWidth < 554 && (
        <AnimatedImg
          className={styles.logo}
          imagePath={require("../../img/logo.png")}
          animProperty="transform: translateY"
          start={0}
          end={-165}
          scrollY={scrollY}
          scrollStart={0}
          scrollEnd={800}
        />
      )}
      <AnimatedImg
        className={styles.cloud}
        imagePath={require("../../img/cloud.png")}
        animProperty="opacity"
        start={0}
        end={1}
        scrollY={scrollY}
        scrollStart={800}
        scrollEnd={1200}
      />
      <AnimatedImg
        className={styles.text}
        imagePath={require("../../img/cloudText.png")}
        animProperty="opacity"
        start={0}
        end={1}
        scrollY={scrollY}
        scrollStart={1200}
        scrollEnd={1600}
      />

      {window.innerWidth < 1080 && window.innerWidth > 768 && (
        <>
          <AnimatedImg
            className={styles.buttons}
            imagePath={require("../../img/buttonsMobile.png")}
            animProperty="transform: translateY"
            start={window.innerHeight}
            end={0}
            scrollY={scrollY}
            scrollStart={1600}
            scrollEnd={2200}
          />
          <AnimatedImg
            className={styles.buttonsText}
            imagePath={require("../../img/buttonsTextMobile.png")}
            animProperty="opacity"
            start={0}
            end={1}
            scrollY={scrollY}
            scrollStart={2200}
            scrollEnd={2500}
          />
        </>
      )}
      {window.innerWidth < 768 && window.innerWidth > 554 && (
        <>
          <AnimatedImg
            className={styles.buttons}
            imagePath={require("../../img/buttonsMobile.png")}
            animProperty="transform: translateY"
            start={window.innerHeight}
            end={-100}
            scrollY={scrollY}
            scrollStart={1600}
            scrollEnd={2200}
          />
        </>
      )}

      {window.innerWidth < 554 && (
        <>
          <AnimatedImg
            className={styles.buttons}
            imagePath={require("../../img/buttonsMobile.png")}
            animProperty="transform: translateY"
            start={window.innerHeight}
            end={-130}
            scrollY={scrollY}
            scrollStart={1600}
            scrollEnd={2200}
          />
        </>
      )}
    </>
  );
}
