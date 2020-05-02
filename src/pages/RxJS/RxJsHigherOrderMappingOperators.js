import React, { useEffect } from 'react';
import { of } from 'rxjs';
import { tap, concatMap, mergeMap, switchMap } from 'rxjs/operators';

export default function RxJsHigherOrderMappingOperators() {

  useEffect(() => {
    //of
    //concatMap
    //mergeMap,
    //switchMap 

    //return () => subscription.unsubscribe();
  }, []);

  const code = `
todo
`;

  return (
    <>
      <h1 className="display-4">RxJS higher-order mapping operators</h1>
      <br/>
      <pre className="text-monospace">
        <code>{code}</code>
      </pre>
    </>
  );
}