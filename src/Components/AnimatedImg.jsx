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

  // if (animProperty === 'transform: translateY') {
  if (animProperty === 'transform: translateY' && scrollY >= scrollStart) {
    console.log('scroll ' + scrollY);
    console.log('scrollEND ' + scrollEnd);
    console.log('scrollSTART ' + scrollStart);
    console.log('animEqualizer ' + animEqualizer);
    console.log('durationEqualizer ' + durationEqualizer);
    console.log('animProgress ' + animProgress);
    console.log('scrollY - scrollStart ' + (scrollY - scrollStart));
    console.log('scrollEnd - scrollStart ' + (scrollEnd - scrollStart));

    scrollY - scrollStart > scrollEnd - scrollStart
      ? (style = {
          transform: `translateY(${end}px)`,
        })
      : (style = {
          transform: `translateY(${animProgress}px)`,
        });
  }

  if (animProperty === 'opacity') {
    // console.log('scroll ' + scrollY);
    // console.log('scrollEND ' + scrollEnd);
    // console.log('scrollSTART ' + scrollStart);
    // console.log('animEqualizer ' + animEqualizer);
    // console.log('durationEqualizer ' + durationEqualizer);
    // console.log('animProgress ' + animProgress);
    // console.log('scrollY - scrollStart ' + (scrollY - scrollStart));
    // console.log('scrollEnd - scrollStart ' + (scrollEnd - scrollStart));

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
