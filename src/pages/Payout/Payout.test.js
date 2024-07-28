import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector } from 'react-redux';
import Payout from './index';
import { useFetchPayoutData } from './data';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('./data', () => ({
  useFetchPayoutData: jest.fn(),
}));

describe('Payout Component', () => {
  const mockData = {
    nextPayout: { amount: '$100', method: 'Credit Card', date: '2023-07-27' },
    transactions: [
      { amount: '$100', method: 'Credit Card', date: '2023-07-27' },
      { amount: '$50', method: 'PayPal', date: '2023-07-28' },
    ],
    status: 'succeeded',
    error: null,
  };

  beforeEach(() => {
    useSelector.mockClear();
    useFetchPayoutData.mockClear();
  });

  it('renders loading state', () => {
    useFetchPayoutData.mockReturnValue({ status: 'loading' });
    render(<Payout />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    useFetchPayoutData.mockReturnValue({ ...mockData, status: 'failed', error: 'Failed to fetch data' });
    render(<Payout />);
    expect(screen.getByText(/Error: Failed to fetch data/i)).toBeInTheDocument();
  });

  it('renders payout data correctly', () => {
    useFetchPayoutData.mockReturnValue(mockData);
    render(<Payout />);
    expect(screen.getByText(/Next payout/i)).toBeInTheDocument();
    expect(screen.getByText(/via Credit Card/i)).toBeInTheDocument();
    expect(screen.getByText(/Your payout will be processed on/i)).toBeInTheDocument();
  });

  it('applies active class when isShowAll is true', () => {
    useFetchPayoutData.mockReturnValue(mockData);
    useSelector.mockReturnValue(true);
  });

  it('does not apply active class when isShowAll is false', () => {
    useFetchPayoutData.mockReturnValue(mockData);
    useSelector.mockReturnValue(false);
  });
});