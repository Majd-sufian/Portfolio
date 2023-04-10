import { useMemo } from "react";

// Constants
import { tweets } from "../constants/Tweets";

// Types
import { Tweet } from "../types/global";

const Tweets = () => {
  const reviews = useMemo(() => tweets, []);

  return (
    <>
      <section
        data-scroll
        data-scroll-offset="35%"
        data-scroll-repeat={true}
        data-scroll-class="section-reviews__bg"
        className="section-reviews"
      >
        <div className="section-reviews__top">
          <h1 className="heading-1">
            <span>Mmmm, a little brag </span> <small>😊</small>
          </h1>
          <p className="paragraph paragraph__sub">
            What people are saying about my last portfolio
          </p>
        </div>
        <div className="section-reviews__bottom">
          <div className="section-reviews__bottom-wrapper review-card__anim1">
            {reviews.map((review: Tweet) => (
              <div key={review.id} className="review-card">
                <div className="review-card__top">
                  <div className="review-card__top--left">
                    <p className="review-card__p">{review.name}</p>
                    <h3 className="review-card__h3">{review.userName}</h3>
                  </div>
                  <div className="review-card__top--right">
                    <img src="svg/twitter.svg" alt="twitter icon" />
                  </div>
                </div>
                <div className="review-card__bottom">
                  <h2 className="review-card__h2">{review.reply}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="section-reviews__bottom-wrapper review-card__anim2">
            {reviews.sort().map((review: Tweet) => (
              <div key={review.id} className="review-card">
                <div className="review-card__top">
                  <div className="review-card__top--left">
                    <p className="review-card__p">{review.name}</p>
                    <h3 className="review-card__h3">{review.userName}</h3>
                  </div>
                  <div className="review-card__top--right">
                    <img src="svg/twitter.svg" alt="twitter icon" />
                  </div>
                </div>
                <div className="review-card__bottom">
                  <h2 className="review-card__h2">{review.reply}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tweets;
