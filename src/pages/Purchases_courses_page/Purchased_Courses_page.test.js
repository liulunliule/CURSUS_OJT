import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import Purchased_Courses_page from '.';

test('test Purchased_Courses_page', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Purchased_Courses_page/>
      </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
