import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import Contact_us from '.';

test('test Contact_us Page', () => {
  const tree = renderer.create(
      <MemoryRouter>
        <Contact_us/>
      </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
