// import React from 'react';
// import renderer from 'react-test-renderer';
// import '@testing-library/jest-dom/extend-expect';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router-dom';
// import { store } from '../../../redux/store';
// import SendFeedbackPage from '..';

// test('test Certification Test Page', () => {
//   const tree = renderer.create(
//     <Provider store={store}>
//       <MemoryRouter>
//         <SendFeedbackPage/>
//       </MemoryRouter>
//     </Provider>
//   ).toJSON();
//   expect(tree).toMatchSnapshot();
// });

import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import SendFeedbackPage from '.';

// Snapshot test
test('SendFeedbackPage snapshot test', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <SendFeedbackPage />
      </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// Interaction tests
test('renders SendFeedbackPage with input fields and submit button', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <SendFeedbackPage />
      </MemoryRouter>
    </Provider>
  );

  // Check if the input fields and button are rendered
  expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Describe your issue or share your ideas')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Send Feedback' })).toBeInTheDocument();
});

test('input fields should be able to change value', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <SendFeedbackPage />
      </MemoryRouter>
    </Provider>
  );

  const emailInput = screen.getByPlaceholderText('Email address');
  const describeInput = screen.getByPlaceholderText('Describe your issue or share your ideas');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(describeInput, { target: { value: 'This is a test feedback.' } });

  expect(emailInput.value).toBe('test@example.com');
  expect(describeInput.value).toBe('This is a test feedback.');
});

test('displays error messages on invalid submit', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <SendFeedbackPage />
      </MemoryRouter>
    </Provider>
  );

  const submitButton = screen.getByRole('button', { name: 'Send Feedback' });

  // Click the submit button without filling the inputs
  fireEvent.click(submitButton);

  expect(await screen.findByText((content, element) => 
    content.includes('Email and Describe fields are required')
  )).toBeInTheDocument();

  const emailInput = screen.getByPlaceholderText('Email address');
  fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
});
