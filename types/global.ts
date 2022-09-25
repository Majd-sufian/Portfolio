export interface Project {
  tectStack: string;
  media: {
    firstImage: {
      img: string;
      alt: string;
    };
    secondImage: {
      img: string;
      alt: string;
    };
  };
  description: string;
  dataScrollClass: string;
  firstName: string;
  secondName: string;
  social: {
    link: string;
    github: string;
  };
}

export interface Blogs {
  title: string;
  description: string;
  link: string;
  img: string;
}
