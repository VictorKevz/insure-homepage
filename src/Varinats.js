export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      },
      visible: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.7,
          delay: delay,
          ease: "easeIn",
        },
      },
      exit: {
        opacity: 0,
        y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
        x: direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
        transition: {
          type: "tween",
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };
  };