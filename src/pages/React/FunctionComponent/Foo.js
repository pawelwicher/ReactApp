import React, { useState } from 'react';

export default function Foo() {
  const defaultGreeting = 'Hello World';

  const [greeting, setGreeting] = useState(defaultGreeting);

  const setDefaultGreeting = () => setGreeting(defaultGreeting);
  
  return (
    <div>
    <h2>{greeting}</h2>
    <input type="text" value={greeting} onChange={event => setGreeting(event.target.value)} />
    <br/>
    <button onClick={setDefaultGreeting}>Default</button>
    </div>
  );
}