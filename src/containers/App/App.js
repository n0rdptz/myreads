import React, { Component } from 'react';
import '../../styles/App.css';
import {Route} from 'react-router-dom';
import ListBooks from '../ListBooks/ListBooks';
import SearchBooks from '../SearchBooks/SearchBooks';
import * as BooksAPI from '../../BooksAPI';

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI
      .getAll()
      .then(books => {
        this.setState({books});
      });
  };

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <ListBooks books={this.state.books}/>
        )} />
        <Route path="/search" exact render={(history) => (
          <SearchBooks />
        )} />
      </div>
    );
  };
}

export default App;
