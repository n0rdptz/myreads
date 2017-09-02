import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';
import * as fixtures from '../../tests/fixtures';

let book = fixtures.books[0];
let fn = () => {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Book
      book={book}
      onShelfChange={fn}
    />,
    div
  );
});