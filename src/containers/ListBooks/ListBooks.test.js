import React from 'react';
import ReactDOM from 'react-dom';
import App from './ListBooks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListBooks />, div);
});