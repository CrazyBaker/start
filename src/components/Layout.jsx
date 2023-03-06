import { React, useState, useEffect } from 'react';
import Adaptive from './Adaptive/Adaptive.jsx';
import Desktop from './Adaptive/Desktop.jsx';

export default function Layout() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(screenWidth <= 1080);
  const [scrollY, setScrollY] = useState(0);

  // Я понимаю, что на тех же мобилках разрешение не динамическое
  // и вешать обрработчик не имеет смысла.
  // Ебанул этот мув просто чтоб тебе было удобней проверять через дев тулзы

  useEffect(() => {
    window.addEventListener(`resize`, () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(screenWidth <= 1080);
    });
    return () => {
      window.removeEventListener(`resize`, () => {
        setScreenWidth(window.innerWidth);
        setIsMobile(screenWidth <= 1080);
      });
    };
  }, [isMobile, screenWidth]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });

    return () => {
      document.body.removeEventListener('scroll', () => {
        setScrollY(window.scrollY);
      });
    };
  }, [scrollY]);

  return (
    <>
      {isMobile ? (
        <Adaptive screenWidth={screenWidth} scrollY={scrollY} />
      ) : (
        <Desktop screenWidth={screenWidth} scrollY={scrollY} />
      )}
    </>
  );
}
