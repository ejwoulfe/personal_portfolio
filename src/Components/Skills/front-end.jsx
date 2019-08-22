import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faSass,
  faReact,
  faBootstrap
} from "@fortawesome/free-brands-svg-icons";

class FrontEnd extends Component {
  state = {
    frontEndLanguages: [
      "html5",
      "CSS3",
      "Javascript",
      "Sass",
      "ReactJS",
      "Bootstrap"
    ],
    frontEndIcons: [
      <FontAwesomeIcon icon={faHtml5} size="2x" style={{ color: "#E34F26" }} />,
      <FontAwesomeIcon
        icon={faCss3Alt}
        size="2x"
        style={{ color: "#205FAA" }}
      />,
      <FontAwesomeIcon
        icon={faJsSquare}
        size="2x"
        style={{ color: "#EFD91E" }}
      />,
      <FontAwesomeIcon icon={faSass} size="2x" style={{ color: "#CE679B" }} />,
      <FontAwesomeIcon icon={faReact} size="2x" style={{ color: "#50D5EF" }} />,
      <FontAwesomeIcon
        icon={faBootstrap}
        size="2x"
        style={{ color: "#633E91" }}
      />
    ]
  };

  render() {
    const listOfLanguages = this.state.frontEndLanguages.map(
      (language, index) => (
        <span>
          {this.state.frontEndIcons[index]}
          <li key={language}>{language}</li>
        </span>
      )
    );
    return (
      <div
        id="front_end_container"
        className="language_container col-xs-12 col-md-6 col-lg-4"
      >
        <h2>Front End</h2>
        <ul>{listOfLanguages}</ul>
      </div>
    );
  }
}

export default FrontEnd;
