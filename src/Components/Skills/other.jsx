import React, { Component } from "react";

class Other extends Component {
  state = {
    others: ["Jira", "Github", "Gitlab", "Figma", "npm", "APIs"]
  };

  render() {
    const listOfLanguages = this.state.others.map(language => (
      <li key={language}>{language}</li>
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
