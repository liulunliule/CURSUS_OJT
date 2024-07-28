import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import CertificationCenter from '.';


test('test Certification Center Page', () => {
  const tree = renderer.create(
    <Provider store={store}>
        <MemoryRouter>
            <CertificationCenter/>
        </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
