import React from 'react';

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

  if (end < start) {
    animProgress =
      (scrollY / durationEqualizer - scrollStart / durationEqualizer) * animEqualizer - start * -1;
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
