import React, { Component } from "react";
import About from "./about";

class AboutContainer extends Component {
  state = {};
  render() {
    return (
      <div id="about_container">
        <h1 className="heading_title">About Me</h1>
        <About />
      </div>
    );
  }
}

export default AboutContainer;
