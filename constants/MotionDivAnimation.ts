const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const motionDivAnimation = {
  top: "-100vh",
  transition: { ...transition, delay: 4 },
};

const motionDivAnimation2 = { x: 0, opacity: 1, transition: { ...transition } };

const motionDivTechStack = [
  "HTML",
  "CSS/SCSS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT JS",
  "NEXT JS",
  "FRAMER MOTION",
];

export { motionDivAnimation, motionDivAnimation2, motionDivTechStack };
