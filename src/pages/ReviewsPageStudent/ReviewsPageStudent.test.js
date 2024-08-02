import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import ReviewsPageStudent from '.';

test('test ReviewsPageStudent', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <ReviewsPageStudent/>
      </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
