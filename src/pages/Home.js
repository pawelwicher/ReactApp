import React from 'react';
import logo from '../logo.svg';

export default function Home() {
  return (
    <>
      <h1 className="display-1">Hello</h1>
      <p className="text-monospace">
        Some Javascript, React, RxJS, Ramda, Jest and other stuff...
      </p>
      <div className="container text-center">
        <img src={logo} className="app-logo" alt="logo" />
      </div>
    </>
  );
}