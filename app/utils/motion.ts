// utils/motion.ts

export const motionEase = {
  smooth: [0.22, 1, 0.36, 1] as const,
  linear: "linear" as const,
};

export const motionDuration = {
  fast: 0.4,
  normal: 0.55,
  slow: 0.7,
};

export const motionViewport = {
  default: {
    once: true,
    amount: 0.2,
  },

  early: {
    once: true,
    amount: 0.15,
  },

  medium: {
    once: true,
    amount: 0.3,
  },

  late: {
    once: true,
    amount: 0.4,
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: motionDuration.normal,
      ease: motionEase.smooth,
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: motionDuration.normal,
      ease: motionEase.smooth,
    },
  },
};

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -18,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: motionDuration.normal,
      ease: motionEase.smooth,
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: 24,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: motionDuration.normal,
      ease: motionEase.smooth,
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: -24,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: motionDuration.normal,
      ease: motionEase.smooth,
    },
  },
};

export const fadeScale = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: motionDuration.normal,
      ease: motionEase.smooth,
    },
  },
};

export function stagger(
  staggerChildren = 0.1,
  delayChildren = 0,
) {
  return {
    hidden: {},

    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}