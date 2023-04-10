import SocialMediaLinks from "./subComponents/SocialMediaLinks";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Contact: React.FC<{}> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="section-contact"
      >
        <h1 className="heading-1">
          <span>Sold Yet? </span> <small>🤙</small>
        </h1>
        <h2 className="section-contact__h2">
          Thanks for stopping by, I’m currently looking to join a new team of
          creative designers and developers. If you think we might be a good fit
          for one another, give me a
          <a href="tel:+972527239826"> call 📞 &nbsp;</a>
          or send me an
          <a href="majdnewsufian@gmail.com" rel="noopener" target="_blank">
            &nbsp; email 📧
          </a>
          .
        </h2>
      </section>
      {/* Footer Text 2 section & Social media */}
      <section className="section-socials">
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
