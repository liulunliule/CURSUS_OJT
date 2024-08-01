import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Messages from './index';

const initialState = {
  savedCourse: {
    isShowAll: false,
  },
};

const reducer = (state = initialState, action) => state;
const store = createStore(reducer);

test('renders Messages component correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Messages />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});