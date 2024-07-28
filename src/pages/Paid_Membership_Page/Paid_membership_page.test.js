import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import Paid_membership_page from '.';

test('test Certification Test Page', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Paid_membership_page/>
      </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
