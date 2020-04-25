import React, { useState } from 'react';

function Foo() {  
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );
  
  function click() {
    setGreeting('hello');
  }
  
  return (
    <div>
    <h2>{greeting}</h2>
    <button onClick={click}>go</button>
    </div>
  );
}

export default Foo;