import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event'; // Import user-event
import Basic from '.';

// Mock ReactQuill component to avoid unnecessary complexity in tests
jest.mock('react-quill', () => (props) => (
  <textarea {...props} />
));

const basicInfo = {
  titlecourse: '',
  ShortDescription: '',
  Description: '',
  Whatlearn: '',
  audioLanguage: '',
  closeCaption: '',
  courseCategory: '',
  courseLevel: '',
};

const mockSetBasicInfo = jest.fn();

// test('handles titlecourse input change', () => {
//   render(<Basic basicInfo={basicInfo} setBasicInfo={mockSetBasicInfo} />);

//   fireEvent.change(screen.getByPlaceholderText('Course title here'), {
//     target: { name: 'titlecourse', value: 'New Course Title' },
//   });

//   expect(mockSetBasicInfo).toHaveBeenCalledTimes(1);
//   expect(mockSetBasicInfo).toHaveBeenCalledWith({
//     ...basicInfo,
//     titlecourse: 'New Course Title',
//   });
// });

// test('handles ShortDescription textarea change', () => {
//   render(<Basic basicInfo={basicInfo} setBasicInfo={mockSetBasicInfo} />);

//   fireEvent.change(screen.getByPlaceholderText('Item description here...'), {
//     target: { name: 'ShortDescription', value: 'New Short Description' },
//   });

//   expect(mockSetBasicInfo).toHaveBeenCalledTimes(1);
//   expect(mockSetBasicInfo).toHaveBeenCalledWith({
//     ...basicInfo,
//     ShortDescription: 'New Short Description',
//   });
// });

// test('handles Whatlearn textarea change', () => {
//   render(<Basic basicInfo={basicInfo} setBasicInfo={mockSetBasicInfo} />);

//   fireEvent.change(screen.getByLabelText('What will students learn in your course?*'), {
//     target: { name: 'Whatlearn', value: 'New Learning Outcome' },
//   });

//   expect(mockSetBasicInfo).toHaveBeenCalledTimes(1);
//   expect(mockSetBasicInfo).toHaveBeenCalledWith({
//     ...basicInfo,
//     Whatlearn: 'New Learning Outcome',
//   });
// });

// test('handles courseLevel select change', async () => {
//     render(<Basic basicInfo={basicInfo} setBasicInfo={mockSetBasicInfo} />);
  
//     // Find the Select element by its role and name
//     const selectElement = screen.getByRole('combobox', { name: /course level/i });
    
//     // Open the Select dropdown
//     userEvent.click(selectElement);
  
//     // Wait for options to be visible
//     await waitFor(() => {
//       // Ensure options are visible in the dropdown
//       expect(screen.getByText('Beginner')).toBeInTheDocument();
//       expect(screen.getByText('Intermediate')).toBeInTheDocument();
//       expect(screen.getByText('Advanced')).toBeInTheDocument();
//     });
  
//     // Select an option
//     userEvent.click(screen.getByText('Intermediate'));
  
//     // Verify that setBasicInfo is called with the correct value
//     expect(mockSetBasicInfo).toHaveBeenCalledTimes(1);
//     expect(mockSetBasicInfo).toHaveBeenCalledWith({
//       ...basicInfo,
//       courseLevel: 'Intermediate',
//     });
//   });

// test('handles audioLanguage select change', async () => {
//   render(<Basic basicInfo={basicInfo} setBasicInfo={mockSetBasicInfo} />);

//   await userEvent.selectOptions(screen.getByPlaceholderText('Select audio'), ['Spanish']);

//   expect(mockSetBasicInfo).toHaveBeenCalledTimes(1);
//   expect(mockSetBasicInfo).toHaveBeenCalledWith({
//     ...basicInfo,
//     audioLanguage: 'Spanish',
//   });
// });

// test('handles closeCaption select change', async () => {
//   render(<Basic basicInfo={basicInfo} setBasicInfo={mockSetBasicInfo} />);

//   await userEvent.selectOptions(screen.getByPlaceholderText('Select caption'), ['French']);

//   expect(mockSetBasicInfo).toHaveBeenCalledTimes(1);
//   expect(mockSetBasicInfo).toHaveBeenCalledWith({
//     ...basicInfo,
//     closeCaption: 'French',
//   });
// });

// test('handles courseCategory select change', async () => {
//   render(<Basic basicInfo={basicInfo} setBasicInfo={mockSetBasicInfo} />);

//   await userEvent.selectOptions(screen.getByPlaceholderText('Web Development'), ['Data Science']);

//   expect(mockSetBasicInfo).toHaveBeenCalledTimes(1);
//   expect(mockSetBasicInfo).toHaveBeenCalledWith({
//     ...basicInfo,
//     courseCategory: 'Data Science',
//   });
// });

test('matches snapshot', () => {
  const tree = renderer
    .create(<Basic basicInfo={basicInfo} setBasicInfo={mockSetBasicInfo} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
