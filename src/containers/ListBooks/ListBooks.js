import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf from '../../components/Bookshelf/Bookshelf';
import {Link} from 'react-router-dom';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  };

  render() {
    const books = this.props.books;
    const readingBooks = books.filter(book => book.shelf === 'currentlyReading');
    const toReadBooks = books.filter(book => book.shelf === 'wantToRead');
    const readBooks = books.filter(book => book.shelf === 'read');

    const shelves = [
      {title: 'Currently Reading', books: readingBooks},
      {title: 'Want to Read', books: toReadBooks},
      {title: 'Read', books: readBooks}
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf, index) => (
            <Bookshelf
              key={index}
              title={shelf.title}
              books={shelf.books}
              onShelfChange={this.props.onShelfChange}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
