import "./Hero.scss";
import error from "../../assets/icons/error_outline_black_24dp.svg";
import bitcoin from "../../assets/images/bitcoin-on-phone.svg.png";
import { Link } from "react-router-dom";

export default function Hero(props) {
  return (
    <>
      <section className="hero">
        <h3 className="hero__title">Cryptocurrency</h3>
        <section className="hero__flex-container">
          <div className="hero__content">
            <h2 className="hero__subtitle">A new kind of money</h2>
            <p className="hero__text">
              What you need to know about cryptocurrency
            </p>
            <Link to="/howitworks">
              <button className="hero__button">See how it works</button>
            </Link>
            <div className="hero__disclosure">
              <img
                src={error}
                alt="upside down error icon aka info symbol"
                className="hero__disclosure-icon"
              />
              <p className="hero__disclosure-text">Crypto Disclosure</p>
            </div>
          </div>
          <div className="hero__image-container">
            <img src={bitcoin} alt="bitcoins on a touch screen phone" />
          </div>
        </section>
      </section>
    </>
  );
}
