import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Paid_page from '.';

test('renders input with empty value if no price is provided', () => {
    render(<Paid_page price={undefined} onPriceChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('$0');
    expect(inputElement).toHaveValue('');
});  


test('renders Paid_page correctly', () => {
    render(<Paid_page price={150} onPriceChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('$0');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('150');
});

test('does not allow non-numeric input', () => {
    render(<Paid_page price={100} onPriceChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('$0');
    fireEvent.change(inputElement, { target: { value: 'abc' } });
    expect(inputElement).toHaveValue('100');
});


test('does not call onPriceChange with non-numeric input', () => {
    const mockOnPriceChange = jest.fn();
    render(<Paid_page price={100} onPriceChange={mockOnPriceChange} />);
  
    const inputElement = screen.getByPlaceholderText('$0');
    fireEvent.change(inputElement, { target: { value: 'abc' } });
    expect(mockOnPriceChange).not.toHaveBeenCalled();
});
  
test('renders input field and handles price change', () => {
  const mockOnPriceChange = jest.fn();
  render(<Paid_page price={100} onPriceChange={mockOnPriceChange} />);
  const inputElement = screen.getByPlaceholderText('$0');
  expect(inputElement).toHaveValue('100');
  fireEvent.change(inputElement, { target: { value: '200' } });
  expect(inputElement).toHaveValue('200');
  expect(mockOnPriceChange).toHaveBeenCalledWith(200);
});

test('matches snapshot', () => {
    // Create a snapshot of the Paid_page component with initial props
    const tree = renderer
      .create(<Paid_page price={100} onPriceChange={() => {}} />)
      .toJSON();
  
    // Compare the rendered component to the saved snapshot
    expect(tree).toMatchSnapshot();
});