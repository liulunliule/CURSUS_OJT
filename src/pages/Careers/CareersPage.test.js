import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import CareersPage from './index';

describe('CareersPage', () => {
  beforeEach(() => {
    delete window.location;
    window.location = { href: '' };
  });

  test('renders CareersPage correctly', () => {
    render(
      <MemoryRouter>
        <CareersPage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /We're a passionate, creative, and global company, come work with us./i })).toBeInTheDocument();

    ['About', 'Blog', 'Company', 'Careers', 'Press'].forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    expect(screen.getByText(/Working at Cursus/i)).toBeInTheDocument();
    expect(screen.getByText(/Cursus culture is something special, and to complement and support that culture we have some amazing benefits./i)).toBeInTheDocument();
    expect(screen.getByText(/Algorithm Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/Data Engineer/i)).toBeInTheDocument();
  });

  test('navigates to correct page when menu item is clicked', () => {
    render(
      <MemoryRouter>
        <CareersPage />
      </MemoryRouter>
    );

    const menuItems = ['About', 'Company', 'Blog', 'Careers', 'Press'];
    menuItems.forEach(item => {
      fireEvent.click(screen.getByText(item));
      expect(window.location.href).toContain(`/secondLayout/${item.toLowerCase()}`);
    });
  });

  test('changes quotes when arrows are clicked', () => {
    render(
      <MemoryRouter>
        <CareersPage />
      </MemoryRouter>
    );
    
    const nextButton = screen.getByText('>');
    const prevButton = screen.getByText('<');

    fireEvent.click(nextButton);
    expect(screen.getByText('We are navigators')).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(screen.getByText('We are global')).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(screen.getByText('We make an impact')).toBeInTheDocument();

    fireEvent.click(prevButton);
    expect(screen.getByText('We are global')).toBeInTheDocument();
    fireEvent.click(prevButton);
    expect(screen.getByText('We are navigators')).toBeInTheDocument();
    fireEvent.click(prevButton);
    expect(screen.getByText('We are learners')).toBeInTheDocument();
  });
});