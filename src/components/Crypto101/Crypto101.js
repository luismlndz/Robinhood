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
          <h3 className="cards-section__card-title">Card Title</h3>
          <p className="cards-section__card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi
          </p>
          <img
            src={wizard}
            alt="mysterious bitcoin person in robes"
            className="cards-section__card-image"
          />
        </div>
        <div className="cards-section__card cards-section__card--middle">
          <h3 className="cards-section__card-title">Card Title</h3>
          <p className="cards-section__card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi
          </p>
          <img
            src={blockchain}
            alt="person interacting with world of blockchain"
            className="cards-section__card-image"
          />
        </div>
        <div className="cards-section__card cards-section__card--right">
          <h3 className="cards-section__card-title">Card Title</h3>
          <p className="cards-section__card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi
          </p>
          <img
            src={security}
            alt="abstract digital transaction with security symbols"
            className="cards-section__card-image"
          />
        </div>
      </section>
    </article>
  );
}
