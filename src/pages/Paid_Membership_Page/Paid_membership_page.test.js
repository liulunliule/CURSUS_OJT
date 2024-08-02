import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import Paid_membership_page from '.';

test('test Paid_membership_page', () => {
  const tree = renderer.create(
      <MemoryRouter>
        <Paid_membership_page/>
      </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
