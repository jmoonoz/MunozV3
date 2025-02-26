export const fadeInOut = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    // ease: "easeInOut",
    transition: { duration: 0.9 },
  },
  exit: { opacity: 0, transition: { duration: 0.8 } },
};
