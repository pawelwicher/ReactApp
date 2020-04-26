import React from 'react';
import * as R from 'ramda';

export default function JestExamples() {

  const addOne = x => x + 1;
  const double = x => x * 2;

  const doubleAndAddOneComposed = R.compose(addOne, double);
  const doubleAndAddOnePiped = R.pipe(double, addOne);

  console.log('doubleAndAddOneComposed(42) =', doubleAndAddOneComposed(42));
  console.log('doubleAndAddOnePiped(42) =', doubleAndAddOnePiped(42));

  const code = `
const addOne = x => x + 1;
const double = x => x * 2;

const doubleAndAddOneComposed = R.compose(addOne, double);
const doubleAndAddOnePiped = R.pipe(double, addOne);

console.log('doubleAndAddOneComposed(42) =', doubleAndAddOneComposed(42));
console.log('doubleAndAddOnePiped(42) =', doubleAndAddOnePiped(42));
`;

  return (
    <>
      <h1 className="display-4">Ramda function composition</h1>
      <br/>
      <pre className="text-monospace">
        <code>{code}</code>
      </pre>
    </>
  );
}