import React from 'react';

export default function JestExamples() {

  const code = `
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from './App';
import Home from './Home';

// jest-dom
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i, { selector: 'a' });
  expect(linkElement).toBeInTheDocument();
});


it('Home renders correctly', () => {
const tree = renderer
  .create(<Home />)
  .toJSON();
expect(tree).toMatchSnapshot();
});

test('1 + 1 = 2', () => {
  expect(1 + 1).toBe(2);
});

it('5 + 5 = 10', () => {
  expect(5 + 5).toBe(10);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage 1', () => {
  beforeAll(() => {
    console.log('111');
  });

  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});

describe('my beverage 2', () => {
  beforeAll(() => {
    console.log('222');
  });

  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});

test.todo('add should be associative');

test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  expect(a + b).toBe(expected);
});

test.each\`
  a    | b    | expected
  \${1} | \${1} | \${2}
  \${1} | \${2} | \${3}
  \${2} | \${1} | \${3}
\`('returns $expected when $a is added $b', ({a, b, expected}) => {
  expect(a + b).toBe(expected);
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});
`;

  return (
    <>
      <h1 className="display-4">Jest testing</h1>
      <br/>
      <pre className="text-monospace">
        <code>{code}</code>
      </pre>
    </>
  );
}