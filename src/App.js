import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HashRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import RamdaComposition from './pages/Ramda/RamdaComposition';
import RamdaCurrying from './pages/Ramda/RamdaCurrying';
import RamdaPascalTriangle from './pages/Ramda/RamdaPascalTriangle';
import FunctionComponent from './pages/React/FunctionComponent/FunctionComponent';
import JestExamples from './pages/React/Jest/JestExamples';
import RxJsCreationOperators from './pages/RxJS/RxJsCreationOperators';
import RxJsTransformationOperators from './pages/RxJS/RxJsTransformationOperators';

export default function App() {
  return (
    <HashRouter>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <NavDropdown title="React" id="basic-nav-dropdown">
              <NavDropdown.Item href="#react/function-component">Function component</NavDropdown.Item>
              <NavDropdown.Item href="#react/jest-examples">Jest testing</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="RxJS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#rxjs/creation-operators">RxJS creation operators</NavDropdown.Item>
              <NavDropdown.Item href="#rxjs/transformation-operators">RxJS transformation operators</NavDropdown.Item>         
            </NavDropdown>
            <NavDropdown title="Ramda" id="basic-nav-dropdown">
              <NavDropdown.Item href="#ramda/composition">Ramda function composition</NavDropdown.Item>
              <NavDropdown.Item href="#ramda/currying">Ramda function currying</NavDropdown.Item>
              <NavDropdown.Item href="#ramda/pascal-triangle">Ramda Pascal Triangle</NavDropdown.Item>            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <Route exact path="/" component={Home}/>
        <Route path="/react/function-component" component={FunctionComponent}/>
        <Route path="/react/jest-examples" component={JestExamples}/>
        <Route path="/rxjs/creation-operators" component={RxJsCreationOperators}/>
        <Route path="/rxjs/transformation-operators" component={RxJsTransformationOperators}/>
        <Route path="/ramda/composition" component={RamdaComposition}/>
        <Route path="/ramda/currying" component={RamdaCurrying}/>
        <Route path="/ramda/pascal-triangle" component={RamdaPascalTriangle}/>
      </div>
    </HashRouter>
  );
}