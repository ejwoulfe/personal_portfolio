import React, { Component } from "react";
import "./projects.scss";
import LolChampionsProject from "./lol-champions";
import BdoProfitProject from "./bdo-profit";
import PersonalPortfoioProject from "./personal-portfolio";
import lolchampionsStatic from "../../Assets/lolchampionsstatic.jpg";
import bdoprofitStatic from "../../Assets/bdoprofitstatic.jpg";

class ProjectsContainer extends Component {
  state = {
    projects: {
      bdoProfit: {
        title: "BDO Profit",
        liveLink: "http://www.bdoprofit.com",
        codeLink: "https://github.com/ejwoulfe/BDOProfit",
        image: bdoprofitStatic,
        description:
          "BDO Profit is a tool to help calculate a recipe's costs and profits.The database was built using webscraping(from a website that gives permission) and holds all of the games recipes.Each recipe has their own materials.The user will enter in the costs of the materials and the sale price of the recipe once crafted.The website will then calculate if its profitable or not.",
        languages: [
          "HTML",
          "CSS",
          "Vanilla JS",
          "Bootstrap",
          "Sass",
          "PHP",
          "MySQL"
        ]
      },
      lolChampions: {
        title: "LoL Champions",
        liveLink: "https://pensive-visvesvaraya-5f7d28.netlify.com/",
        codeLink: "https://github.com/ejwoulfe/lol-champions",
        image: lolchampionsStatic,
        description1:
          "This website displays data on the games champions. This data consists of the champions stats, abilities, and skins. All taken from the offical Riot API.",
        description2:
          " Other data retrieved from the API include: which champions are free to play this week and which champions are being played the most in a given ranked tier.",
        languages: ["ReactJS", "APIs", "Bootstrap", "Sass"]
      },
      personalPortfolio: {
        title: "Personal Portfolio",
        liveLink: "http://edwoulfe.com",
        codeLink: "https://github.com/ejwoulfe/personal_portfolio",
        image: "",
        description: "Personal Website to display all my projects and links.",
        languages: ["ReactJS", "React-Router", "Bootstrap", "Sass"]
      }
    }
  };
  render() {
    return (
      <div id="projects_container">
        <h1>Projects</h1>
        <LolChampionsProject project={this.state.projects.lolChampions} />
        <BdoProfitProject project={this.state.projects.bdoProfit} />
        <PersonalPortfoioProject
          project={this.state.projects.personalPortfolio}
        />
      </div>
    );
  }
}

export default ProjectsContainer;
