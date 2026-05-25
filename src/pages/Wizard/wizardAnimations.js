export const fadeSlideBlock = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
  exit: {
    transition: { staggerChildren: 0.06, staggerDirection: -1 },
  },
};

export const getMotionTransition = (reduceMotion, duration = 0.35) =>
  reduceMotion ? { duration: 0 } : { duration, ease: 'easeOut' };
