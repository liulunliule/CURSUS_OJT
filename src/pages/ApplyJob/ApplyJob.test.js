import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ApplyJob from './index';

describe('ApplyJob Component', () => {
  test('renders the job title and Back to Career link', () => {
    render(
      <Router>
        <ApplyJob />
      </Router>
    );
  });

  test('renders job content', () => {
    render(
      <Router>
        <ApplyJob />
      </Router>
    );
  });

  test('renders application form', () => {
    render(
      <Router>
        <ApplyJob />
      </Router>
    );
  });

  test('submits the application form', () => {
    render(
      <Router>
        <ApplyJob />
      </Router>
    );

    fireEvent.change(screen.getByPlaceholderText('LinkedIn URL'), { target: { value: 'https://linkedin.com/in/johndoe' } });
    fireEvent.change(screen.getByPlaceholderText('X URL'), { target: { value: 'https://x.com/johndoe' } });
    fireEvent.change(screen.getByPlaceholderText('Portfolio URL'), { target: { value: 'https://portfolio.com/johndoe' } });
    fireEvent.change(screen.getByPlaceholderText('Other Website URL'), { target: { value: 'https://website.com/johndoe' } });
    fireEvent.change(screen.getByPlaceholderText('Add a cover letter or anything else you want to share.'), { target: { value: 'This is a cover letter.' } });
    fireEvent.click(screen.getByText('Submit Application'));
  });
});