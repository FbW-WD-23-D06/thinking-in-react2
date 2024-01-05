import { useState } from "react";

import Menu from "./Navigations/Menu";
import Header from "./Header";
import booksMockData from "../mocks/books";
import { About } from "./About";
import { Footer } from "./Footer";
import { Books } from './Books';

function App() {
  const [books, setBooks] = useState(booksMockData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const selectFilter = (filter) => {
    setSelectedFilter(filter);
    setBooks(
      filter === "All"
        ? booksMockData
        : booksMockData.filter((book) => book.category === filter)
    );
  };

  const filters = ["All", "Design", "Mobile", "DevOps", "Essentials"];

  const tabItems = filters.map((filter) => (
    <li
      className={filter === selectedFilter ? "active" : ""}
      key={filter}
      onClick={() => selectFilter(filter)}
    >
      <a href="#0">{filter}</a>
    </li>
  ));

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

      <Books 
      books={books}
      tabItems={tabItems}
      />

      <About />
      <Footer />
    </div>
  );
}

export default App;
