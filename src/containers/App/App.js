import React, { Component } from 'react';
import '../../styles/App.css';
import {Route} from 'react-router-dom';
import ListBooks from '../ListBooks/ListBooks';
import SearchBooks from '../SearchBooks/SearchBooks';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <ListBooks />
        )} />
        <Route path="/search" exact render={(history) => (
          <SearchBooks />
        )} />
      </div>
    );
  }
}

export default App;
