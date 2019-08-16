import React, { Component } from "react";
import "./jumbotron.scss";
import Title from "./title";
import NavigationBar from "../Navigation/navigation-container";
import SkillsContainer from "../Skills/skills-container";

class JumbotronContainer extends Component {
  state = {};
  render() {
    return (
      <div id="jumbotron_container">
        <div id="overlay">
          <NavigationBar />
          <Title />
        </div>
        <SkillsContainer />
      </div>
    );
  }
}

export default JumbotronContainer;
