function Work({ work, onScroll }) {
  return (
    <section className="work" ref={work} onScroll={onScroll}>
      <h2 className="section__title">Work History</h2>
      <p className="section__subtitle">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <ul className="work__list">
        <li className="work__list-item">
          <div className="work__box">
            <h3 className="work__box-title">University of Toronto</h3>
            <div className="work__date-box">
              <p className="work__text">Studen</p>
              <p className="work__date primary-background">
                Jan 1016 - Dec 2021
              </p>
            </div>
          </div>
          <div className="work__box work__box_wide">
            <h3 className="work__box-title">Certificate of web training</h3>
            <p className="work__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
        </li>
        <li className="work__list-item">
          <div className="work__box">
            <h3 className="work__box-title">University of Toronto</h3>
            <div className="work__date-box">
              <p className="work__text">Studen</p>
              <p className="work__date primary-background">
                Jan 1016 - Dec 2021
              </p>
            </div>
          </div>
          <div className="work__box work__box_wide">
            <h3 className="work__box-title">Certificate of web training</h3>
            <p className="work__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
        </li>
        <li className="work__list-item">
          <div className="work__box">
            <h3 className="work__box-title">University of Toronto</h3>
            <div className="work__date-box">
              <p className="work__text">Studen</p>
              <p className="work__date primary-background">
                Jan 1016 - Dec 2021
              </p>
            </div>
          </div>
          <div className="work__box work__box_wide">
            <h3 className="work__box-title">Certificate of web training</h3>
            <p className="work__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Work;
