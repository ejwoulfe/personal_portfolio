import React, { Component } from "react";
import { Row } from "react-bootstrap";

class PersonalPortfoioProject extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row className="project_rows">
          <div className="col-2 filler_col" />
          <div id="third_project_description" className="col-lg-4 col-xs-6">
            <h4>Personal Portfolio</h4>
            <p>Personal</p>
          </div>
          <div id="personal_portfolio_link" className="col-lg-4 col-xs-6">
            <img src="" alt="Personal Portfolio website image" />
          </div>
          <div className="col-2 filler_col" />
        </Row>
      </React.Fragment>
    );
  }
}

export default PersonalPortfoioProject;
