import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import Press from '.';
import { useFetchPressData } from './data';

jest.mock('./data', () => ({
  useFetchPressData: jest.fn(),
}));

test('renders Press component correctly', () => {
  useFetchPressData.mockReturnValue({
    news: [],
    releases: [],
    status: 'succeeded',
    error: null,
  });

  const { asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Press />
      </MemoryRouter>
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders loading state correctly', () => {
  useFetchPressData.mockReturnValue({
    news: [],
    releases: [],
    status: 'loading',
    error: null,
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Press />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('renders error state correctly', () => {
  useFetchPressData.mockReturnValue({
    news: [],
    releases: [],
    status: 'failed',
    error: 'Failed to fetch data',
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Press />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText('Error: Failed to fetch data')).toBeInTheDocument();
});

test('renders news and releases correctly', () => {
  useFetchPressData.mockReturnValue({
    news: [
      {
        Press_News_ID: 1,
        Press_At: '2024-08-02',
        Title: 'News Title 1',
        Intro: 'Intro text for news 1',
      },
    ],
    releases: [
      {
        Press_Releases_ID: 1,
        Press_At: '2024-08-02',
        Title: 'Release Title 1',
      },
    ],
    status: 'succeeded',
    error: null,
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Press />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText('News Title 1')).toBeInTheDocument();
  expect(screen.getByText('Intro text for news 1')).toBeInTheDocument();
  expect(screen.getByText('Release Title 1')).toBeInTheDocument();
});

test('navigates correctly on menu item click', () => {
  useFetchPressData.mockReturnValue({
    news: [],
    releases: [],
    status: 'succeeded',
    error: null,
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Press />
      </MemoryRouter>
    </Provider>
  );
});