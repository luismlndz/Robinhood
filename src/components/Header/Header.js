import "./Header.scss";
import logo from "../../assets/images/Robinhood-Logo.png";
import chevron from "../../assets/icons/expand_more_black_24dp.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src={logo} alt="robinhood logo" className="header__logo" />
        <div className="header__nav-item">
          <h4 className="header__nav-text">Products</h4>
          <img className="header__nav-icon" src={chevron} alt="chevron icon" />
        </div>
        <div className="header__nav-item">
          <h4 className="header__nav-text">Learn</h4>
          <img className="header__nav-icon" src={chevron} alt="chevron icon" />
        </div>
        <div className="header__nav-item">
          <h4 className="header__nav-text">Support</h4>
        </div>
        <div className="header__nav-item">
          <h4 className="header__nav-text">Who we are</h4>
          <img className="header__nav-icon" src={chevron} alt="chevron icon" />
        </div>
      </nav>
      <div className="header__button-container">
        <button className="header__button">Log In</button>
        <button className="header__button header__button--color">
          Sign Up
        </button>
      </div>
    </header>
  );
}
