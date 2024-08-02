import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import BlogDetailView from '.';

const renderComponent = () =>
  render(
    <MemoryRouter>
      <BlogDetailView />
    </MemoryRouter>
  );

describe('BlogDetailView component', () => {
  test('renders BlogDetailView component correctly', () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });

  test('displays the blog title', () => {
    renderComponent();
    const title = screen.getByText('Blog Title Here');
    expect(title).toBeInTheDocument();
  });

  test('displays the back to blog link', () => {
    renderComponent();
    const backToBlogLink = screen.getByText('Back to Blog');
    expect(backToBlogLink).toBeInTheDocument();
    expect(backToBlogLink).toHaveAttribute('href', '/secondLayout/blog');
  });

  test('displays the blog meta information', () => {
    renderComponent();
    const views = screen.getByText('109k views');
    const date = screen.getByText('March 10, 2020');
    expect(views).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  test('renders blog content sections', () => {
    renderComponent();
    const sections = [
      'Why did you decide to teach on Cursus?',
      'Did you have any prior on- or offline teaching experience prior to publishing your first Cursus course?',
      'What are the most rewarding aspects of teaching on Cursus?',
    ];

    sections.forEach(section => {
      expect(screen.getByText(section)).toBeInTheDocument();
    });
  });

  test('displays pagination links', () => {
    renderComponent();
    const previousLink = screen.getByText('« Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    const nextLink = screen.getByText('Vestibulum vulputate nulla quis dignissim ultricies. »');
    
    expect(previousLink).toBeInTheDocument();
    expect(previousLink).toHaveAttribute('href', '#');

    expect(nextLink).toBeInTheDocument();
    expect(nextLink).toHaveAttribute('href', '#');
  });
});