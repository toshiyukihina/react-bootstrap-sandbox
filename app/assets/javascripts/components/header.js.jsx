import React from 'react';
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React Bootstrap Sandbox</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown id={1} eventKey={1} title="Settings" >
            <MenuItem id={1.1} eventKey={1.1}>Profile</MenuItem>
            <MenuItem divider />
            <MenuItem id={1.3} eventKey={1.2}>Sign out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}
