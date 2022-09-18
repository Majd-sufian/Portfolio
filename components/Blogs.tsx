import { useRef } from "react";
import { useInView } from "framer-motion";

const Blogs: React.FC<{}> = ({}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      data-scroll
      data-scroll-offset="35%"
      data-scroll-repeat={true}
      data-scroll-class="blogs-section__bg"
      className="blogs"
    >
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="blogs__top"
      >
        <h1 className="heading-1">
          <span>Some Of My Latest Blogs</span>
        </h1>
      </div>
      <div
        className="blogs__cards"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="blogs__card">
          <img src="gif/google.gif" />
          <div className="blogs__card-infos">
            <h1>Google is your best friend, so use it like a pro</h1>
            <p>
              Googling is one of the most important skills for every developer,
              so let Let me show you how to get better at Googling to get faster
              results
            </p>
            <div className="blogs__button">
              <button
                className="btn-hover color-7"
                onClick={() =>
                  window.open(
                    "https://dev.to/majdsufian/google-is-your-best-friend-so-use-it-like-a-pro-1o88",
                    "_blank"
                  )
                }
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
