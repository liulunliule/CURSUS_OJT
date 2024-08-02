import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import ReviewsPageInstructor from '.';

test('test ReviewsPageInstructor', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <ReviewsPageInstructor/>
      </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
