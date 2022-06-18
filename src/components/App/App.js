import "./App.css";
import webDev from "../../images/web-dev.svg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">
            I’m Aziz Geidar <span className="primary-color">Front-end</span>{" "}
            Developer
          </h1>
          <p className="header__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
          <a className="header__link">Hire me &#8594;</a>
        </div>
      </header>
      <main className="main">
        <section className="service">
          <h2 className="section__title">my services</h2>
          <p className="section__subtitle">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
          <ul className="cards">
            <li className="card">
              <img src={webDev} className="card__image" />
              <h3 className="card__title">web development</h3>
              <p className="card__text">Blog, E-commerce</p>
            </li>
            <li className="card">
              <img src={webDev} className="card__image" />
              <h3 className="card__title">web development</h3>
              <p className="card__text">Blog, E-commerce</p>
            </li>
            <li className="card">
              <img src={webDev} className="card__image" />
              <h3 className="card__title">web development</h3>
              <p className="card__text">Blog, E-commerce</p>
            </li>
            <li className="card">
              <img src={webDev} className="card__image" />
              <h3 className="card__title">web development</h3>
              <p className="card__text">Blog, E-commerce</p>
            </li>
            <li className="card">
              <img src={webDev} className="card__image" />
              <h3 className="card__title">web development</h3>
              <p className="card__text">Blog, E-commerce</p>
            </li>
            <li className="card">
              <img src={webDev} className="card__image" />
              <h3 className="card__title">web development</h3>
              <p className="card__text">Blog, E-commerce</p>
            </li>
          </ul>
        </section>
        <section className="education">
          <h2 className="section__title">Education</h2>
          <p className="section__subtitle">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
          <ul className="education__list">
            <li className="education__list-item">
              <div className="education__box">
                <h3 className="education__box-title">University of Toronto</h3>
                <div className="education__date-box">
                  <p className="education__text">Studen</p>
                  <p className="education__date primary-background">
                    Jan 1016 - Dec 2021
                  </p>
                </div>
              </div>
              <div className="education__box education__box_wide">
                <h3 className="education__box-title">
                  Certificate of web training
                </h3>
                <p className="education__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                  Pulvinar quisque sed amet, nulla nunc. Eleifend sodales
                  posuere fusce tempus etiam et pellentesque. Molestie risus
                  enim neque eget dui.
                </p>
              </div>
            </li>
            <li className="education__list-item">
              <div className="education__box">
                <h3 className="education__box-title">University of Toronto</h3>
                <div className="education__date-box">
                  <p className="education__text">Studen</p>
                  <p className="education__date primary-background ">
                    Jan 1016 - Dec 2021
                  </p>
                </div>
              </div>
              <div className="education__box education__box_wide">
                <h3 className="education__box-title">
                  Certificate of web training
                </h3>
                <p className="education__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                  Pulvinar quisque sed amet, nulla nunc. Eleifend sodales
                  posuere fusce tempus etiam et pellentesque. Molestie risus
                  enim neque eget dui.
                </p>
              </div>
            </li>
            <li className="education__list-item">
              <div className="education__box">
                <h3 className="education__box-title">University of Toronto</h3>
                <div className="education__date-box">
                  <p className="education__text">Studen</p>
                  <p className="education__date primary-background ">
                    Jan 1016 - Dec 2021
                  </p>
                </div>
              </div>
              <div className="education__box education__box_wide">
                <h3 className="education__box-title">
                  Certificate of web training
                </h3>
                <p className="education__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                  Pulvinar quisque sed amet, nulla nunc. Eleifend sodales
                  posuere fusce tempus etiam et pellentesque. Molestie risus
                  enim neque eget dui.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
