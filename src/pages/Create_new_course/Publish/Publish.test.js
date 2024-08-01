import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Publish from '.';

describe('Publish Component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<Publish />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders correctly', () => {
    const { getByText } = render(<Publish />);

    // Check if the title and text are rendered
    expect(getByText('Submit')).toBeInTheDocument();
    expect(
      getByText(
        'Your course is in a draft state. Students cannot view, purchase or enroll in this course. For students that are already enrolled, this course will not appear on their student Dashboard.'
      )
    ).toBeInTheDocument();
  });

  test('renders FontAwesome icons', () => {
    const { container } = render(<Publish />);

    // Check if FontAwesome icons are rendered correctly
    expect(container.querySelector('.publish_icon')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument(); // Checks for any SVG element which should be present in icons
  });

  test('checks style of publish block icon', () => {
    const { container } = render(<Publish />);

    // Check if FontAwesome icon has the correct style
    const iconElement = container.querySelector('.publish_block svg');
    expect(iconElement).toHaveStyle('font-size: 25px');
    expect(iconElement).toHaveStyle('margin-bottom: 20px');
  });

  test('checks class names', () => {
    const { container } = render(<Publish />);

    // Check if the main class names are present
    expect(container.querySelector('.create_course_publish')).toBeInTheDocument();
    expect(container.querySelector('.publish_title')).toBeInTheDocument();
    expect(container.querySelector('.publish_block')).toBeInTheDocument();
  });
});
