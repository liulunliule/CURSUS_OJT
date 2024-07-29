import React from 'react';
import { render } from '@testing-library/react';
import ThanksPage from '../Thanks_Page';

test('renders error page component correctly', () => {
  const { asFragment } = render(<ThanksPage />);
  expect(asFragment()).toMatchSnapshot();
});
