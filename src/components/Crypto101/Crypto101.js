import "./Crypto101.scss";

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
          <p lassName="cards-section__card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!
          </p>
        </div>
        <div className="cards-section__card">
          <h3 className="cards-section__card-title">Card Title</h3>
          <p lassName="cards-section__card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!
          </p>
        </div>
        <div className="cards-section__card">
          <h3 className="cards-section__card-title">Card Title</h3>
          <p lassName="cards-section__card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!
          </p>
        </div>
      </section>
    </article>
  );
}
