import "./CryptoBenefits.scss";
import purse from "../../assets/images/purse.svg";
import cloud from "../../assets/images/cloud_lock.svg";
import hands from "../../assets/images/heart-hands.svg";

export default function CryptoBenefits() {
  return (
    <article className="cards-section-2">
      <header className="cards-section-2__header">
        <h2 className="cards-section-2__title">Benefits of Crypto</h2>
        <h4 className="cards-section-2__subtitle">
          Why and how to take control of your finances.
        </h4>
      </header>
      <section className="cards-section-2__cards-container">
        <div className="cards-section-2__card">
          <h3 className="cards-section-2__card-title">Taking control</h3>
          <p className="cards-section-2__card-text">
            Crypto helps you create intentional plans with where your money is
            going and how to use it for things that are important to you.
          </p>
          <div className="cards-section-2__card-image-container">
            <img
              src={purse}
              alt="mysterious bitcoin person in robes"
              className="cards-section-2__card-image"
            />
          </div>
        </div>
        <div className="cards-section-2__card cards-section-2__card--middle">
          <h3 className="cards-section-2__card-title">Security and privacy</h3>
          <p className="cards-section-2__card-text">
            With us your Crypto wallet is in a safe and private place.
          </p>
          <div className="cards-section-2__card-image-container">
            <img
              src={cloud}
              alt="person interacting with world of blockchain"
              className="cards-section-2__card-image"
            />
          </div>
        </div>
        <div className="cards-section-2__card cards-section-2__card--right">
          <h3 className="cards-section-2__card-title">Investment growth</h3>
          <p className="cards-section-2__card-text">
            Build a foundation for your future wealth.
          </p>
          <div className="cards-section-2__card-image-container">
            <img
              src={hands}
              alt="abstract digital transaction with security symbols"
              className="cards-section-2__card-image"
            />
          </div>
        </div>
      </section>
    </article>
  );
}
