import React, { useEffect, useState } from 'react';
import { of, range } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, delay, map, mergeMap, pluck, switchMap, tap, pairwise } from 'rxjs/operators';

export default function RxJsTransformationOperators() {

  const buttonStyle = { width: '100px', marginRight: '20px' };

  const getById = (id) => ajax.getJSON('https://pawelwicher.github.io/static-json-api/test.json')
    .pipe(map(response => response.find(x => x.id === id)), delay(1000));

  const demos = {
    map: () => {
      of(2, 3, 5)
        .pipe(map(x => x * 2))
        .subscribe(console.log);
    },
    pluck: () => {
      range(1, 5)
        .pipe(map(x => ({ x })), pluck('x'))
        .subscribe(console.log);
    },
    pairwise: () => {
      range(1, 10)
        .pipe(pairwise())
        .subscribe(console.log);
    },
    concatMap: () => {
      of(1, 2, 3).pipe(
        concatMap(getById),
        tap(x => console.log('concatMap: ' + JSON.stringify(x))),
      ).subscribe();
    },
    mergeMap: () => {
      of(5, 6, 7).pipe(
        mergeMap(getById),
        tap(x => console.log('mergeMap: ' + JSON.stringify(x))),
      ).subscribe();
    },
    switchMap: () => {
      of(12, 13, 14).pipe(
        switchMap(getById),
        tap(x => console.log('switchMap: ' + JSON.stringify(x))),
      ).subscribe();
    }
  };

  const [demo, setDemo] = useState('map');

  const code = `
of(2, 3, 5)
  .pipe(map(x => x * 2))
  .subscribe(console.log);

range(1, 5)
  .pipe(map(x => ({ x })), pluck('x'))
  .subscribe(console.log);

range(1, 10)
  .pipe(pairwise())
  .subscribe(console.log);


const getById = (id) => ajax.getJSON('https://pawelwicher.github.io/static-json-api/test.json')
  .pipe(map(response => response.find(x => x.id === id)), delay(1000));

of(1, 2, 3).pipe(
  concatMap(getById),
  tap(x => console.log('concatMap: ' + JSON.stringify(x))),
).subscribe();

of(5, 6, 7).pipe(
  mergeMap(getById),
  tap(x => console.log('mergeMap: ' + JSON.stringify(x))),
).subscribe();

of(12, 13, 14).pipe(
  switchMap(getById),
  tap(x => console.log('switchMap: ' + JSON.stringify(x))),
).subscribe();
`;

  useEffect(() => {
    console.clear();
    demos[demo]();
  });

  return (
    <>
      <h1 className="display-4">RxJS transformation operators</h1>
      <br/>
      {Object.keys(demos).map(x => <button onClick={() => setDemo(x)} style={buttonStyle}>{x}</button>)}
      <pre className="text-monospace">
        <code>{code}</code>
      </pre>
    </>
  );
}