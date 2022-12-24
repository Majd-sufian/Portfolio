import useSwr from "swr";
import { Ireply } from "../pages/api/tweets";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Tweets = () => {
  const { data: reviews, error } = useSwr("/api/tweets", fetcher);

  return (
    <>
      {!error && (
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
              {reviews?.data.map((review: Ireply) => (
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
              {reviews?.data.sort().map((review: Ireply) => (
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
      )}
    </>
  );
};

export default Tweets;
