import React, { useEffect } from 'react';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export default function RxJsTransformationOperators() {

  useEffect(() => {
    const source = of(2, 3, 5);
    const subscription = source
      .pipe(map(x => x * 2))
      .subscribe(console.log);

    return () => subscription.unsubscribe();
  }, []);

  const code = `
const source = of(2, 3, 5);
const subscription = source
  .pipe(map(x => x * 2))
  .subscribe(console.log);
`;

  return (
    <>
      <h1 className="display-4">RxJS transformation operators</h1>
      <br/>
      <pre className="text-monospace">
        <code>{code}</code>
      </pre>
    </>
  );
}