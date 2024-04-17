import { Project } from "../types/global";

const clientsProjects: Array<Project> = [
  // Rocket Landing - Clients
  {
    firstName: "Rocket Tutor - Landing Page",
    tectStack: "NEXT - TS",
    description:
      "Landing page for Rocket Tutor, a platform that connects students with tutors.",
    media: {
      firstImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/rocket.png",
        alt: "Rocket LOGO",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://rockettutor.de/",
    },
  },
  // Rocket Tutor - Students
  {
    firstName: "Rocket Tutor - Students Platform",
    tectStack: "NODE - REACT - TS - MONOGDB - PRISMA - AWS",
    description:
      "Students platform that connects students with tutors and enables them to book lessons, view their progress, and more.",
    media: {
      firstImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/rocket-student.png",
        alt: "Rokcet LOGO",
      },
      secondImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/rocket-student-2.png",
        alt: "Rokcet LOGO",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://app.rockettutor.de/",
    },
  },
  // Rocket Teacher - Clients
  {
    firstName: "Rocket Tutor - Teacher Platform",
    tectStack: "NODE - REACT - TS - MONOGDB - PRISMA - AWS",
    description:
      "Teacher platform that connects teachers with students and enables them to manage their lessons, assign homework, and more.",
    media: {
      firstImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/rocket-teacher.png",
        alt: "Rocket LOGO",
      },
      secondImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/rocket-teacher-2.png",
        alt: "Rocket LOGO",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://app.rockettutor.de/",
    },
  },
  // AWAKE Mobility - Clients
  {
    firstName: "AWAKE Mobility",
    secondName: "",
    tectStack: "NODE - MONGODB - REACT NATIVE - AWS",
    description:
      "Mobile application (Android - IOS) for bus drivers to enable them to report faults and accidents in real-time to AWAKE Mobility Dashboard",
    media: {
      firstImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/awakeMobility.png",
        alt: "Awake App",
      },
      secondImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/awakeMobility2.png",
        alt: "Awake App",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://www.awakemobility.de/use-case-better-availability-planning",
    },
  },
  // WYR - Clients
  {
    firstName: "WYR Game",
    secondName: "",
    tectStack: "REACT - REDUX -  FIGMA",
    description:
      "WYR is an app that lets users play the “Would You Rather?” game.",
    media: {
      firstImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/wyr.png",
        alt: "Would You Rather game",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://would-you-rather-majd-sufyan.netlify.app",
    },
  },
  // News - Clients
  {
    firstName: "News",
    secondName: "Reader Ai",
    tectStack: "REACT - ALAN AI - MATERIAL UI",
    description: "A News app, controlled and navigated via voice.",
    media: {
      firstImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/news-reader-ai.png",
        alt: "news reader",
      },
    },
    dataScrollClass: "heatrow-anim",
    social: {
      link: "https://news-reader-ai-majd-sufyan.netlify.app/",
      github: "https://github.com/Majd-sufian/News-Reader-Ai",
    },
  },
  // Circle - Clients
  {
    firstName: "Circle Branding Agency",
    secondName: "",
    tectStack: "WORDPRESS",
    description: "Home page for Circle Branding Agency.",
    media: {
      firstImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/circle.png",
        alt: "Circle LOGO",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://circlexpr.com/",
    },
  },
  // invikoo - Clients
  {
    firstName: "Invikoo.de",
    tectStack: "NODE - NEXT - MONOGDB - AWS - REACT - STRIPE",
    description:
      "A web application that generates a Book for Nutrition Plans with a push button based on the user's status (health, active level, age, weight, medical history, and more",
    media: {
      firstImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/invikoo.png",
        alt: "Invikoo LOGO",
      },
      secondImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/invikoo2.png",
        alt: "Invikoo LOGO",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://invikoo.de/",
    },
  },
];

const personalProjects: Array<Project> = [
  // Three JS - Personal
  {
    firstName: "3D Products Design",
    secondName: "",
    tectStack: "VITE - REACT JS - TYPESCRIPT - OPEN AI API - DALL·E 2",
    description:
      "An application that lets users design their own t-shirts in 3D, add images, and generate custom designs with AI.",
    media: {
      firstImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/3dProducts.gif",
        alt: "3D Product Design/Showcase",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://threejs-products.com",
    },
  },
  // NFT - Personal
  {
    firstName: "NFT Market Place",
    secondName: "",
    tectStack: "REACT NATIVE - REACT JS - TYPESCRIPT - TAILWIND - EXPO",
    description:
      "Created a mobile app (Android & IOS) with React Native and a showcase landing page with Typescript & React for the NFT marketplace.",
    media: {
      firstImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/nft.png",
        alt: "Nft clone",
      },
      secondImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/nft2.png",
        alt: "Nft",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://nft-markeplace.netlify.app/",
      github: "https://github.com/Majd-sufian/NFT-market-landing-page",
    },
  },
  // HOOBank - Personal
  {
    firstName: "HooBank",
    secondName: "",
    description: "Landing page for HooBank.",
    tectStack: "TYPESCRIPT - REACT - TAILWIND",
    media: {
      firstImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/hoo2.png",
        alt: "Hoobank",
      },
    },
    dataScrollClass: "alexxandria-anim",
    social: {
      link: "https://hoobank2-page.netlify.app/",
      github: "https://github.com/Majd-sufian/HooBank",
    },
  },
  // Youtube - Personal
  {
    firstName: "Modern Youtube clone",
    secondName: "",
    tectStack: "REACT JS - TYPESCRIPT - MATERIAL UI - RAPID API",
    description: "",
    media: {
      firstImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/youtube.png",
        alt: "Youtube clone",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://youtube-clone-modern.netlify.app/",
      github: "https://github.com/Majd-sufian/Modern-Youtube-Clone",
    },
  },
  // Netflix - Personal
  {
    firstName: "Modern Netflix clone",
    secondName: "",
    tectStack: "NEXT JS - TYPESCRIPT - REACT - TAILWIND - MOVIE DB API",
    description: "",
    media: {
      firstImage: {
        img: "https://me-portfolio.s3.eu-central-1.amazonaws.com/netflix.png",
        alt: "netflix",
      },
    },
    dataScrollClass: "safarika-anim",
    social: {
      link: "https://netflix-clone-v2-umber.vercel.app/",
      github: "https://github.com/Majd-sufian/netflix-clone-v2",
    },
  },
];

// const projects: Array<Project> = [
//   // Three JS - Personal
//   {
//     firstName: "3D Products Design",
//     secondName: "",
//     tectStack: "VITE - REACT JS - TYPESCRIPT - OPEN AI API - DALL·E 2",
//     description:
//       "An application that lets users design their own t-shirts in 3D, add images, and generate custom designs with AI.",
//     media: {
//       firstImage: {
//         img: "gif/3dProducts.gif",
//         alt: "3D Product Design/Showcase",
//       },
//     },
//     dataScrollClass: "safarika-anim",
//     social: {
//       link: "https://threejs-products.com",
//     },
//   },
//   // NFT - Personal
//   {
//     firstName: "NFT Market Place",
//     secondName: "",
//     tectStack: "REACT NATIVE - REACT JS - TYPESCRIPT - TAILWIND - EXPO",
//     description:
//       "Created a mobile app (Android & IOS) with React Native and a showcase landing page with Typescript & React for the NFT marketplace.",
//     media: {
//       firstImage: {
//         img: "png/Nft.png",
//         alt: "Nft clone",
//       },
//       secondImage: {
//         img: "png/Nft2.png",
//         alt: "Nft",
//       },
//     },
//     dataScrollClass: "safarika-anim",
//     social: {
//       link: "https://nft-markeplace.netlify.app/",
//       github: "https://github.com/Majd-sufian/NFT-market-landing-page",
//     },
//   },
//   // Circle - Clients
//   {
//     firstName: "Circle Branding Agency",
//     secondName: "",
//     tectStack: "WORDPRESS",
//     description: "Home page for Circle Branding Agency.",
//     media: {
//       firstImage: {
//         img: "png/circleLogo.png",
//         alt: "Circle LOGO",
//       },
//     },
//     dataScrollClass: "safarika-anim",
//     social: {
//       link: "https://circlexpr.com/",
//     },
//   },
//   // AWAKE Mobility - Clients
//   {
//     firstName: "AWAKE Mobility",
//     secondName: "",
//     tectStack: "WIX",
//     description: "Home Page for AWAKE Mobility.",
//     media: {
//       firstImage: {
//         img: "png/awakeMobility2.jpeg",
//         alt: "Circle LOGO",
//       },
//     },
//     dataScrollClass: "safarika-anim",
//     social: {
//       link: "https://www.awakemobility.de/",
//     },
//   },
//   // Conventic - Clients
//   {
//     firstName: "CONVENTIC.COM",
//     secondName: "",
//     tectStack: "GASTBY JS - REACT JS - TYPESCRIPT - EMOTION",
//     description: "Home page for Conventic.",
//     media: {
//       firstImage: {
//         img: "png/conventicLogo2.png",
//         alt: "conventicLogo",
//       },
//       secondImage: {
//         img: "png/conventicLogo.png",
//         alt: "conventicLogo",
//       },
//     },
//     dataScrollClass: "safarika-anim",
//     social: {
//       link: "https://www.conventic.com/",
//     },
//   },
//   // HOOBank - Personal
//   {
//     firstName: "HooBank",
//     secondName: "",
//     description: "Landing page for HooBank.",
//     tectStack: "TYPESCRIPT - REACT - TAILWIND",
//     media: {
//       firstImage: {
//         img: "svg/hooBankLogo.svg",
//         alt: "Hoobank",
//       },
//       secondImage: {
//         img: "png/hoo2.png",
//         alt: "Hoobank",
//       },
//     },
//     dataScrollClass: "alexxandria-anim",
//     social: {
//       link: "https://hoobank2-page.netlify.app/",
//       github: "https://github.com/Majd-sufian/HooBank",
//     },
//   },
//   // WYR - Clients
//   {
//     firstName: "WYR Game",
//     secondName: "",
//     tectStack: "REACT - REDUX -  FIGMA",
//     description:
//       "WYR is an app that lets users play the “Would You Rather?” game.",
//     media: {
//       firstImage: {
//         img: "png/WYRLogo2.png",
//         alt: "Would You Rather game",
//       },
//       secondImage: {
//         img: "png/wyr.png",
//         alt: "Would You Rather game",
//       },
//     },
//     dataScrollClass: "safarika-anim",
//     social: {
//       link: "https://would-you-rather-majd-sufyan.netlify.app",
//     },
//   },
//   // News - Clients
//   {
//     firstName: "News",
//     secondName: "Reader Ai",
//     tectStack: "REACT - JS - ALAN AI - MATERIAL UI",
//     description: "A News app, controlled and navigated via voice.",
//     media: {
//       firstImage: {
//         img: "png/alan.png",
//         alt: "news reader",
//       },
//       secondImage: {
//         img: "png/news-reader-ai.png",
//         alt: "news reader",
//       },
//     },
//     dataScrollClass: "heatrow-anim",
//     social: {
//       link: "https://news-reader-ai-majd-sufyan.netlify.app/",
//       github: "https://github.com/Majd-sufian/News-Reader-Ai",
//     },
//   },
//   // Youtube - Personal
//   {
//     firstName: "Modern Youtube clone",
//     secondName: "",
//     tectStack: "REACT JS - TYPESCRIPT - MATERIAL UI - RAPID API",
//     description: "",
//     media: {
//       firstImage: {
//         img: "webp/youtube.webp",
//         alt: "Youtube clone",
//       },
//       secondImage: {
//         img: "png/youtube.png",
//         alt: "Youtube",
//       },
//     },
//     dataScrollClass: "safarika-anim",
//     social: {
//       link: "https://youtube-clone-modern.netlify.app/",
//       github: "https://github.com/Majd-sufian/Modern-Youtube-Clone",
//     },
//   },
//   // Netflix - Personal
//   {
//     firstName: "Modern Netflix clone",
//     secondName: "",
//     tectStack: "NEXT JS - TYPESCRIPT - REACT - TAILWIND - MOVIE DB API",
//     description: "",
//     media: {
//       firstImage: {
//         img: "png/NetflixLogo.png",
//         alt: "netflix",
//       },
//       secondImage: {
//         img: "png/netflix.png",
//         alt: "netflix logo",
//       },
//     },
//     dataScrollClass: "safarika-anim",
//     social: {
//       link: "https://netflix-clone-v2-umber.vercel.app/",
//       github: "https://github.com/Majd-sufian/netflix-clone-v2",
//     },
//   },
// ];

export type ProjectType = "Clients" | "Personal";

const projectTypes: ProjectType[] = ["Clients", "Personal"];

export { projectTypes, clientsProjects, personalProjects };
