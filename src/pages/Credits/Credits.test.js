import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Credits from './index';

const initialState = {
  savedCourse: {
    isShowAll: false,
  },
  credits: {
    status: 'succeeded',
    addedCredits: { amount: '$100', method: 'Credit Card', description: 'future purchases' },
    transactions: [
      { amount: '$50', method: 'Credit Card', date: '2023-07-01' },
      { amount: '$30', method: 'PayPal', date: '2023-07-02' },
    ],
    error: null,
  },
};

const reducer = (state = initialState, action) => state;
const store = createStore(reducer);

test('renders Credits component correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Credits />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders loading state', () => {
  const loadingState = {
    ...initialState,
    credits: {
      ...initialState.credits,
      status: 'loading',
    },
  };
  const loadingStore = createStore((state = loadingState) => state);
  
  render(
    <Provider store={loadingStore}>
      <Credits />
    </Provider>
  );
  
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('renders error state', () => {
  const errorState = {
    ...initialState,
    credits: {
      ...initialState.credits,
      status: 'failed',
      error: 'Failed to fetch credits data',
    },
  };
  const errorStore = createStore((state = errorState) => state);
  
  render(
    <Provider store={errorStore}>
      <Credits />
    </Provider>
  );
  
  expect(screen.getByText('Error: Failed to fetch credits data')).toBeInTheDocument();
});

test('displays added credits correctly', () => {
  render(
    <Provider store={store}>
      <Credits />
    </Provider>
  );
  
  expect(screen.getByText('Added Credits')).toBeInTheDocument();
  expect(screen.getByText('$100')).toBeInTheDocument();
  expect(screen.getByText('via Credit Card')).toBeInTheDocument();
});

test('displays saved cards correctly', () => {
  render(
    <Provider store={store}>
      <Credits />
    </Provider>
  );
  
  expect(screen.getByText('Saved Cards')).toBeInTheDocument();
  expect(screen.getByText('Added: 25 Mar 2020')).toBeInTheDocument();
  expect(screen.getByText('Change Card')).toBeInTheDocument();
});

test('displays transactions correctly', () => {
  render(
    <Provider store={store}>
      <Credits />
    </Provider>
  );
  
  const transactions = screen.getAllByRole('row');
  expect(transactions).toHaveLength(3);
  
  expect(screen.getByText('$50')).toBeInTheDocument();
  expect(screen.getByText('Credit Card')).toBeInTheDocument();
  expect(screen.getByText('2023-07-01')).toBeInTheDocument();
  
  expect(screen.getByText('$30')).toBeInTheDocument();
  expect(screen.getByText('PayPal')).toBeInTheDocument();
  expect(screen.getByText('2023-07-02')).toBeInTheDocument();
});