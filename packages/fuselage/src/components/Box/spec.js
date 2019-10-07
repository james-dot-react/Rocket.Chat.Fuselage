import React from 'react';
import ReactDOM from 'react-dom';

import { Box } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Box />, div);
  ReactDOM.unmountComponentAtNode(div);
});
