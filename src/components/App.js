import { useState } from "react";

import Menu from "./Navigations/Menu";
import Header from "./Header";
import { About } from "./About";
import { Footer } from "./Footer";
import { Books } from './Books/Books';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="page-wrap">
      <Menu
        pageWrapId="page-wrap"
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              Library
            </a>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li className="hidden-xs">
              <a href="#about">About us</a>
            </li>
            <li>
              <button onClick={toggleMenu} className="btn btn-lg btn-outline">
                <i className="fa fa-graduation-cap" /> <span>Training</span>
              </button>

            </li>
          </ul>
        </div>
      </nav>

      <Header title="By React" />

      <Books />

      <About />
      <Footer />
    </div>
  );
}

export default App;
