import "./Header.scss";
import logo from "../../assets/images/Robinhood-Logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="robinhood logo" className="header__logo" />
      <section className="header__nav">
        <div className="header__nav-line"></div>
        <div className="header__nav-line"></div>
      </section>
    </header>
  );
}
