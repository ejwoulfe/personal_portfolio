import React, { Component } from "react";

class FrontEnd extends Component {
  state = {
    frontEndLanguages: [
      "html5",
      "CSS3",
      "Javascript",
      "Sass",
      "ReactJS",
      "Bootstrap"
    ]
  };

  render() {
    const listOfLanguages = this.state.frontEndLanguages.map(language => (
      <li key={language}>{language}</li>
    ));
    return (
      <div
        id="front_end_container"
        className="language_container col-xs-12 col-md-6 col-lg-4"
      >
        <h3>Front End</h3>
        <ul>{listOfLanguages}</ul>
      </div>
    );
  }
}

export default FrontEnd;
