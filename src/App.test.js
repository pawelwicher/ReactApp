import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i, { selector: 'a' });
  expect(linkElement).toBeInTheDocument();
});

test('1 + 1 = 2', () => {
  expect(1 + 1).toBe(2);
});
