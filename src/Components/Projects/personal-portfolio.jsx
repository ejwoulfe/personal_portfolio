import React, { Component } from "react";
import { Row, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

class PersonalPortfoioProject extends Component {
  state = {};
  render() {
    return (
      <Fade right>
        <React.Fragment>
          <Row className="project_rows">
            <div className="col-2 filler_col" />
            <div id="third_project_description" className="col-lg-4 col-xs-6">
              <h4>Personal Portfolio</h4>
              <p>Personal</p>
              <Button className="code_button">Code</Button>
              <Button className="website_button">Live Website</Button>
            </div>
            <div id="personal_portfolio_link" className="col-lg-4 col-xs-6">
              <img src="" alt="Personal Portfolio website" />
            </div>
            <div className="col-2 filler_col" />
          </Row>
        </React.Fragment>
      </Fade>
    );
  }
}

export default PersonalPortfoioProject;
