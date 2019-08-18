import React, { Component } from "react";

class BackEnd extends Component {
  state = {
    backEndLanguages: ["PHP", "MySQL", "Ajax", "Java"]
  };

  render() {
    const listOfLanguages = this.state.backEndLanguages.map(language => (
      <li key={language}>{language}</li>
    ));
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
