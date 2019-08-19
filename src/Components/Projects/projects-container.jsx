import React, { Component } from "react";
import "./projects.scss";
import LolChampionsProject from "./lol-champions";
import BdoProfitProject from "./bdo-profit";
import PersonalPortfoioProject from "./personal-portfolio";

class ProjectsContainer extends Component {
  state = {};
  render() {
    return (
      <div id="projects_container">
        <h1>Projects</h1>
        <LolChampionsProject />
        <BdoProfitProject />
        <PersonalPortfoioProject />
      </div>
    );
  }
}

export default ProjectsContainer;
