import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJira,
  faGithubSquare,
  faGitlab,
  faFigma,
  faNpm
} from "@fortawesome/free-brands-svg-icons";

class Other extends Component {
  state = {
    others: ["Jira", "Github", "Gitlab", "Figma", "npm"],
    otherIcons: [
      <FontAwesomeIcon icon={faJira} size="2x" style={{ color: "#2680F8" }} />,
      <FontAwesomeIcon
        icon={faGithubSquare}
        size="2x"
        style={{ color: "#919190" }}
      />,
      <FontAwesomeIcon
        icon={faGitlab}
        size="2x"
        style={{ color: "#F59F25" }}
      />,
      <FontAwesomeIcon icon={faFigma} size="2x" style={{ color: "#F86F5F" }} />,
      <FontAwesomeIcon icon={faNpm} size="2x" style={{ color: "#C63736" }} />
    ]
  };

  render() {
    const listOfLanguages = this.state.others.map((language, index) => (
      <span key={index}>
        {this.state.otherIcons[index]}
        <li key={language}>{language}</li>
      </span>
    ));
    return (
      <div
        id="others_container"
        className="language_container col-xs-12 col-md-6 col-lg-4"
      >
        <Fade left>
          <h3>Tools</h3>
          <ul>{listOfLanguages}</ul>
        </Fade>
      </div>
    );
  }
}

export default Other;
