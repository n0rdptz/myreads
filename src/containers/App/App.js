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

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <ListBooks
            books={this.state.books}
          />
        )} />
        <Route path="/search" exact render={(history) => (
          <SearchBooks
            books={this.state.books}
          />
        )} />
      </div>
    );
  };
}

export default App;
