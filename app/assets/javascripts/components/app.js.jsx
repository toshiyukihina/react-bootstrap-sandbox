import React from 'react';
import Header from './header';
import SideNav from './side_nav';
import AddMember from './add_member';
import Members from './members';
import {Grid, Row, Col, Tabs, Tab} from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <div class="wrap">
        <Header />
        <Grid>
          <Row>
            <Col md={3}>
              <SideNav />
            </Col>
            <Col md={9}>
              <AddMember />

              <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title="Start">
                  <Members />
                </Tab>
                <Tab eventKey={2} title="Sub"></Tab>
                <Tab eventKey={3} title="Other"></Tab>
              </Tabs>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
