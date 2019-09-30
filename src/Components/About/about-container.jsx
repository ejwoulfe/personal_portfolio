import React, { Component } from "react";
import About from "./about";
import { Row } from "react-bootstrap";
class AboutContainer extends Component {
  state = {};
  render() {
    return (
      <div id="about_container" className="container-fluid">
        <Row>
          <h1 className="heading_title col-sm-3">About Me</h1>
          <About />
        </Row>
      </div>
    );
  }
}

export default AboutContainer;
