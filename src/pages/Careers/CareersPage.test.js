import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import CareersPage from '.';

const renderComponent = () =>
  render(
    <MemoryRouter>
      <CareersPage />
    </MemoryRouter>
  );

describe('CareersPage component', () => {
  test('renders CareersPage component correctly', () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });

  test('displays the header navigation items', () => {
    renderComponent();
    const navItems = ['About', 'Blog', 'Company', 'Careers', 'Press'];

    navItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test('displays the hero section', () => {
    renderComponent();
    const heroText = screen.getByText("We're a passionate, creative, and global company, come work with us.");
    expect(heroText).toBeInTheDocument();
  });

  test('displays the video and information about working at Cursus', () => {
    renderComponent();
    const videoTitle = screen.getByText('Working at Cursus');
    const video = screen.getByTitle('YouTube video player');
    const checkOutRolesLink = screen.getByText('Check Out Our Open Roles');

    expect(videoTitle).toBeInTheDocument();
    expect(video).toBeInTheDocument();
    expect(checkOutRolesLink).toBeInTheDocument();
    expect(checkOutRolesLink).toHaveAttribute('href', '/secondLayout/apply-job');
  });

  test('displays and navigates through quotes', () => {
    renderComponent();
    const nextButton = screen.getByRole('button', { name: '>' });
    const prevButton = screen.getByRole('button', { name: '<' });

    expect(screen.getByText('We are learners')).toBeInTheDocument();
    expect(prevButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    fireEvent.click(nextButton);
    expect(screen.getByText('We are navigators')).toBeInTheDocument();
    expect(prevButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    fireEvent.click(nextButton);
    expect(screen.getByText('We are global')).toBeInTheDocument();

    fireEvent.click(nextButton);
    expect(screen.getByText('We make an impact')).toBeInTheDocument();
    expect(nextButton).toBeDisabled();
  });

  test('displays the benefits section with correct items', () => {
    renderComponent();
    const benefits = [
      'Work from anywhere',
      'Work and Travel',
      'Flexible Hours',
      'Purchasing Leave',
      'Social Events',
      'Wellness Program',
      'Mentoring Program',
      'Fundraising',
    ];

    benefits.forEach(benefit => {
      expect(screen.getByText(benefit)).toBeInTheDocument();
    });
  });

  test('displays the open roles section with correct items', () => {
    renderComponent();
    const roles = [
      'Algorithm Engineer',
      'Chief Technology Officer',
      'Customer Growth & Marketing Analyst',
      'Data Engineer',
      'iOS Developer - Edututs+',
      'Senior UX Designer',
    ];

    roles.forEach(role => {
      expect(screen.getByText(role)).toBeInTheDocument();
    });
  });
});