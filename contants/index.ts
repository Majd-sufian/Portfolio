import { Project, Blogs } from "../types/global";

const projects: Array<Project> = [
  // NFT
  {
    firstName: "NFT Market Place",
    secondName: "",
    tectStack: "REACT NATIVE - REACT JS - TYPESCRIPT - TAILWIND - EXPO",
    description:
      "Created a mobile app (Android & IOS) with React Native and a showcase landing page with Typescript & React for the NFT marketplace.",
    media: {
      firstImage: {
        img: "png/Nft.png",
        alt: "Nft clone",
      },
      secondImage: {
        img: "png/Nft2.png",
        alt: "Nft",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://nft-markeplace.netlify.app/",
      github: "https://github.com/Majd-sufian/NFT-market-landing-page",
    },
  },
  // Circle
  {
    firstName: "Circle Branding Agency",
    secondName: "",
    tectStack: "WORDPRESS",
    description: "",
    // "Created a mobile app (Android & IOS) with React Native and a showcase landing page with Typescript & React for the NFT marketplace.",
    media: {
      firstImage: {
        img: "png/circleLogo.png",
        alt: "Circle LOGO",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://circlexpr.com/",
    },
  },
  // Conventic
  {
    firstName: "CONVENTIC.COM",
    secondName: "",
    tectStack: "GASTBY JS - REACT JS - TYPESCRIPT - EMOTION",
    description: "",
    // "Created a mobile app (Android & IOS) with React Native and a showcase landing page with Typescript & React for the NFT marketplace.",
    media: {
      firstImage: {
        img: "png/conventicLogo2.png",
        alt: "conventicLogo",
      },
      secondImage: {
        img: "png/conventicLogo.png",
        alt: "conventicLogo",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://www.conventic.com/",
    },
  },
  // HOOBank
  {
    firstName: "HooBank",
    secondName: "",
    description: "Landing page for HooBank.",
    tectStack: "TYPESCRIPT - REACT - TAILWIND",
    media: {
      firstImage: {
        img: "svg/hooBankLogo.svg",
        alt: "Hoobank",
      },
      secondImage: {
        img: "png/hoo2.png",
        alt: "Hoobank",
      },
    },
    dataScrollClass: "alexxandria-anim",
    social: {
      link: "https://hoobank2-page.netlify.app/",
      github: "https://github.com/Majd-sufian/HooBank",
    },
  },
  // WYR
  {
    firstName: "WYR Game",
    secondName: "",
    tectStack: "REACT - REDUX -  FIGMA",
    description:
      "WYR is an app that lets users play the “Would You Rather?” game.",
    media: {
      firstImage: {
        img: "png/WYRLogo2.png",
        alt: "Would You Rather game",
      },
      secondImage: {
        img: "png/wyr.png",
        alt: "Would You Rather game",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://would-you-rather-majd-sufyan.netlify.app",
    },
  },
  // News
  {
    firstName: "News",
    secondName: "Reader Ai",
    tectStack: "REACT - JS - ALAN AI - MATERIAL UI",
    description: "A News app, controlled and navigated via voice.",
    media: {
      firstImage: {
        img: "png/alan.png",
        alt: "news reader",
      },
      secondImage: {
        img: "png/news-reader-ai.png",
        alt: "news reader",
      },
    },
    dataScrollClass: "heatrow-anim",
    social: {
      link: "https://news-reader-ai-majd-sufyan.netlify.app/",
      github: "https://github.com/Majd-sufian/News-Reader-Ai",
    },
  },
  // Youtube
  {
    firstName: "Modern Youtube clone",
    secondName: "",
    tectStack: "REACT JS - TYPESCRIPT - MATERIAL UI - RAPID API",
    description: "",
    media: {
      firstImage: {
        img: "png/youtubeLogo.png",
        alt: "Youtube clone",
      },
      secondImage: {
        img: "png/youtube.png",
        alt: "Youtube",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://youtube-clone-modern.netlify.app/",
      github: "https://github.com/Majd-sufian/Modern-Youtube-Clone",
    },
  },
  // Netflix
  {
    firstName: "Modern Netflix clone",
    secondName: "",
    tectStack: "NEXT JS - TYPESCRIPT - REACT - TAILWIND - MOVIE DB API",
    description: "",
    media: {
      firstImage: {
        img: "png/NetflixLogo.png",
        alt: "netflix",
      },
      secondImage: {
        img: "png/netflix.png",
        alt: "netflix logo",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://netflix-clone-v2-umber.vercel.app/",
      github: "https://github.com/Majd-sufian/netflix-clone-v2",
    },
  },
];

const blogs: Array<Blogs> = [
  {
    title: "Google is your best friend, so use it like a pro",
    description:
      "Googling is one of the most important skills for every developer,so let Let me show you how to get better at Googling to get faster results",
    link: "https://dev.to/majdsufian/google-is-your-best-friend-so-use-it-like-a-pro-1o88",
    img: "gif/google.gif",
  },
  {
    title: "One Tool to view your Json better 👨‍💻",
    description:
      "𝐉𝐬𝐨𝐧𝐂𝐫𝐚𝐜𝐤 generates graph diagrams from JSON files and makes them easy to read. Additionally, the generated diagrams can be downloaded as images.",
    link: "https://medium.com/@majdnewsufian/one-tool-to-view-your-json-better-1cce7b3633c3",
    img: "png/json.png",
  },
  {
    title: "One tool can save time when googling ⏲",
    description:
      "Whenever you search online for anything related to programming, if it has an answer to your search, it displays snippets of code or information based on what you have searched.",
    link: "https://medium.com/@majdnewsufian/one-tool-can-save-time-when-googling-2366062430a6",
    img: "png/grepper.png",
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
    link: "https://www.linkedin.com/in/majd-sufyan/",
  },
  {
    icon: "✍️ ",
    name: "HN",
    fullName: "HASHNODE",
    link: "https://majd-sufyan.hashnode.dev/",
  },
  {
    icon: "👨‍💻 ",
    name: "CP",
    fullName: "CODEPEN",
    link: "https://codepen.io/majd-sufian",
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
  blogs,
};
