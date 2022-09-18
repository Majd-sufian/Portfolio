import { Project } from "../types/global";

const projects: Array<Project> = [
  {
    firstName: "HooBank",
    secondName: "",
    description: "A simple landing page for HooBank.",
    tectStack: "TYPESCRIPT - REACT - TAILWIND",
    media: {
      firstImage: {
        img: "png/hoo2.png",
        alt: "alexxandria model",
      },
      secondImage: {
        img: "png/hoo.png",
        alt: "alexxandria logo",
      },
    },
    dataScrollClass: "alexxandria-anim",
    social: {
      link: "https://hoobank-majd-sufyan.netlify.app/",
      github: "https://github.com/Majd-sufian/HooBank",
    },
  },
  {
    firstName: "News",
    secondName: "Reader Ai",
    tectStack: "REACT - JS - ALAN AI - MATERIAL UI",
    description: "A News app, controlled and navigated via voice.",
    media: {
      firstImage: {
        img: "png/news-reader-ai.png",
        alt: "heatrow",
      },
      secondImage: {
        img: "png/news-reader-ai-2.png",
        alt: "heatrow logo",
      },
    },
    dataScrollClass: "heatrow-anim",
    social: {
      link: "https://news-reader-ai-majd-sufyan.netlify.app/",
      github: "https://github.com/Majd-sufian/News-Reader-Ai",
    },
  },
  {
    firstName: "Netflix clone",
    secondName: "",
    tectStack: "NEXT JS - TYPESCRIPT - REACT - TAILWIND - MOVIE DB API",
    description: "",
    media: {
      firstImage: {
        img: "png/netflix.png",
        alt: "safarika",
      },
      secondImage: {
        img: "png/netflix2.png",
        alt: "safarika logo",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://netflix-clone-v2-umber.vercel.app/",
      github: "https://github.com/Majd-sufian/netflix-clone-v2",
    },
  },
];

const featuredProjects = [
  {
    link: "https://hoobank-majd-sufyan.netlify.app/",
    image: "png/hoo.png",
    firstName: "HooBank",
    secondName: "",
  },
  {
    link: "https://netflix-clone-v2-umber.vercel.app/",
    image: "png/netflix.png",
    firstName: "Netflix",
    secondName: "Clone",
  },
  {
    link: "https://news-reader-ai-majd-sufyan.netlify.app/",
    image: "png/news-reader-ai.png",
    firstName: "News",
    secondName: "Reader Ai",
  },
];

const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const closedTansition = {
  duration: 1,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const variants = {
  open: {
    left: 0,
    pointerEvent: "none",
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
  closed: {
    left: "-100vw",
    pointerEvent: "none",
    transition: {
      delay: 1,
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const socialLinks = [
  {
    icon: "👾 ",
    name: "GH",
    fullName: "GITHUB",
    link: "https://github.com/Majd-sufian",
  },
  {
    icon: "💼 ",
    name: "LD",
    fullName: "LINKEDIN",
    link: "/https://www.linkedin.com/in/majd-sufyan/",
  },
];

const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const tags: string[] = [
  "REACT",
  "TYPESCRIPT",
  "NODEJS",
  "EXPRESS",
  "FIGMA",
  "GIT",
  "NETLIFY",
  "AWS",
  "PYTHON",
  "REDUX",
  "FIREBASE",
  "IONIC",
  "HTLM",
  "CSS",
  "SASS",
  "VS CODE",
  "GITHUB",
  "CONTEXT API",
  "TAILWIND",
  "MATERIAL UI",
  "REACT NATIVE",
  "RUBY",
  "VITE",
  "NEXT.JS",
  "FRAMER NOTION",
];

export {
  projects,
  featuredProjects,
  closedTansition,
  openBottomTransition,
  openTransition,
  openTopTransition,
  variants,
  socialLinks,
  transition,
  tags,
};
