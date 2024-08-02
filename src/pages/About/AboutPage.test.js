import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AboutPage from '.';

describe('AboutPage component', () => {
  test('renders About component correctly', () => {
    const { asFragment } = render(<AboutPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('displays the correct number of features', () => {
    const { container } = render(<AboutPage />);
    const featureItems = container.querySelectorAll('.feature-item');
    expect(featureItems.length).toBe(4);
  });
});