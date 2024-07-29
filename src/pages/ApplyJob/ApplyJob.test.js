import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import ApplyJob from '.';

test('renders Apply Job component correctly', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <ApplyJob />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});