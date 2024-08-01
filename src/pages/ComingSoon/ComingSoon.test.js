import React from 'react';
import { render } from '@testing-library/react';
import ComingSoon from '.';

test('renders Coming Soon component correctly', () => {
  const { asFragment } = render(<ComingSoon />);
  expect(asFragment()).toMatchSnapshot();
});