import React from 'react';
import Chapter1Page1 from './Chapter1Page1';
import renderer from 'react-test-renderer';

it(' Chapter1Page1 renders correctly', () => {
  const tree = renderer
    .create(<Chapter1Page1 />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});