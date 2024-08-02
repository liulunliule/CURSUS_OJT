import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import BlogDetailView from '.';

test('renders Blog Detail View component correctly', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <BlogDetailView />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});