import React, { Component } from "react";
import "./about.scss";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="about_title">
          <h1>About Me</h1>
        </div>
        <div id="about_description">
          <p>
            My name is Ed Woulfe. I am a recent college graduation with a degree
            in Computer Science.
          </p>
          <p>
            During my studies I found my passion for web development. Since then
            I have been constantly learning about the web and the skills needed.
          </p>
          <p>
            I am excited to keep learning more, improving my skills and working
            with others to make respectable and beautiful websites.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
