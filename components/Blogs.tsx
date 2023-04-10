import { useRef } from "react";

// Sub Components
import BlogCard from "./subComponents/BlogCard";

// Framer Motion
import { useInView } from "framer-motion";

// Helpers
import { getAnimationStyle } from "../helpers";

const Blogs: React.FC<{}> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      data-scroll
      data-scroll-offset="35%"
      data-scroll-repeat={true}
      data-scroll-class="blogs-section__bg"
      className="blogs"
    >
      <div ref={ref} style={getAnimationStyle(isInView)} className="blogs__top">
        <h1 className="heading-1">
          <span>Some Of My Latest Blogs</span>
        </h1>
      </div>

      <BlogCard isInView={isInView} />
    </section>
  );
};

export default Blogs;
