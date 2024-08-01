// Certification_Test_Page.test.jsx
import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import Certification_Test_Page from '.';

test('test Certification Test Page', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Certification_Test_Page/>
      </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
