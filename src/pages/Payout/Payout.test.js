import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import Payout from '.';

const initialState = {
  savedCourse: {
    isShowAll: false,
  },
};

const reducer = (state = initialState, action) => state;
const store = createStore(reducer);

const mockData = {
  nextPayout: {
    amount: '$500',
    method: 'Bank Transfer',
    date: '01 Mar 2024',
  },
  transactions: [
    { amount: '$200', method: 'PayPal', date: '01 Feb 2024' },
    { amount: '$300', method: 'Bank Transfer', date: '01 Jan 2024' },
  ],
  status: 'succeeded',
  error: null,
};

jest.mock('./data', () => ({
  useFetchPayoutData: () => mockData,
}));

test('renders Payout component correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Payout />
      </MemoryRouter>
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('displays loading message', () => {
  mockData.status = 'loading';
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Payout />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('displays error message', () => {
  mockData.status = 'failed';
  mockData.error = 'Failed to fetch data';
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Payout />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText('Error: Failed to fetch data')).toBeInTheDocument();
});

test('displays next payout details', () => {
  mockData.status = 'succeeded';
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Payout />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText('Next payout')).toBeInTheDocument();
  expect(screen.getByText('$500')).toBeInTheDocument();
  expect(screen.getByText('via Bank Transfer')).toBeInTheDocument();
  expect(screen.getByText('Your payout will be processed on')).toBeInTheDocument();
  expect(screen.getByText('01 Mar 2024')).toBeInTheDocument();
});

test('renders transactions table correctly', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Payout />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText('Amount')).toBeInTheDocument();
  expect(screen.getByText('Payout Method')).toBeInTheDocument();
  expect(screen.getByText('Date Processed')).toBeInTheDocument();
  expect(screen.getByText('$200')).toBeInTheDocument();
  expect(screen.getByText('PayPal')).toBeInTheDocument();
  expect(screen.getByText('01 Feb 2024')).toBeInTheDocument();
  expect(screen.getByText('$300')).toBeInTheDocument();
  expect(screen.getByText('Bank Transfer')).toBeInTheDocument();
  expect(screen.getByText('01 Jan 2024')).toBeInTheDocument();
});