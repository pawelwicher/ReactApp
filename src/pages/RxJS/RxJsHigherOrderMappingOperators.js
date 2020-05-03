import React, { useEffect } from 'react';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { tap, map, concatMap, mergeMap, switchMap } from 'rxjs/operators';

export default function RxJsHigherOrderMappingOperators() {

  useEffect(() => {
    const getById = (id) => ajax.getJSON('https://pawelwicher.github.io/static-json-api/test.json').pipe(
      map(response => response.find(x => x.id === id)),
    );

    const subscription1 = of(1, 2, 3).pipe(
      concatMap(getById),
      tap(x => console.log('concatMap: ' + JSON.stringify(x))),
    ).subscribe();

    const subscription2 = of(5, 6, 7).pipe(
      mergeMap(getById),
      tap(x => console.log('mergeMap: ' + JSON.stringify(x))),
    ).subscribe();

    const subscription3 = of(12, 13, 14).pipe(
      switchMap(getById),
      tap(x => console.log('switchMap: ' + JSON.stringify(x))),
    ).subscribe();   

    return () => {
      subscription1.unsubscribe();
      subscription2.unsubscribe();
      subscription3.unsubscribe();
    }
  }, []);

  const code = `
const getById = (id) => ajax.getJSON('https://pawelwicher.github.io/static-json-api/test.json').pipe(
  map(response => response.find(x => x.id === id)),
);

const subscription1 = of(1, 2, 3).pipe(
  concatMap(getById),
  tap(x => console.log('concatMap: ' + JSON.stringify(x))),
).subscribe();

const subscription2 = of(5, 6, 7).pipe(
  mergeMap(getById),
  tap(x => console.log('mergeMap: ' + JSON.stringify(x))),
).subscribe();

const subscription3 = of(12, 13, 14).pipe(
  switchMap(getById),
  tap(x => console.log('switchMap: ' + JSON.stringify(x))),
).subscribe();
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