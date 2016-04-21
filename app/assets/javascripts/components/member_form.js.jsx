import React from 'react';
import {Input} from 'react-bootstrap';

export default class MemberForm extends React.Component {
  render() {
    return (
      <form>
        <Input type="text" label="Number" />
        <Input type="text" label="Name" placeholder="Name text" />
        <Input type="select" label="Position">
          <option value="FW">FW</option>
          <option value="MF">MF</option>
          <option value="DF">DF</option>
          <option value="GK">GK</option>
        </Input>
      </form>
    );
  }
}
