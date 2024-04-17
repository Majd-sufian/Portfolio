import { useRef } from "react";

// Framer Motion
import { useInView } from "framer-motion";

// Sub Components
import { SocialMediaLinks } from "./subComponents";

// Helpers
import { getAnimationStyle } from "../helpers";

const Contact: React.FC<{}> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section
        ref={ref}
        style={getAnimationStyle(isInView)}
        className="section-contact"
      >
        <h1 className="heading-1">
          <span>Sold Yet? </span> <small>🤙</small>
        </h1>
        <h2 className="section-contact__h2">
          Thanks for stopping by, I’m currently looking to join a new team of
          creative designers and developers. If you think we might be a good fit
          for one another, give me a
          <a href="tel:+4917620481700"> call 📞 &nbsp;</a>
          or send me an
          <a href="majdnewsufian@gmail.com" rel="noopener" target="_blank">
            &nbsp; email 📧
          </a>
          .
        </h2>
      </section>

      {/* Footer Text 2 section & Social media */}
      <section className="section-socials" style={getAnimationStyle(isInView)}>
        <h1 className="heading-1">
          <span>Dont be a stranger!</span> <small>👋</small>
        </h1>
        <p className="paragraph">Connect with me online</p>
        <div className="section-socials--links">
          <SocialMediaLinks shortOrFull="full" />
        </div>
      </section>
    </>
  );
};

export default Contact;
