import React, { useEffect } from 'react';
import { from, fromEvent } from 'rxjs';
import { map, mergeMap, reduce } from 'rxjs/operators';

function toPigLatin(word) {
  if (word.length < 2) {
    return word;
  }
  return word.slice(1) + '-' + word[0] + 'ay';
}

export default function PigLatin() {

  useEffect(() => {
    const textbox = document.querySelector('input');
    const out = document.querySelector('#out');
    fromEvent(textbox, 'keyup')
    .pipe(
      map(event => event.target.value),
      mergeMap(s =>
        from(s.split(/\s+/))
        .pipe(
          map(toPigLatin),
          reduce((acc, word) => acc + ' ' + word, '')
        )
      )
    )
    .subscribe(words => out.innerText = words);
  });

  return (
    <div style={{marginTop: '50px'}}>
      <span>Pig Latin</span>
      <br/>
      <input type="text"/>
      <br/>
      <span id="out"></span>
    </div>
  )
}