import React from 'react';
import { Navbar } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import '../../src/css/mattlinenberger.css';

class NavMenu extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Matt Linenberger</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#aboutSection">About</Nav.Link>
              <Nav.Link href="#skillSection">Skills</Nav.Link>
              <Nav.Link href="#projectSection">Projects</Nav.Link>
              <Nav.Link href="#contactSection">Contact</Nav.Link>

            </Nav>
          </Navbar>
        )
    }

}
export default NavMenu;