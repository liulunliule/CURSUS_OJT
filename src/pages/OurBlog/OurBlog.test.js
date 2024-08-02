import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import OurBlog from '.';
import '@testing-library/jest-dom/extend-expect';

const renderComponent = () =>
  render(
    <Provider store={store}>
      <MemoryRouter>
        <OurBlog />
      </MemoryRouter>
    </Provider>
  );

describe('OurBlog component', () => {
  test('renders OurBlog component correctly', () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });

  test('displays the correct hero section title', () => {
    renderComponent();
    const heroTitle = screen.getByText('Insights, ideas, and stories');
    expect(heroTitle).toBeInTheDocument();
  });

  test('renders loading state correctly', () => {
    renderComponent();
    jest.mock('./data', () => ({
      useFetchBlogs: () => ({
        blogs: [],
        status: 'loading',
        error: null,
      }),
    }));
  });

  test('renders error state correctly', () => {
    renderComponent();
    jest.mock('./data', () => ({
      useFetchBlogs: () => ({
        blogs: [],
        status: 'failed',
        error: 'Error fetching blogs',
      }),
    }));
  });

  test('displays blogs when data is fetched successfully', () => {
    renderComponent();
    jest.mock('./data', () => ({
      useFetchBlogs: () => ({
        blogs: [
          {
            Blog_ID: 1,
            Blog_Image: 'image1.jpg',
            Views: 100,
            Create_At: '2023-08-01',
            Blog_Title: 'First Blog',
            Intro: 'Introduction to the first blog',
          },
          {
            Blog_ID: 2,
            Blog_Image: 'image2.jpg',
            Views: 200,
            Create_At: '2023-08-02',
            Blog_Title: 'Second Blog',
            Intro: 'Introduction to the second blog',
          },
        ],
        status: 'succeeded',
        error: null,
      }),
    }));
  });

  test('search input renders correctly', () => {
    renderComponent();
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });

  test('labels and archive sections render correctly', () => {
    renderComponent();
    const labelsSection = screen.getByText('Labels');
    const archiveSection = screen.getByText('Archive');
    expect(labelsSection).toBeInTheDocument();
    expect(archiveSection).toBeInTheDocument();
  });

  test('follow buttons render correctly', () => {
    renderComponent();
    const followFacebookButton = screen.getByText('Follow our Facebook page');
    const followXButton = screen.getByText('Follow our X page');
    expect(followFacebookButton).toBeInTheDocument();
    expect(followXButton).toBeInTheDocument();
  });

  test('learn more and help center links render correctly', () => {
    renderComponent();
    const learnMoreLink = screen.getByText('Learn More');
    const helpCenterLink = screen.getByText('Cursus Help Center');
    expect(learnMoreLink).toBeInTheDocument();
    expect(helpCenterLink).toBeInTheDocument();
  });
});