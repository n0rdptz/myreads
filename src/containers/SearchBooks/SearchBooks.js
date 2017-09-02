import React, { Component } from 'react';
import Book from '../../components/Book/Book';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../../utils/BooksAPI';
import searchTerms from '../../configs/searchTerms';

class SearchBooks extends Component {
  state = {
    books: []
  };

  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  };

  updateQuery(q) {
    const query = q.trim();
    const booksOnShelves = this.props.books;

    if (searchTerms.includes(query)) {
      BooksAPI
        .search(query, 10)
        .then(result => {
          const books = result.map(entity => {
            const bookOnShelves = booksOnShelves.filter(item => {
              return item.id === entity.id;
            });

            return bookOnShelves.length > 0 ? bookOnShelves[0] : entity;
          });

          this.setState({books});
        })
        .catch(err => {
          console.error('Error fetching search result', err);
        });
    }
  };

  render() {
    const books = this.state.books;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {books.length > 0 && (
            <ol className="books-grid">
              {books.map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    onShelfChange={this.props.onShelfChange}
                  />
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBooks;