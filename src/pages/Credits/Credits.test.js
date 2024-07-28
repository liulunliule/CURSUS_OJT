import '@testing-library/jest-dom/extend-expect';
import { useFetchCreditsData } from './data';

jest.mock('./data', () => ({
  useFetchCreditsData: jest.fn(),
}));

describe('Credits Component', () => {
  const mockData = {
    addedCredits: { amount: '$100', method: 'Credit Card', description: 'purchases' },
    transactions: [
      { amount: '$100', method: 'Credit Card', date: '2023-07-27' },
      { amount: '$50', method: 'PayPal', date: '2023-07-28' },
    ],
    status: 'succeeded',
    error: null,
  };

  it('renders loading state', () => {
    useFetchCreditsData.mockReturnValue({ status: 'loading' });
  });

  it('renders error state', () => {
    useFetchCreditsData.mockReturnValue({ ...mockData, status: 'failed', error: 'Failed to fetch data' });
  });

  it('renders credits data correctly', () => {
    useFetchCreditsData.mockReturnValue(mockData);
  });

  it('applies active class when isShowAll is true', () => {
    useFetchCreditsData.mockReturnValue(mockData);
  });
});