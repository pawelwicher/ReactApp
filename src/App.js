import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Home from './pages/Home';
import FunctionComponent from './pages/React/FunctionComponent/FunctionComponent';
import JestExamples from './pages/React/Jest/JestExamples';
import RxJsCreationOperators from './pages/RxJS/RxJsCreationOperators';
import RamdaComposition from './pages/Ramda/RamdaComposition';

const App = () =>
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
            <NavDropdown.Item href="#rxjs/creation-operators">RxJs creation operators</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Ramda" id="basic-nav-dropdown">
            <NavDropdown.Item href="#ramda/composition">Ramda function composition</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="container">
      <Route exact path="/" component={Home}/>
      <Route path="/react/function-component" component={FunctionComponent}/>
      <Route path="/react/jest-examples" component={JestExamples}/>
      <Route path="/rxjs/creation-operators" component={RxJsCreationOperators}/>
      <Route path="/ramda/composition" component={RamdaComposition}/>
    </div>
  </HashRouter>


export default App;