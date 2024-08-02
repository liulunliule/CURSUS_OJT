import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Free_page from '.';
import { Switch } from 'antd';

describe('Free_page Component', () => {
  // Snapshot Test
  test('matches snapshot', () => {
    const tree = renderer
      .create(<Free_page />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Unit Tests
  test('renders switches and text correctly', () => {
    // Render the Free_page component
    render(<Free_page />);

    // Check if both switches are present
    const switchElements = screen.getAllByRole('switch');
    expect(switchElements).toHaveLength(2); // There should be 2 switches

    // Check if the text content is rendered correctly
    expect(screen.getByText('Require Log in')).toBeInTheDocument();
    expect(screen.getByText('Require Enroll')).toBeInTheDocument();
    expect(screen.getByText(/If the course is free, if student require to enroll your course,/)).toBeInTheDocument();
  });
});
