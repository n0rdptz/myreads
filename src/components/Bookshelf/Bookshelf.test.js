import React from 'react';
import ReactDOM from 'react-dom';
import Bookshelf from './Bookshelf';
import * as fixtures from '../../tests/fixtures';

let books = fixtures.books;
let fn = () => {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Bookshelf
      books={books}
      onShelfChange={fn}
      title="Test"
    />,
    div
  );
});