import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default class MemberForm extends React.Component {
  render() {
    return (
      <form>
        <FormGroup controlId="formControlNumber">
          <ControlLabel>Number</ControlLabel>
          <FormControl type="text" />
        </FormGroup>
        <FormGroup controllId="formControlName">
          <ControlLabel>Name</ControlLabel>
          <FormControl type="text" />
        </FormGroup>
        <FormGroup controllId="formControlName">
          <ControlLabel>Position</ControlLabel>
          <FormControl componentClass="select">
            <option value="FW">FW</option>
            <option value="MF">MF</option>
            <option value="DF">DF</option>
            <option value="GK">GK</option>
          </FormControl>
        </FormGroup>
      </form>
    );
  }
}
