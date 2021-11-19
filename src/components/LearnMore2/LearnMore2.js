import "./LearnMore2.scss";
import chevron from "../../assets/icons/chevron_right.png";

export default function LearnMore2() {
  return (
    <article className="learn-more-2">
      <h2 className="learn-more-2__title">There's more to learn</h2>
      <section className="learn-more-2__table">
        <div className="learn-more-2__item">
          <p className="learn-more-2__table-text">
            How does the blockchain change the investment world?
          </p>
          <img
            src={chevron}
            alt="right arrow menu icon"
            className="learn-more-2__table-icon"
          />
        </div>
        <div className="learn-more-2__item">
          <p className="learn-more-2__table-text">How safe is Crypto?</p>
          <img
            src={chevron}
            alt="right arrow menu icon"
            className="learn-more-2__table-icon"
          />
        </div>
        <div className="learn-more-2__item">
          <p className="learn-more-2__table-text">
            How can Crypto help you for your retirement?
          </p>
          <img
            src={chevron}
            alt="right arrow menu icon"
            className="learn-more-2__table-icon"
          />
        </div>
        <div className="learn-more-2__item">
          <p className="learn-more-2__table-text">
            How is the blockchain democratizing money?
          </p>
          <img
            src={chevron}
            alt="right arrow menu icon"
            className="learn-more-2__table-icon"
          />
        </div>
      </section>
      <button className="learn-more-2__button">See Crypto Articles</button>
    </article>
  );
}
