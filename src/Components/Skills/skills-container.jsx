import React, { Component } from "react";
import "./skills.scss";
import { Row } from "react-bootstrap";
import FrontEnd from "./front-end";
import BackEnd from "./back-end";
import Other from "./other";

class SkillsContainer extends Component {
  render() {
    return (
      <div id="skills_container">
        <h1 className="heading_title">
          <img id="reverse_skills_icon" className="svg" alt="cog_wheel_icon" />
          Skills
          <img id="skills_icon" className="svg" alt="cog_wheel_icon" />
        </h1>
        <Row id="skills_row">
          <FrontEnd />
          <BackEnd />
          <Other />
        </Row>
      </div>
    );
  }
}

export default SkillsContainer;
