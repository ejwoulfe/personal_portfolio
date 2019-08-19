import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp, faJava } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

class BackEnd extends Component {
  state = {
    backEndLanguages: ["PHP", "MySQL", "Java", "Ajax"],
    backEndIcons: [
      <FontAwesomeIcon icon={faPhp} size="2x" style={{ color: "#7477AE" }} />,
      <FontAwesomeIcon
        icon={faDatabase}
        size="2x"
        style={{ color: "#005781" }}
      />,
      <FontAwesomeIcon icon={faJava} size="2x" style={{ color: "#D5370F" }} />,
      <FontAwesomeIcon
        icon={faSyncAlt}
        size="2x"
        style={{ color: "#00BBAB" }}
      />
    ]
  };

  render() {
    const listOfLanguages = this.state.backEndLanguages.map(
      (language, index) => (
        <span>
          {this.state.backEndIcons[index]}
          <li key={language}>{language}</li>
        </span>
      )
    );
    return (
      <div
        id="back_end_container"
        className="language_container col-xs-12 col-md-6 col-lg-4"
      >
        <h3>Back End</h3>
        <ul>{listOfLanguages}</ul>
      </div>
    );
  }
}

export default BackEnd;
