import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import CareersPage from '.';

test('renders Careers Page component correctly', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <CareersPage />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});