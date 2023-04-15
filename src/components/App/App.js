import React from "react";
import "./App.css";

import Header from "../Header";
import Service from "../Service";
import Education from "../Education";
import Work from "../Work";
import Footer from "../Footer";
function App() {
  const header = React.useRef(null);
  const works = React.useRef(null);
  const services = React.useRef(null);
  const about = React.useRef(null);
  const contacts = React.useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        console.log("service");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header
        scroll={scrollToSection}
        header={header}
        work={works}
        services={services}
        about={about}
        contacts={contacts}
      />
      {/* Service */}
      <Service services={services} />
      {/* education */}
      <Education about={about} />
      {/* work */}
      <Work work={works} />
      {/*Footer */}
      <Footer contacts={contacts} />
    </div>
  );
}

export default App;
