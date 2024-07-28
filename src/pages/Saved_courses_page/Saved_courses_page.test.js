import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import Saved_courses_page from '.';

test('test Saved courses page', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Saved_courses_page/>
      </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
