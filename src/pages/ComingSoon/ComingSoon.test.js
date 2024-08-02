import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ComingSoon from '.';

test('renders Coming Soon component correctly', () => {
  const { asFragment } = render(<ComingSoon />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders countdown timer correctly', () => {
  render(<ComingSoon />);
  
  expect(screen.getByText(/Days/i)).toBeInTheDocument();
  expect(screen.getByText(/Hours/i)).toBeInTheDocument();
  expect(screen.getByText(/Minutes/i)).toBeInTheDocument();
  expect(screen.getByText(/Seconds/i)).toBeInTheDocument();
});

test('renders Notify Me section correctly', () => {
  render(<ComingSoon />);
  
  expect(screen.getByText("We'll be coming soon!")).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
  expect(screen.getByText('Notify Me')).toBeInTheDocument();
});

test('email input has correct placeholder text', () => {
  render(<ComingSoon />);
  
  const emailInput = screen.getByPlaceholderText('Email address');
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute('type', 'email');
});