import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompanyDetails from './index';
import { useFetchOffices } from './data';

jest.mock('./data', () => ({
  useFetchOffices: jest.fn()
}));

describe('CompanyDetails', () => {
  const officesMock = [
    {
      Offices_ID: 1,
      Offices_Image: 'https://example.com/image1.jpg',
      Nation: 'Country A',
      Address: 'Address A, City A',
      Hotline: '123-456-789'
    },
    {
      Offices_ID: 2,
      Offices_Image: 'https://example.com/image2.jpg',
      Nation: 'Country B',
      Address: 'Address B, City B',
      Hotline: '987-654-321'
    }
  ];

  beforeEach(() => {
    useFetchOffices.mockReturnValue({
      offices: officesMock,
      status: 'succeeded',
      error: null
    });
  });

  test('renders CompanyDetails correctly', () => {
    render(<CompanyDetails />);

    expect(screen.getByRole('heading', { name: /Expanding learning opportunities/i })).toBeInTheDocument();

    ['About', 'Blog', 'Company', 'Careers', 'Press'].forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    expect(screen.getByText(/Our Origins/i)).toBeInTheDocument();
    expect(screen.getByText(/Cursus was founded in 2020/i)).toBeInTheDocument();

    expect(screen.getByText(/Our Offices/i)).toBeInTheDocument();
    officesMock.forEach(office => {
      expect(screen.getByText(office.Nation)).toBeInTheDocument();
      expect(screen.getByText(office.Address.split(',')[0])).toBeInTheDocument();
      expect(screen.getByText(office.Hotline)).toBeInTheDocument();
    });
  });

  test('navigates to correct page when menu item is clicked', () => {
    render(<CompanyDetails />);

    delete window.location;
    window.location = { href: '' };

    const menuItems = ['About', 'Company', 'Blog', 'Careers', 'Press'];
    menuItems.forEach(item => {
      fireEvent.click(screen.getByText(item));
      expect(window.location.href).toContain(`/secondLayout/${item.toLowerCase()}`);
    });
  });

  test('displays loading state', () => {
    useFetchOffices.mockReturnValue({
      offices: [],
      status: 'loading',
      error: null
    });

    render(<CompanyDetails />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays error state', () => {
    useFetchOffices.mockReturnValue({
      offices: [],
      status: 'failed',
      error: 'Failed to fetch offices'
    });

    render(<CompanyDetails />);
    expect(screen.getByText('Error: Failed to fetch offices')).toBeInTheDocument();
  });
});