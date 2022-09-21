import Head from "next/head";

const PortfolioHead: React.FC<{}> = ({}) => {
  return (
    <Head>
      {/* TODO: ADD FAVICON§ */}
      <link href="/" rel="canonical" />
      <meta name="theme-color" content="#10101A" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#10101A" />
      <title>Majd Sufyan 🚀 &mdash; Frontend Software Devloper</title>
      <meta
        name="description"
        content="I'm a Front End Software Developer and turning fantisy ideas into real life products is my calling."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Majd Sufyan 🚀 &mdash; Frontend Software Devloper"
      />
      {/* TODO: CHANGE content url */}
      <meta property="og:url" content="majd-sufyan.site" />
      <meta property="og:image" content="webp/preview-image.png" />
      <meta
        property="og:description"
        content="I'm a Front End Software Developer and turning fantisy ideas into real life products is my calling."
      />
      <meta
        name="twitter:title"
        content="Majd Sufyan 🚀 &mdash; Frontend Software Devloper"
      />
      <meta
        name="twitter:description"
        content="I'm a Front End Software Developer and turning fantisy ideas into real life products is my calling."
      />
      <meta name="twitter:image" content="webp/preview-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="/" />
    </Head>
  );
};

export default PortfolioHead;
