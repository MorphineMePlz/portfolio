import webDev from "../images/web-dev.svg";
function Service({ services, onScroll }) {
  return (
    <section className="service" ref={services} onScroll={onScroll}>
      <h2 className="section__title">my services</h2>
      <p className="section__subtitle">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <ul className="cards">
        <li className="card">
          <img src={webDev} className="card__image" alt="dev" />
          <h3 className="card__title">web development</h3>
          <p className="card__text">Blog, E-commerce</p>
        </li>
        <li className="card">
          <img src={webDev} className="card__image" alt="dev" />
          <h3 className="card__title">web development</h3>
          <p className="card__text">Blog, E-commerce</p>
        </li>
        <li className="card">
          <img src={webDev} className="card__image" alt="dev" />
          <h3 className="card__title">web development</h3>
          <p className="card__text">Blog, E-commerce</p>
        </li>
        <li className="card">
          <img src={webDev} className="card__image" alt="dev" />
          <h3 className="card__title">web development</h3>
          <p className="card__text">Blog, E-commerce</p>
        </li>
        <li className="card">
          <img src={webDev} className="card__image" alt="dev" />
          <h3 className="card__title">web development</h3>
          <p className="card__text">Blog, E-commerce</p>
        </li>
        <li className="card">
          <img src={webDev} className="card__image" alt="dev" />
          <h3 className="card__title">web development</h3>
          <p className="card__text">Blog, E-commerce</p>
        </li>
      </ul>
    </section>
  );
}

export default Service;
