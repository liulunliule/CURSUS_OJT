import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import Shopping_Cart from '.';

test('test Certification Test Page', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Shopping_Cart/>
      </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
