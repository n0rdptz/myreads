import React, { Component } from 'react';
import '../../styles/App.css';
import Bookshelf from '../Bookshelf/Bookshelf';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <div className="list-books-content">
            <Bookshelf title="Currently Reading" />

            <Bookshelf title="Want to Read" />

            <Bookshelf title="Read" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
