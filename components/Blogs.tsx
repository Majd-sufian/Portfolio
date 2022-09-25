import { useRef } from "react";
import { useInView } from "framer-motion";
import { blogs } from "../contants";

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
        {blogs.map(({ title, description, img, link }) => (
          <div className="blogs__card">
            <img src={img} />
            <div className="blogs__card-infos">
              <h1>{title}</h1>
              <p>
                {description}
                <div className="blogs__button">
                  <button
                    className="btn-hover color-7"
                    onClick={(): void => {
                      window.open(link, "_blank");
                    }}
                  >
                    READ MORE
                  </button>
                </div>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
