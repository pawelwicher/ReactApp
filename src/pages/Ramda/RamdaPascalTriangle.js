import React from 'react';
import * as R from 'ramda';

export default function RamdaPascalTriangle() {

  function triangle(n, row, acc) {
    if (n === 0) {
      return acc;
    } else {
      acc = [...acc, row];
      row = [0, ...R.zipWith(R.add, R.init(row), R.tail(row)), 0];
      return triangle(n - 1, row, acc);
    }
  }
  
  R.forEach(console.log, triangle(7, [0, 1, 0], []));

  const code = `
function triangle(n, row, acc) {
  if (n === 0) {
    return acc;
  } else {
    acc = [...acc, row];
    row = [0, ...R.zipWith(R.add, R.init(row), R.tail(row)), 0];
    return triangle(n - 1, row, acc)
  }
}

R.forEach(console.log, triangle(7, [0, 1, 0], []));
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