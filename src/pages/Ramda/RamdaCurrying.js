import React from 'react';
import * as R from 'ramda';

export default function RamdaCurrying() {

  const sum = R.curry((a, b, c) => a + b + c);

  console.log('sum(1)(2)(3) =', sum(1)(2)(3));

  const code = `
const sum = R.curry((a, b, c) => a + b + c);

console.log('sum(1)(2)(3) =', sum(1)(2)(3));
`;

  return (
    <>
      <h1 className="display-4">Ramda function currying</h1>
      <br/>
      <pre className="text-monospace">
        <code>{code}</code>
      </pre>
    </>
  );
}