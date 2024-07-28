import React from 'react';
import { render } from '@testing-library/react';
import ErrorPage from '../Error_Page';

test('renders error page component correctly', () => {
  const { asFragment } = render(<ErrorPage />);
  expect(asFragment()).toMatchSnapshot();
});
