import React from 'react';
import ReactDOM from 'react-dom';

import { Headline } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Headline />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Skeleton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Headline.Skeleton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
