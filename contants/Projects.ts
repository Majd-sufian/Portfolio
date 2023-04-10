import { Project } from "../types/global";

const transition = "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s";

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

export { transition, projects };
