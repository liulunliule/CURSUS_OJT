import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import SignUpPage from '.';

test('test SignUpPage Page', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <SignUpPage/>
      </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
