import React from 'react';
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap'

export default class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React Bootstrap Sandbox</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown eventKey={1} title="Settings" >
            <MenuItem eventKey={1.1}>Profile</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.2}>Sign out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}
