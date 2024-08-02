import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Discounts from '.';
import { create } from 'react-test-renderer';

describe('Discounts Component', () => {
  test('matches the snapshot', () => {
    // Render component
    const tree = create(<Discounts />).toJSON();
    
    // Compare the rendered output with the snapshot
    expect(tree).toMatchSnapshot();
  });

  test('renders the discounts component', () => {
    render(<Discounts />);
    expect(screen.getByText(/New Discount/i)).toBeInTheDocument();
  });

//   test('renders the form fields', () => {
//     render(<Discounts />);

//     // Kiểm tra sự hiện diện của các trường nhập liệu trong form
//     expect(screen.getByLabelText(/Course\*/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Discount Amount/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/End Date/i)).toBeInTheDocument();
//   });

//   test('renders the table with correct columns', () => {
//     render(<Discounts />);

//     // Kiểm tra các tiêu đề cột trong bảng
//     expect(screen.getByText(/Item No\./i)).toBeInTheDocument();
//     expect(screen.getByText(/Course/i)).toBeInTheDocument();
//     expect(screen.getByText(/Start Date/i)).toBeInTheDocument();
//     expect(screen.getByText(/End Date/i)).toBeInTheDocument();
//     expect(screen.getByText(/Discount/i)).toBeInTheDocument();
//     expect(screen.getByText(/Status/i)).toBeInTheDocument();
//     expect(screen.getByText(/Action/i)).toBeInTheDocument();
//   });

  test('renders action buttons in table', () => {
    render(<Discounts />);

    // Kiểm tra sự hiện diện của các nút bấm hành động (Edit và Delete)
    expect(screen.getAllByRole('button', { name: /edit/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('button', { name: /delete/i }).length).toBeGreaterThan(0);
  });

//   test('form submission button is present', () => {
//     render(<Discounts />);

//     // Kiểm tra sự hiện diện của nút "Save Changes"
//     expect(screen.getByText(/Save Changes/i)).toBeInTheDocument();
//   });
});
