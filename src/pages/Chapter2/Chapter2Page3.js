import React from 'react';

const Chapter2Page3 = () => {
  const code = `
let i = 1
let a = (1, 2)
let xs = [1; 2; 3]
    `;

  return (
    <>
      <h1 className="display-4">Chapter 2 - Page 3</h1>
      <p className="lead">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa. 
      Sit amet aliquam id diam maecenas ultricies mi eget. In nisl nisi scelerisque 
      eu ultrices vitae auctor eu augue. Neque sodales ut etiam sit amet nisl.
      </p>
      <br/>
      <pre><code>{code}</code></pre>
    </>
  );
}

export default Chapter2Page3;