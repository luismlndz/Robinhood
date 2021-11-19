import "./LearnMore.scss";
import chevron from "../../assets/icons/chevron_right.png";

export default function LearnMore() {
  return (
    <article className="learn-more">
      <h2 className="learn-more__title">There's more to learn</h2>
      <section className="learn-more__table">
        <div className="learn-more__item">
          <p className="learn-more__table-text">
            Text text text text text text
          </p>
          <img
            src={chevron}
            alt="right arrow menu icon"
            className="learn-more__table-icon"
          />
        </div>
        <div className="learn-more__item">
          <p className="learn-more__table-text">
            Text text text text text text
          </p>
          <img
            src={chevron}
            alt="right arrow menu icon"
            className="learn-more__table-icon"
          />
        </div>
        <div className="learn-more__item">
          <p className="learn-more__table-text">
            Text text text text text text
          </p>
          <img
            src={chevron}
            alt="right arrow menu icon"
            className="learn-more__table-icon"
          />
        </div>
        <div className="learn-more__item">
          <p className="learn-more__table-text">
            Text text text text text text
          </p>
          <img
            src={chevron}
            alt="right arrow menu icon"
            className="learn-more__table-icon"
          />
        </div>
        <div className="learn-more__item">
          <p className="learn-more__table-text">
            Text text text text text text
          </p>
          <img
            src={chevron}
            alt="right arrow menu icon"
            className="learn-more__table-icon"
          />
        </div>
      </section>
      <button>See Crypto Articles</button>
    </article>
  );
}
