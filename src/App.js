import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Home from './pages/Home';
import Chapter1Page1 from './pages/Chapter1/Chapter1Page1';
import Chapter1Page2 from './pages/Chapter1/Chapter1Page2';
import Chapter1Page3 from './pages/Chapter1/Chapter1Page3';
import Chapter2Page1 from './pages/Chapter2/Chapter2Page1';
import Chapter2Page2 from './pages/Chapter2/Chapter2Page2';
import Chapter2Page3 from './pages/Chapter2/Chapter2Page3';

const App = () =>
  <HashRouter>
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#/">Home</Nav.Link>
          <NavDropdown title="Chapter 1" id="basic-nav-dropdown">
            <NavDropdown.Item href="#chapter1/page1">Page 1</NavDropdown.Item>
            <NavDropdown.Item href="#chapter1/page2">Page 2</NavDropdown.Item>
            <NavDropdown.Item href="#chapter1/page3">Page 3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Chapter 2" id="basic-nav-dropdown">
            <NavDropdown.Item href="#chapter2/page1">Page 1</NavDropdown.Item>
            <NavDropdown.Item href="#chapter2/page2">Page 2</NavDropdown.Item>
            <NavDropdown.Item href="#chapter2/page3">Page 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="container">
      <Route exact path="/" component={Home}/>
      <Route path="/chapter1/page1" component={Chapter1Page1}/>
      <Route path="/chapter1/page2" component={Chapter1Page2}/>
      <Route path="/chapter1/page3" component={Chapter1Page3}/>
      <Route path="/chapter2/page1" component={Chapter2Page1}/>
      <Route path="/chapter2/page2" component={Chapter2Page2}/>
      <Route path="/chapter2/page3" component={Chapter2Page3}/>
    </div>
  </HashRouter>


export default App;