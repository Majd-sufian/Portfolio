import Head from "next/head";

const PortfolioHead: React.FC<{}> = ({}) => {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        Majd Sufyan | Front-End Developer specializing in React and Next.js
      </title>
      <meta
        name="description"
        content="I am Majd Sufyan a front-end developer specializing in React and Next.js. With a passion for turning fantastic ideas into reality, I bring creativity and expertise to every project."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Majd Sufyan | Front-End Developer specializing in React and Next.js"
      />
      <meta property="og:url" content="https://majd-sufyan.site" />
      <meta
        property="og:image"
        content="https://github.com/Majd-sufian/Portfolio/blob/main/public/png/portfolio.png?raw=true"
      />
      <meta
        property="og:description"
        content="I am Majd Sufyan is a front-end developer specializing in React and Next.js. With a passion for turning fantastic ideas into reality, I bring creativity and expertise to every project."
      />
      <meta
        name="twitter:title"
        content="Majd Sufyan | Front-End Developer specializing in React and Next.js"
      />
      <meta
        name="twitter:description"
        content="I am Majd Sufyan is a front-end developer specializing in React and Next.js. With a passion for turning fantastic ideas into reality, I bring creativity and expertise to every project."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://github.com/Majd-sufian/Portfolio/blob/main/public/png/portfolio.png?raw=true"
      />
    </Head>
  );
};

export default PortfolioHead;
