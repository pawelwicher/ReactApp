import React from 'react';
import * as R from 'ramda';

export default function RamdaPascalTriangle() {

  const triangle = (n, row, acc) => n === 0 ? acc : triangle(n - 1, [0, ...R.zipWith(R.add, R.init(row), R.tail(row)), 0], [...acc, row]);
  
  R.forEach(R.pipe(R.filter(x => x > 0), R.join(' '), console.log), triangle(7, [0, 1, 0], []));

  const code = `
const triangle = (n, row, acc) => n === 0 ? acc : triangle(n - 1, [0, ...R.zipWith(R.add, R.init(row), R.tail(row)), 0], [...acc, row]);
  
R.forEach(R.pipe(R.filter(x => x > 0), R.join(' '), console.log), triangle(7, [0, 1, 0], []));

// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
// 1 5 10 10 5 1
// 1 6 15 20 15 6 1
`;

  return (
    <>
      <h1 className="display-4">Ramda Pascal Triangle</h1>
      <br/>
      <pre className="text-monospace">
        <code>{code}</code>
      </pre>
    </>
  );
}