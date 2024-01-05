import { BookList } from "./BookList";
import { BooksFilter } from "./BookFilter";

export function Books({books, tabItems, selectedFilter}) {

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