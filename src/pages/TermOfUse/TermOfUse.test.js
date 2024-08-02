import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import TermOfUse from '.';

test('test TermOfUse Page', () => {
  const tree = renderer.create(
      <MemoryRouter>
        <TermOfUse/>
      </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
