import React, { useEffect } from 'react';
import { of, range } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, map, mergeMap, pluck, switchMap, tap, delay } from 'rxjs/operators';

export default function RxJsTransformationOperators() {

  useEffect(() => {
    const source = of(2, 3, 5);
    const subscription1 = source
      .pipe(map(x => x * 2))
      .subscribe(console.log);

    const values = range(1, 5).pipe(map(x => ({ x })), pluck('x'));
    const subscription2 = values.subscribe(console.log);

    const getById = (id) => ajax.getJSON('https://pawelwicher.github.io/static-json-api/test.json').pipe(
      map(response => response.find(x => x.id === id)), delay(1000)
    );

    const subscription3 = of(1, 2, 3).pipe(
      concatMap(getById),
      tap(x => console.log('concatMap: ' + JSON.stringify(x))),
    ).subscribe();

    const subscription4 = of(5, 6, 7).pipe(
      mergeMap(getById),
      tap(x => console.log('mergeMap: ' + JSON.stringify(x))),
    ).subscribe();

    const subscription5 = of(12, 13, 14).pipe(
      switchMap(getById),
      tap(x => console.log('switchMap: ' + JSON.stringify(x))),
    ).subscribe();   

    return () => {
      subscription1.unsubscribe();
      subscription2.unsubscribe();
      subscription3.unsubscribe();
      subscription4.unsubscribe();
      subscription5.unsubscribe();
    }
  }, []);

  const code = `
const source = of(2, 3, 5);
const subscription1 = source
  .pipe(map(x => x * 2))
  .subscribe(console.log);

const values = range(1, 5).pipe(map(x => ({ x })), pluck('x'));
const subscription2 = values.subscribe(console.log);

const getById = (id) => ajax.getJSON('https://pawelwicher.github.io/static-json-api/test.json').pipe(
  map(response => response.find(x => x.id === id)), delay(1000)
);

const subscription3 = of(1, 2, 3).pipe(
  concatMap(getById),
  tap(x => console.log('concatMap: ' + JSON.stringify(x))),
).subscribe();

const subscription4 = of(5, 6, 7).pipe(
  mergeMap(getById),
  tap(x => console.log('mergeMap: ' + JSON.stringify(x))),
).subscribe();

const subscription5 = of(12, 13, 14).pipe(
  switchMap(getById),
  tap(x => console.log('switchMap: ' + JSON.stringify(x))),
).subscribe();
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