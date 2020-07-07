import React, { useEffect } from 'react';
import { from, fromEvent } from 'rxjs';
import { map, mergeMap, reduce, tap } from 'rxjs/operators';

export default function PigLatin() {
  const toPigLatin = (word) => {
    if (word.length < 2) {
      return word;
    }
    return word.slice(1) + '-' + word[0] + 'ay';
  };
  const textbox = React.createRef();
  const out = React.createRef();

  useEffect(() => {
    fromEvent(textbox.current, 'keyup')
    .pipe(
      map(event => event.target.value),
      mergeMap(s =>
        from(s.split(/\s+/))
        .pipe(
          map(toPigLatin),
          tap(console.log),
          reduce((acc, word) => acc + ' ' + word, '')
        )
      )
    )
    .subscribe(words => out.current.innerText = words);
  });

  return (
    <div style={{marginTop: '50px'}}>
      <span>Pig Latin</span>
      <br/>
      <input type="text" ref={textbox} />
      <br/>
      <span ref={out}></span>
    </div>
  )
}