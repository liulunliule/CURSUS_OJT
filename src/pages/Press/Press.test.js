import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Press from './index';
import { useFetchPressData } from './data';

jest.mock('./data', () => ({
  useFetchPressData: jest.fn(),
}));

describe('Press Component', () => {
  const mockData = {
    news: [
      { Press_News_ID: 1, Press_At: '2023-07-27', Title: 'News Title 1', Intro: 'News Intro 1' },
      { Press_News_ID: 2, Press_At: '2023-07-28', Title: 'News Title 2', Intro: 'News Intro 2' },
    ],
    releases: [
      { Press_Releases_ID: 1, Press_At: '2023-07-27', Title: 'Release Title 1' },
      { Press_Releases_ID: 2, Press_At: '2023-07-28', Title: 'Release Title 2' },
    ],
    status: 'succeeded',
    error: null,
  };

  it('renders loading state', () => {
    useFetchPressData.mockReturnValue({ ...mockData, status: 'loading' });

    render(<Press />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    useFetchPressData.mockReturnValue({ ...mockData, status: 'failed', error: 'Failed to fetch data' });

    render(<Press />);
    expect(screen.getByText('Error: Failed to fetch data')).toBeInTheDocument();
  });

  it('renders press data correctly', () => {
    useFetchPressData.mockReturnValue(mockData);

    render(<Press />);

    mockData.news.forEach((news) => {
      expect(screen.getByText(news.Title)).toBeInTheDocument();
      expect(screen.getByText(news.Intro)).toBeInTheDocument();
    });

    mockData.releases.forEach((release) => {
      expect(screen.getByText(release.Title)).toBeInTheDocument();
    });
  });

  it('handles navigation correctly', () => {
    useFetchPressData.mockReturnValue(mockData);

    render(<Press />);
    const aboutNavItem = screen.getByText('About');
    fireEvent.click(aboutNavItem);
    expect(aboutNavItem).toHaveClass('selected');
  });
});