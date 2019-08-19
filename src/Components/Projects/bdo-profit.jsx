import React, { Component } from "react";
import { Row } from "react-bootstrap";

class BdoProfitProject extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row className="project_rows">
          <div className="col-2 filler_col" />

          <div id="bdo_profit_link" className="col-lg-4 col-xs-6">
            <img src="" alt="BDO Profit website image" />
          </div>
          <div id="second_project_description" className="col-lg-4 col-xs-6">
            <h4>BDO Profit</h4>
            <p>BDO Profit is a website.</p>
          </div>
          <div className="col-2 filler_col" />
        </Row>
      </React.Fragment>
    );
  }
}

export default BdoProfitProject;
