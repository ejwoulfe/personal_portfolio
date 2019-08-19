import React, { Component } from "react";
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
    others: ["Jira", "Github", "Gitlab", "Figma", "npm", "Rest API"],
    otherIcons: [
      <FontAwesomeIcon icon={faJira} size="2x" style={{ color: "#2680F8" }} />,
      <FontAwesomeIcon
        icon={faGithubSquare}
        size="2x"
        style={{ color: "#000000" }}
      />,
      <FontAwesomeIcon
        icon={faGitlab}
        size="2x"
        style={{ color: "#F59F25" }}
      />,
      <FontAwesomeIcon icon={faFigma} size="2x" style={{ color: "#F86F5F" }} />,
      <FontAwesomeIcon icon={faNpm} size="2x" style={{ color: "#C63736" }} />,
      <h5 id="rest_api">{"{ REST }"}</h5>
    ]
  };

  render() {
    const listOfLanguages = this.state.others.map((language, index) => (
      <span>
        {this.state.otherIcons[index]}
        <li key={language}>{language}</li>
      </span>
    ));
    return (
      <div
        id="others_container"
        className="language_container col-xs-12 col-md-6 col-lg-4"
      >
        <h3>Tools</h3>
        <ul>{listOfLanguages}</ul>
      </div>
    );
  }
}

export default Other;
