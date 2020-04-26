import React from 'react';
import Foo from './Foo';

export default function FunctionComponent() {

  const code = `
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
`;

  return (
    <>
      <h1 className="display-4">Function Component</h1>
      <br/>
      <pre className="text-monospace">
        <code>{code}</code>
      </pre>
      <Foo/>
    </>
  );
}