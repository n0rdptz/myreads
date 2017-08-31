import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book/>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;