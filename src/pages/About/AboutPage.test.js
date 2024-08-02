import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from '.';

describe('AboutPage component', () => {
  test('renders About component correctly', () => {
    const { asFragment } = render(<AboutPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});