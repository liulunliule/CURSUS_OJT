import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import Instructor_Notification from '.';

test('test verification page', () => {
  const tree = renderer.create(
    <Provider store={store}>
            <Instructor_Notification />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});