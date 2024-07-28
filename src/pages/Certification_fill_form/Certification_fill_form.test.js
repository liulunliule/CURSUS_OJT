import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import Certification_fill_form from '.';

test('test Certification_fill_form Page', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Certification_fill_form/>
      </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
