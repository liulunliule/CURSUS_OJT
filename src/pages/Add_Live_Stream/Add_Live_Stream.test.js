import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import Add_Live_Stream from '.';

test('test verification page', () => {
  const tree = renderer.create(
    <Provider store={store}>
        <MemoryRouter>
            <Add_Live_Stream />
        </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});