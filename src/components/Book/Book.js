import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
  };

  /**
   * @description Call change shelf callback
   * @param {object} book - book that we should update
   * @param {string} shelf - new shelf
   */
  shelfChange(book, shelf) {
    this.props.onShelfChange(book, shelf);
  }

  render() {
    const book = this.props.book;
    const shelf = book.shelf ? book.shelf : 'none';

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
          </div>
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={(event) => this.shelfChange(book, event.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {Array.isArray(book.authors) ? (
            book.authors.map((author, index) => (
              <div key={index}>{author}</div>
            ))
          ) : (
            book.authors
          )}
        </div>
      </div>
    );
  }
}

export default Book;