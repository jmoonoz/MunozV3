const ENTERCONTACTDURATION = 0.9;
const EXITCONTACTDURATION = 0.2;
const CONTACTEASE = [0.33, 1, 0.68, 1];

export const fadeInOut = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    // ease: "easeInOut",
    transition: { duration: 0.9 },
  },
  exit: { opacity: 0, transition: { duration: 0.8 } },
};

export const slideUp = {
  hidden: {
    y: "100%",
    filter: "blur(5px)",
  },
  show: {
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: ENTERCONTACTDURATION,
      ease: CONTACTEASE,
    },
  },
  exit: {
    y: "100%",
    filter: "blur(5px)",
    transition: {
      duration: EXITCONTACTDURATION,
      ease: CONTACTEASE,
    },
  },
};

export const imgFadein = {
  hidden: { y: 10, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.4,
      ease: "easeIn",
    },
  },
  exit: { y: 10, opacity: 0 },
};
