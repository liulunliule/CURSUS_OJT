import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ComingSoon from './index';

describe('ComingSoon', () => {
  it('renders ComingSoon component', () => {
    const { container } = render(<ComingSoon />);
    expect(container).toBeDefined();
  });

  it('shows error message when email is invalid', async () => {
    render(<ComingSoon />);
    const emailInput = screen.getByPlaceholderText(/Email address/i);
    const notifyButton = screen.getByRole('button', { name: /Notify Me/i });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.submit(notifyButton);
  });

  it('submits the form with a valid email', async () => {
    render(<ComingSoon />);
    const emailInput = screen.getByPlaceholderText(/Email address/i);
    const notifyButton = screen.getByRole('button', { name: /Notify Me/i });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.submit(notifyButton);
  });
});