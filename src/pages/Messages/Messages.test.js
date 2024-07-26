import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Messages from './index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  savedCourse: {
    isShowAll: false,
  }
};

const mockReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_ALL':
      return {
        ...state,
        savedCourse: {
          ...state.savedCourse,
          isShowAll: !state.savedCourse.isShowAll,
        }
      };
    default:
      return state;
  }
};

const store = createStore(mockReducer);

describe('Messages Component', () => {
  test('renders Messages component correctly', () => {
    render(
      <Provider store={store}>
        <Messages />
      </Provider>
    );

    expect(screen.getByRole('heading', { name: /Messages/i })).toBeInTheDocument();

    const messages = [
      'Hi! Sir, How are you. I ask you one thing pl...',
      'Hello, I paid you video tutorial but did not...',
      'Thanks Sir, Such a nice video.',
      'Hi! Sir, this is a purchase key CFKX12536...',
      'Pls! Upload .NET Course',
      'Hi Sir thank you very very much for bootst...',
      'Thank you! Sir',
      'Hey!',
    ];

    messages.forEach(message => {
      expect(screen.getByText(message)).toBeInTheDocument();
    });

    const currentChatMessages = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.',
      'Cras ultricies ligula.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.',
      '....'
    ];
  });

  test('search input filters messages', () => {
    render(
      <Provider store={store}>
        <Messages />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText(/Search Messages.../i);
    fireEvent.change(searchInput, { target: { value: 'Hi!' } });

    expect(screen.getByText('Hi! Sir, How are you. I ask you one thing pl...')).toBeInTheDocument();
    expect(screen.getByText('Hi! Sir, this is a purchase key CFKX12536...')).toBeInTheDocument();
  });

  test('chat input allows message sending', () => {
    render(
      <Provider store={store}>
        <Messages />
      </Provider>
    );

    const chatInput = screen.getByPlaceholderText(/Write a message.../i);
    fireEvent.change(chatInput, { target: { value: 'New message' } });

    expect(chatInput.value).toBe('New message');
  });
});