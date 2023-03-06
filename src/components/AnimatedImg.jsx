import { React, useState } from 'react';

export default function AnimatedImg({
  imagePath,
  className,
  animProperty,
  start,
  end,
  scrollY,
  scrollStart,
  scrollEnd,
}) {
  const animEqualizer = (end - start) / 100;
  const durationEqualizer = (scrollEnd - scrollStart) / 100;
  let style = {};
  let animProgress =
    (scrollY / durationEqualizer - scrollStart / durationEqualizer) * animEqualizer - start;

  const screenHeigh = window.innerHeight;

  const [bodyHeigh, setBodyHeigh] = useState(0);

  if (screenHeigh + scrollEnd > bodyHeigh) {
    document.querySelector('body').style.minHeight = `${screenHeigh + scrollEnd}px`;
    setBodyHeigh(screenHeigh + scrollEnd);
  }

  if (end < start) {
    animProgress =
      (scrollY / durationEqualizer - scrollStart / durationEqualizer) * animEqualizer - start * -1;
  }

  switch (animProperty) {
    case 'transform: translateY':
      style = { transform: `translateY(${start}px)` };
      break;
    case 'opacity':
      style = {
        opacity: start,
      };
      break;
    default:
      style = {};
      break;
  }

  if (animProperty === 'transform: translateY' && scrollY >= scrollStart) {
    scrollY - scrollStart > scrollEnd - scrollStart
      ? (style = {
          transform: `translateY(${end}px)`,
        })
      : (style = {
          transform: `translateY(${animProgress}px)`,
        });
  }

  if (animProperty === 'opacity') {
    scrollY - scrollStart > scrollEnd - scrollStart
      ? (style = {
          opacity: end,
        })
      : (style = {
          opacity: animProgress,
        });
  }

  return <img className={className} src={imagePath} alt="alt" style={style} />;
}
