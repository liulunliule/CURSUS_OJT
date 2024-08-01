import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import OtherInstructor from '.';

test('Other Instructor View Page', () => {
  const tree = renderer.create(
    <Provider store={store}>
        <MemoryRouter>
            <OtherInstructor/>
        </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
