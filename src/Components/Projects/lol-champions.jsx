import React, { Component } from "react";
import { Row, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

class LolChampionsProject extends Component {
  state = {};
  render() {
    return (
      <Fade right>
        <React.Fragment>
          <Row className="project_rows" id="lol_champions_row">
            <div className="col-2 filler_col" />
            <div id="first_project_description" className="col-lg-4 col-xs-6">
              <h4>LoL Champions</h4>
              <p>LoL Champions is a website.</p>
              <Button>Code</Button>
              <Button>Live Website</Button>
            </div>
            <div className="col-lg-4 col-xs-6">
              <div id="lol_champions_link" />
            </div>
            <div className="col-2 filler_col" />
          </Row>
        </React.Fragment>
      </Fade>
    );
  }
}

export default LolChampionsProject;
