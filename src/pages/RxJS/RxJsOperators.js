import React, { useEffect, useState } from 'react';
import { interval, of, range, concat, merge, combineLatest, forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { bufferTime, take, concatMap, delay, map, mergeMap, pairwise, pluck, switchMap, tap } from 'rxjs/operators';

export default function RxJsOperators() {

  const buttonStyle = { width: '120px', marginRight: '20px', marginBottom: '10px' };

  const timer = interval(1000).pipe(take(5));
  const sequence = range(1, 10).pipe(map(x => 'item ' + x));

  const getById = (id) => ajax.getJSON('https://pawelwicher.github.io/static-json-api/test.json')
    .pipe(map(response => response.find(x => x.id === id)), delay(1000));

  const demos = {
    map() {
      return of(2, 3, 5).pipe(
        map(x => x * 2),
        tap(console.log)
      ).subscribe();
    },
    pluck() {
      return range(1, 5).pipe(
        map(x => ({ x })),
        pluck('x'),
        tap(console.log)
      ).subscribe();
    },
    bufferTime() {
      return interval(100).pipe(
        bufferTime(500),
        tap(console.log)
      ).subscribe();
    },
    pairwise() {
      return range(1, 10).pipe(
        pairwise(),
        tap(console.log)
      ).subscribe();
    },
    concat() {
      return concat(timer, sequence).pipe(
        tap(x => console.log('concat: ' + x))
      ).subscribe();
    },
    merge() {
      return merge(timer, sequence).pipe(
        tap(x => console.log('merge: ' + x))
      ).subscribe();
    },
    combineLatest() {
      return combineLatest(timer, sequence).pipe(
        tap(x => console.log('combineLatest: ' + x))
      ).subscribe();
    },
    forkJoin() {
      return forkJoin(timer, sequence).pipe(
        tap(x => console.log('forkJoin: ' + x))
      ).subscribe();
    },
    concatMap() {
      return of(1, 2, 3).pipe(
        concatMap(getById),
        tap(x => console.log('concatMap: ' + JSON.stringify(x))),
      ).subscribe();
    },
    mergeMap() {
      return of(5, 6, 7).pipe(
        mergeMap(getById),
        tap(x => console.log('mergeMap: ' + JSON.stringify(x))),
      ).subscribe();
    },
    switchMap() {
      return of(12, 13, 14).pipe(
        switchMap(getById),
        tap(x => console.log('switchMap: ' + JSON.stringify(x))),
      ).subscribe();
    }
  };

  const [demo, setDemo] = useState('map');

  const code = `
  const demos = {
    map() {
      return of(2, 3, 5).pipe(
        map(x => x * 2),
        tap(console.log)
      ).subscribe();
    },
    pluck() {
      return range(1, 5).pipe(
        map(x => ({ x })),
        pluck('x'),
        tap(console.log)
      ).subscribe();
    },
    bufferTime() {
      return interval(100).pipe(
        bufferTime(500),
        tap(console.log)
      ).subscribe();
    },
    pairwise() {
      return range(1, 10).pipe(
        pairwise(),
        tap(console.log)
      ).subscribe();
    },
    concat() {
      return concat(timer, sequence).pipe(
        tap(x => console.log('concat: ' + x))
      ).subscribe();
    },
    merge() {
      return merge(timer, sequence).pipe(
        tap(x => console.log('merge: ' + x))
      ).subscribe();
    },
    combineLatest() {
      return combineLatest(timer, sequence).pipe(
        tap(x => console.log('combineLatest: ' + x))
      ).subscribe();
    },
    forkJoin() {
      return forkJoin(timer, sequence).pipe(
        tap(x => console.log('forkJoin: ' + x))
      ).subscribe();
    },
    concatMap() {
      return of(1, 2, 3).pipe(
        concatMap(getById),
        tap(x => console.log('concatMap: ' + JSON.stringify(x))),
      ).subscribe();
    },
    mergeMap() {
      return of(5, 6, 7).pipe(
        mergeMap(getById),
        tap(x => console.log('mergeMap: ' + JSON.stringify(x))),
      ).subscribe();
    },
    switchMap() {
      return of(12, 13, 14).pipe(
        switchMap(getById),
        tap(x => console.log('switchMap: ' + JSON.stringify(x))),
      ).subscribe();
    }
  };
`;

  useEffect(() => {
    console.clear();
    const subscription = demos[demo]();
    return () => subscription.unsubscribe();
  });

  return (
    <>
      <h1 className="display-4">RxJS operators</h1>
      <br/>
      {Object.keys(demos).map(x => <button onClick={() => setDemo(x)} style={buttonStyle}>{x}</button>)}
      <pre className="text-monospace">
        <code>{code}</code>
      </pre>
    </>
  );
}