import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import {Navbar,Nav, FormControl, Button, Form} from 'react-bootstrap';
import './App.css';
import Routes from './Routes';

class App extends Component{
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect> 
           {/* <Navbar.Brand>
              <Link to="/">
                Scratch
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle /> */}
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
        </Navbar>  
        <Routes /> 
      </div>
    );
  } 
}
export default App;
