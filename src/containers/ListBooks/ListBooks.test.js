/* TODO: fix ReferenceError: localStorage is not defined */

import React from 'react';
import ReactDOM from 'react-dom';
import ListBooks from './ListBooks';
import {BrowserRouter, Route} from 'react-router-dom';
import * as fixtures from '../../tests/fixtures';

let books = fixtures.books;
let fn = () => {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Route path="/" exact render={() => (
        <ListBooks
          books={books}
          onShelfChange={fn}
        />
      )}/>
    </BrowserRouter>,
    div);
});