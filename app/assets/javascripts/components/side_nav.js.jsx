import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

export default class SideNav extends React.Component {
  render() {
    return (
      <Nav bsStyle="pills" activeKey={1} stacked>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavItem eventKey={3} href="#">Contact</NavItem>
      </Nav>
    );
  }
}
