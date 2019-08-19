import React, { Component } from "react";
import { Row } from "react-bootstrap";

class LolChampionsProject extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row className="project_rows">
          <div className="col-2 filler_col" />
          <div id="first_project_description" className="col-lg-4 col-xs-6">
            <h4>Lol Champions</h4>
            <p>LoL Champions is a website.</p>
          </div>
          <div id="lol_champs_link" className="col-lg-4 col-xs-6">
            <img src="" alt="LoL Champions website image" />
          </div>
          <div className="col-2 filler_col" />
        </Row>
      </React.Fragment>
    );
  }
}

export default LolChampionsProject;
