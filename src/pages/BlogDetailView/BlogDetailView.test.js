import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import BlogDetailView from './index';
import { BlogDetailImage } from '../../assets';

describe('BlogDetailView', () => {
  test('renders BlogDetailView correctly', () => {
    render(
      <Router>
        <BlogDetailView />
      </Router>
    );

    expect(screen.getByText('Blog Title Here')).toBeInTheDocument();

    const backToBlogLink = screen.getByText('Back to Blog');
    expect(backToBlogLink).toBeInTheDocument();
    expect(backToBlogLink).toHaveAttribute('href', '/secondLayout/blog');

    const blogImage = screen.getByAltText('Blog detail');
    expect(blogImage).toBeInTheDocument();
    expect(blogImage).toHaveAttribute('src', BlogDetailImage);

    expect(screen.getByText('109k views')).toBeInTheDocument();
    expect(screen.getByText('March 10, 2020')).toBeInTheDocument();

    expect(screen.getByText('« Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBeInTheDocument();
    expect(screen.getByText('Vestibulum vulputate nulla quis dignissim ultricies. »')).toBeInTheDocument();
  });
});