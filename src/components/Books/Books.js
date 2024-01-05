import { BookList } from "./BookList";
import { BooksFilter } from "./BookFilter";
import { useState } from "react";
import booksMockData from "../../mocks/books.js";

export function Books() {
  const [books, setBooks] = useState(booksMockData);
  const [selectedFilter, setSelectedFilter] = useState("All");

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
    <section id="books">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Books</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-pills text-center">{tabItems}</ul>
            </div>
          </div>
          <BookList books={books}/>
        </div>
      </section>
  )
}