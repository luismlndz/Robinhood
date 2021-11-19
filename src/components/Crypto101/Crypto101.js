import "./Crypto101.scss";
import wizard from "../../assets/images/crypto_wizard.svg";
import blockchain from "../../assets/images/blockchain.svg";
import security from "../../assets/images/security.svg";

export default function Crypto101() {
  return (
    <article className="cards-section">
      <header className="cards-section__header">
        <h2 className="cards-section__title">Cryptocurrency 101</h2>
        <h4 className="cards-section__subtitle">Quick Crypto Knowledge.</h4>
      </header>
      <section className="cards-section__cards-container">
        <div className="cards-section__card">
          <h3 className="cards-section__card-title">What is crypto?</h3>
          <p className="cards-section__card-text">
            Crypto is a digital way of exchangng value, like money. It's a
            digital asset used for payments and investments.
          </p>
          <div className="cards-section__card-image-container">
            <img
              src={wizard}
              alt="mysterious bitcoin person in robes"
              className="cards-section__card-image"
            />
          </div>
        </div>
        <div className="cards-section__card cards-section__card--middle">
          <h3 className="cards-section__card-title">What is the blockchain?</h3>
          <p className="cards-section__card-text">
            Blockchain technology is the way public records of crypto ownership
            are stored and safely updated in many places at once.
          </p>
          <div className="cards-section__card-image-container">
            <img
              src={blockchain}
              alt="person interacting with world of blockchain"
              className="cards-section__card-image"
            />
          </div>
        </div>
        <div className="cards-section__card cards-section__card--right">
          <h3 className="cards-section__card-title">
            Is it safe to invest in?
          </h3>
          <p className="cards-section__card-text">
            Yes! It's fast, simple and safe, especially for cross border
            payments to friends or family in another country.
          </p>
          <div className="cards-section__card-image-container">
            <img
              src={security}
              alt="abstract digital transaction with security symbols"
              className="cards-section__card-image"
            />
          </div>
        </div>
      </section>
    </article>
  );
}
