import React, { Component } from "react";
import selfie from "../../Assets/self_image.jpg";
import "./about.scss";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="picture" className="col-sm-5">
          <img src={selfie} alt="Me"></img>
        </div>
        <div id="about_description" className="col-sm-4">
          <p>
            My name is Ed Woulfe. I am a recent college graduation with a degree
            in Computer Science.
          </p>
          <p>
            During my studies I discovered my passion for web development. Ever
            since, I have been studying and practicing in order to expand my web
            dev skills and knowledge.
          </p>
          <p>
            I am excited to keep learning more, improving my skills and working
            with others to make respectable and beautiful websites.
          </p>
          <p>
            All contact information can be found on my resume. A link is
            provided at the top of the page. Thank you!
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
