import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav, FormControl, Button, Form} from 'react-bootstrap';
// import {Navbar,Nav, FormControl, Button, Form} from 'reactstrap';
import './App.css';
import Routes from './Routes';

class App extends Component{
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Rotati</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Signup</Nav.Link>
          <Nav.Link href="#features">Login</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    );
  } 
}
export default App;
