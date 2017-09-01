import React, { Component } from 'react';
import Bookshelf from '../../components/Bookshelf/Bookshelf';
import {Link} from 'react-router-dom';

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <Bookshelf title="Currently Reading" />

          <Bookshelf title="Want to Read" />

          <Bookshelf title="Read" />
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
