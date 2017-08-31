import React from 'react';
import ReactDOM from 'react-dom';
import SearchBooks from './SearchBooks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBooks />, div);
});