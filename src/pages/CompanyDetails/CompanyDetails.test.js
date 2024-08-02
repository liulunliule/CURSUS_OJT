import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import CompanyDetails from '.';
import '@testing-library/jest-dom/extend-expect';

const renderComponent = () =>
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CompanyDetails />
      </MemoryRouter>
    </Provider>
  );

describe('CompanyDetails component', () => {
  test('renders CompanyDetails component correctly', () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });

  test('displays the correct hero section title', () => {
    renderComponent();
  });

  test('renders loading state correctly', () => {
    jest.mock('./data', () => ({
      useFetchOffices: () => ({
        offices: [],
        status: 'loading',
        error: null,
      }),
    }));

    renderComponent();
  });

  test('renders error state correctly', () => {
    jest.mock('./data', () => ({
      useFetchOffices: () => ({
        offices: [],
        status: 'failed',
        error: 'Error fetching offices',
      }),
    }));

    renderComponent();
  });

  test('displays offices when data is fetched successfully', () => {
    jest.mock('./data', () => ({
      useFetchOffices: () => ({
        offices: [
          {
            Offices_ID: 1,
            Offices_Image: 'image1.jpg',
            Nation: 'USA',
            Address: '123 Main St, Anytown, USA',
            Hotline: '123-456-7890',
          },
          {
            Offices_ID: 2,
            Offices_Image: 'image2.jpg',
            Nation: 'Canada',
            Address: '456 Maple St, Othertown, Canada',
            Hotline: '987-654-3210',
          },
        ],
        status: 'succeeded',
        error: null,
      }),
    }));

    renderComponent();
  });
});