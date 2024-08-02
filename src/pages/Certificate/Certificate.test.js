import React from 'react';
import { render } from '@testing-library/react';
import Certificate from '.';

test('renders Certificate component correctly', () => {
  const { asFragment } = render(<Certificate />);
  expect(asFragment()).toMatchSnapshot();
});
