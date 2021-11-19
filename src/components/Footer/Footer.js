import "./Footer.scss";
import footer from "../../assets/images/footer.png";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer__top">
        <p class="footer__top-texte">
          Content is provided for informational purposes only, does not
          constitute tax or investment advice, and is not a recommendation for
          any security or trading strategy. All investments involve risk,
          including the possible loss of capital. Past performance does not
          guarantee future results.
        </p>
        <p>
          Options trading entails significant risk and is not appropriate for
          all customers. Customers must read and understand the Characteristics
          and Risks of Standardized Options before engaging in any options
          trading strategies. Supporting documentation for any claims, if
          applicable, will be furnished upon request.
        </p>
      </div>
      <div
        class="footer__bottom"
        style={{ backgroundImage: `url(${footer})` }}
      />
    </footer>
  );
}
