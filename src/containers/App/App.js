import React, { Component } from 'react';
import '../../styles/App.css';
import {Route} from 'react-router-dom';
import ListBooks from '../ListBooks/ListBooks';
import SearchBooks from '../SearchBooks/SearchBooks';
import * as BooksAPI from '../../utils/BooksAPI';

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI
      .getAll()
      .then(books => {
        this.setState({books});
      })
      .catch(err => {
        console.error('Error fetching all books', err);
      });
  };

  /**
   * @description Change shelf
   * @param {object} book - book that we should update
   * @param {string} shelf - new shelf
   */
  shelfChange(book, shelf) {
    BooksAPI
      .update(book, shelf)
      .then(() => {
        const isBookOnShelves = this.state.books.filter(item => item.id === book.id).length;

        if (isBookOnShelves > 0) {
          const books = this.state.books.map(item => {
            if (item.id === book.id) {
              item.shelf = shelf;
              return item;
            }

            return item;
          });

          this.setState({books});
        } else {
          book.shelf = shelf;

          this.setState(state => ({
            books: state.books.concat([book])
          }));
        }
      });
  };

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <ListBooks
            books={this.state.books}
            onShelfChange={this.shelfChange.bind(this)}
          />
        )} />
        <Route path="/search" exact render={(history) => (
          <SearchBooks
            books={this.state.books}
            onShelfChange={this.shelfChange.bind(this)}
          />
        )} />
      </div>
    );
  };
}

export default App;
