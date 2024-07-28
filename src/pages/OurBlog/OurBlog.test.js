import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import OurBlog from './index';
import { useFetchBlogs } from './data';

jest.mock('./data', () => ({
  useFetchBlogs: jest.fn(),
}));

describe('OurBlog', () => {
  beforeEach(() => {
    useFetchBlogs.mockReturnValue({
      blogs: [
        {
          Blog_ID: '1',
          Blog_Image: '/path/to/image1.jpg',
          Views: '123',
          Create_At: '2024-01-01',
          Blog_Title: 'First Blog',
          Intro: 'This is the first blog.',
        },
        {
          Blog_ID: '2',
          Blog_Image: '/path/to/image2.jpg',
          Views: '456',
          Create_At: '2024-01-02',
          Blog_Title: 'Second Blog',
          Intro: 'This is the second blog.',
        },
      ],
      status: 'succeeded',
      error: null,
    });
  });

  test('renders OurBlog correctly', () => {
    render(
      <Router>
        <OurBlog />
      </Router>
    );

    expect(screen.getByRole('heading', { name: /Insights, ideas, and stories/i })).toBeInTheDocument();

    ['About', 'Blog', 'Company', 'Careers', 'Press'].forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    expect(screen.getByText('First Blog')).toBeInTheDocument();
    expect(screen.getByText('Second Blog')).toBeInTheDocument();
  });

  test('displays loading state correctly', () => {
    useFetchBlogs.mockReturnValue({
      blogs: [],
      status: 'loading',
      error: null,
    });

    render(
      <Router>
        <OurBlog />
      </Router>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays error state correctly', () => {
    useFetchBlogs.mockReturnValue({
      blogs: [],
      status: 'failed',
      error: 'Failed to fetch blogs',
    });

    render(
      <Router>
        <OurBlog />
      </Router>
    );

    expect(screen.getByText('Error: Failed to fetch blogs')).toBeInTheDocument();
  });

  test('navigates to the correct page when menu item is clicked', () => {
    render(
      <Router>
        <OurBlog />
      </Router>
    );

    delete window.location;
    window.location = { href: '' };

    const menuItems = ['About', 'Company', 'Blog', 'Careers', 'Press'];
    menuItems.forEach(item => {
      fireEvent.click(screen.getByText(item));
      expect(window.location.href).toContain(`/secondLayout/${item.toLowerCase()}`);
    });
  });
});