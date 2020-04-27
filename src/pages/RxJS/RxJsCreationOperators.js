import React, { useEffect } from 'react';
import { interval } from 'rxjs';

export default function RxJsCreationOperators() {

  useEffect(() => {
    const source = interval(1000);
    const subscription = source.subscribe(console.log);

    return () => subscription.unsubscribe();
  }, []);

  const code = `
const source = interval(1000);
const subscription = source.subscribe(console.log);
`;

  return (
    <>
      <h1 className="display-4">RxJS creation operators</h1>
      <br/>
      <pre className="text-monospace">
        <code>{code}</code>
      </pre>
    </>
  );
}