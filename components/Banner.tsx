import SocialMediaLinks from "./subComponents/SocialMediaLinks";
import Speaker from "./subComponents/Speaker";

const Banner: React.FC<{}> = ({}) => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header__hero">
          <div className="header__hero--heading">
            <span>
              Turning <span className="animated-text">fantisy ideas</span> into{" "}
            </span>
            <br />
            <span>real life </span>
            <span className="animated-text">products </span>
            <br />
            <span>
              is my <span className="animated-text">calling.</span>{" "}
            </span>
          </div>
          <a
            data-scroll-to
            className="header__hero--cta"
            href="#sectionProjects"
          >
            VIEW PROJECTS
          </a>
        </div>
      </header>
      <div className="header__footer">
        <div className="header__footer--left">
          <Speaker />
        </div>
        <div className="header__footer--right">
          <SocialMediaLinks shortOrFull="short" />
        </div>
      </div>
    </div>
  );
};

export default Banner;