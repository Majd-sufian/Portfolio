import { blogs } from "../../contants";
import { getAnimationStyle } from "../../helpers";

interface BlogCardProps {
  isInView: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ isInView }) => {
  return (
    <div className="blogs__cards" style={getAnimationStyle(isInView)}>
      {blogs.map(({ title, img, link }) => (
        <div key={title} className="card">
          <div className="card__header">
            <img src={img} alt="card__image" className="card__image" />
          </div>
          <div className="card__body">
            <h4 className="blog__title">{title}</h4>
            <div className="card__button">
              <button
                className="btn-hover color-7"
                onClick={(): void => {
                  window.open(link, "_blank");
                }}
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
