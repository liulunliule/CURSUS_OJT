import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import AboutPage from './index';

describe('AboutPage', () => {
  test('renders AboutPage correctly', () => {
    render(<AboutPage />);

    expect(screen.getByRole('heading', { name: /Improving Lives Through Learning/i })).toBeInTheDocument();

    ['About', 'Blog', 'Company', 'Careers', 'Press'].forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    expect(screen.getByText(/Our Features/i)).toBeInTheDocument();
    expect(screen.getByText(/Mobile learning/i)).toBeInTheDocument();
    expect(screen.getByText(/Academic & Technical Support/i)).toBeInTheDocument();
    expect(screen.getByText(/Sharable Certificates/i)).toBeInTheDocument();
    expect(screen.getByText(/An Inclusive Experience/i)).toBeInTheDocument();

    expect(screen.getByText(/Our Story/i)).toBeInTheDocument();

    expect(screen.getByText(/Our Global Reach/i)).toBeInTheDocument();

    expect(screen.getByText(/Meet Our Team/i)).toBeInTheDocument();
  });

  test('navigates to correct page when menu item is clicked', () => {
    render(<AboutPage />);

    delete window.location;
    window.location = { href: '' };

    const menuItems = ['About', 'Company', 'Blog', 'Careers', 'Press'];
    menuItems.forEach(item => {
      fireEvent.click(screen.getByText(item));
      expect(window.location.href).toContain(`/secondLayout/${item.toLowerCase()}`);
    });
  });
});