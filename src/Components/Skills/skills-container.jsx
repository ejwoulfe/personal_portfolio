import React, { Component } from "react";
import "./skills.scss";
import { Row } from "react-bootstrap";
import FrontEnd from "./front-end";
import BackEnd from "./back-end";
import Other from "./other";

class SkillsContainer extends Component {
  state = {};
  render() {
    return (
      <div id="skills_container">
        <h1 style={{ paddingBottom: "40px" }}>Skills</h1>
        <Row>
          <FrontEnd />
          <BackEnd />
          <Other />
        </Row>
      </div>
    );
  }
}

export default SkillsContainer;
