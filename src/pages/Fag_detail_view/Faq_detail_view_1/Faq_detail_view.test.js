import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Faq_detail_view from '.';

test('test Faq_detail_view', () => {
  const tree = renderer.create(
      <MemoryRouter>
        <Faq_detail_view/>
      </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
