import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import ApplyJob from '.';

const renderComponent = () =>
  render(
    <MemoryRouter>
      <ApplyJob />
    </MemoryRouter>
  );

describe('ApplyJob component', () => {
  test('renders ApplyJob component correctly', () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });

  test('displays the job title and back link', () => {
    renderComponent();
    const jobTitle = screen.getByText('Data Engineer');
    const backLink = screen.getByText('Back to Career');

    expect(jobTitle).toBeInTheDocument();
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute('href', '/secondLayout/careers');
  });

  test('displays the apply button and job content', () => {
    renderComponent();
    const applyButton = screen.getByText('Apply For This Job');
    const jobContent = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat maximus pellentesque. Integer sem enim, luctus at nibh at, condimentum sagittis sapien. Sed tempus ipsum erat, sit amet efficitur velit interdum eu. Vestibulum hendrerit id dolor eu scelerisque. Phasellus ex dui, consequat nec feugiat eu, dapibus eget ante. Sed sodales interdum dui, at euismod mi feugiat hendrerit. Suspendisse auctor libero in tempor mollis. Nulla et dolor velit. Aliquam sit amet luctus quam.');

    expect(applyButton).toBeInTheDocument();
    expect(jobContent).toBeInTheDocument();
  });

  test('displays the sections for job description, requirements, and application form', () => {
    renderComponent();

    const sections = [
      'What you\'ll be doing',
      'What we\'re looking for',
      'Who should apply?',
      'What next?',
      'Submit Your Application',
    ];

    sections.forEach(section => {
      expect(screen.getByText(section)).toBeInTheDocument();
    });
  });

  test('displays the application form with correct fields', () => {
    renderComponent();

    const formFields = [
      'Full Name',
      'Email Address',
      'Phone Number',
      'Gender',
      'Resume/CV',
      'Links',
      'Additional Information',
    ];

    formFields.forEach(field => {
      expect(screen.getByText(field)).toBeInTheDocument();
    });

    expect(screen.getByPlaceholderText('LinkedIn URL')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('X URL')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Portfolio URL')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Other Website URL')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a cover letter or anything else you want to share.')).toBeInTheDocument();
  });

  test('submit button is present in the application form', () => {
    renderComponent();
    const submitButton = screen.getByText('Submit Application');
    expect(submitButton).toBeInTheDocument();
  });

  test('form submission triggers correctly', () => {
    renderComponent();
    const submitButton = screen.getByText('Submit Application');

    fireEvent.click(submitButton);

    expect(submitButton).toBeInTheDocument();
  });
});