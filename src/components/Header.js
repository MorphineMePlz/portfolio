import React from "react";
// import myImg from "../me.jpeg";
import poligon from "../images/header-icons/1.svg"

function Header({ scroll, header, work, about, services, contacts, onScroll }) {
  const paths = [
    "Home",
    "Works",
    "Services",
    "About",
    "Contact",
  ];
  // const [activeIndex, setActiveIndex] = React.useState(0);

  // const onClickPath = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <header className="header" ref={header} onScroll={onScroll}>
      <nav className="header__menu">
      <ul className="header__menu-list">
        {paths.map((value,index ) => (
          <li className='header__menu-item' key={index}>
            <p className='header__menu-link' >
            {value}
            </p>
          </li>
        ))}
      </ul>
      </nav>
      <div className="header__container">
        <img src={poligon} className="poligon" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <div className="header__box">
        <h1 className="header__title">
          I’m Aziz Geidar <span className="primary-color">Front-end</span>{" "}
          Developer
        </h1>
        <p className="header__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <a href="https://www.linkedin.com/in/aziz-geidar-0a0147182/" className="header__link" target="_blank" rel="noreferrer"> Hire me &#8594;</a>
        </div>
        <div className="header__box-image">
          {/* <img src={myImg} alt="me" className='header__image'/> */}
        </div>
      </div>
    </header>
  );
}

export default Header;