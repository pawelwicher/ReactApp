import React, { useEffect } from 'react';
import { concat, interval, forkJoin, range, merge, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';

export default function RxJsCreationOperators() {

  useEffect(() => {
    const timer = interval(1000).pipe(take(5));
    const sequence = range(1, 10).pipe(map(x => 'item ' + x));

    const subscription1 = concat(timer, sequence).subscribe(x => console.log('concat: ' + x));
    const subscription2 = merge(timer, sequence).subscribe(x => console.log('merge: ' + x));
    const subscription3 = combineLatest(timer, sequence).subscribe(x => console.log('combineLatest: ' + x));
    const subscription4 = forkJoin(timer, sequence).subscribe(x => console.log('forkJoin: ' + x));

    return () => {
      subscription1.unsubscribe();
      subscription2.unsubscribe();
      subscription3.unsubscribe();
      subscription4.unsubscribe();
    }
  }, []);

  const code = `
const timer = interval(1000).pipe(take(5));
const sequence = range(1, 10).pipe(map(x => 'item ' + x));

const subscription1 = concat(timer, sequence).subscribe(x => console.log('concat: ' + x));
const subscription2 = merge(timer, sequence).subscribe(x => console.log('merge: ' + x));
const subscription3 = combineLatest(timer, sequence).subscribe(x => console.log('combineLatest: ' + x));
const subscription4 = forkJoin(timer, sequence).subscribe(x => console.log('forkJoin: ' + x));
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