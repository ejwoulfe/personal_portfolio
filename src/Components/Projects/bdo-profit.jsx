import React, { Component } from "react";
import { Row, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

class BdoProfitProject extends Component {
  state = {};
  render() {
    return (
      <Fade left>
        <React.Fragment>
          <Row className="project_rows" id="bdoprofit_row">
            <div className="col-2 filler_col" />

            <div className="col-lg-4 col-xs-6">
              <div id="bdo_profit_link" />
            </div>
            <div id="second_project_description" className="col-lg-4 col-xs-6">
              <h4>BDO Profit</h4>
              <p>BDO Profit is a website.</p>
              <Button>Code</Button>
              <Button>Live Website</Button>
            </div>
            <div className="col-2 filler_col" />
          </Row>
        </React.Fragment>
      </Fade>
    );
  }
}

export default BdoProfitProject;
