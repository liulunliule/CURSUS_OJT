import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import Payout from '.';

test('test Payout', () => {
  const tree = renderer.create(
    <Provider store={store}>
        <MemoryRouter>
            <Payout/>
        </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});