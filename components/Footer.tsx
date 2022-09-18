const Footer: React.FC<{}> = ({}) => {
  return (
    <footer className="footer">
      {/* TODO: ADD LOGO */}
      {/* <img src="/" alt="devloped by Majd" /> */}
      <div className="footer__socials">
        <a
          href="https://github.com/Majd-sufian/HooBank"
          target="_blank"
          rel="noopener"
        >
          <img src="svg/github.svg" alt="github logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
