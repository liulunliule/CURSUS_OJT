import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import Certification_test_result from '.';

test('test Certification Test Result Page', () => {
  const tree = renderer.create(
    <Provider store={store}>
        <MemoryRouter>
            <Certification_test_result/>
        </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
