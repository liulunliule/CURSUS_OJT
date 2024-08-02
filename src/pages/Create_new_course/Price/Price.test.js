import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'; // Import để sử dụng snapshot
import Price from '.';
import Free_page from './Free/index';
import Paid_page from './Paid/index';

// Mock các component Free_page và Paid_page
jest.mock('./Free/index', () => () => <div>Free Page Content</div>);
jest.mock('./Paid/index', () => ({ price, onPriceChange }) => (
  <div>
    <div>Paid Page Content</div>
    <button onClick={() => onPriceChange(200)}>Change Price</button>
  </div>
));

// Test snapshot
describe('Price Component Snapshot', () => {
  test('matches snapshot when price is 0', () => {
    const tree = renderer
      .create(<Price price={0} setPrice={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('matches snapshot when price is greater than 0', () => {
    const tree = renderer
      .create(<Price price={100} setPrice={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// Test behavior
describe('Price Component', () => {
  test('renders correctly and shows Free Page content', () => {
    render(<Price price={0} setPrice={() => {}} />);
    expect(screen.getByText('Free Page Content')).toBeInTheDocument();
    expect(screen.queryByText('Paid Page Content')).not.toBeInTheDocument();
    expect(screen.getByText('Free')).toHaveClass('active');
    expect(screen.getByText('Paid')).not.toHaveClass('active');
  });

  test('switches to Paid Page and handles price change', () => {
    const mockSetPrice = jest.fn();
    render(<Price price={100} setPrice={mockSetPrice} />);
    expect(screen.getByText('Paid Page Content')).toBeInTheDocument();
    expect(screen.queryByText('Free Page Content')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Free'));
    expect(screen.getByText('Free Page Content')).toBeInTheDocument();
    expect(screen.queryByText('Paid Page Content')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Paid'));
    fireEvent.click(screen.getByText('Change Price'));
    expect(mockSetPrice).toHaveBeenCalledWith(200);
  });
});
