const Blogs: React.FC<{}> = ({}) => {
  return (
    <section
      data-scroll
      data-scroll-offset="35%"
      data-scroll-repeat={true}
      data-scroll-class="blogs-section__bg"
      className="blogs-section"
    >
      <div className="blogs-section__top">
        <h1 className="heading-1">
          <span>Some Of My Latest Blogs</span>
        </h1>
      </div>
    </section>
  );
};

export default Blogs;
