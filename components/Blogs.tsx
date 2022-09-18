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
      className="blogs-section"
    >
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="blogs-section__top"
      >
        <h1 className="heading-1">
          <span>Some Of My Latest Blogs</span>
        </h1>
      </div>
    </section>
  );
};

export default Blogs;
