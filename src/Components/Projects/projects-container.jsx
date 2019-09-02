import React, { Component } from "react";
import "./projects.scss";
import LolChampionsProject from "./lol-champions";
import BdoProfitProject from "./bdo-profit";
import PersonalPortfoioProject from "./personal-portfolio";
import lolchampionsStatic from "../../Assets/lol_champions_static.jpg";
import bdoprofitStatic from "../../Assets/bdo_profit_static.jpg";
import personalPortfolioStatic from "../../Assets/personal_portfolio_static.jpg";

class ProjectsContainer extends Component {
  state = {
    projects: {
      bdoProfit: {
        title: "BDO Profit",
        liveLink: "https://www.bdoprofit.com",
        codeLink: "https://github.com/ejwoulfe/BDOProfit",
        image: bdoprofitStatic,
        description: [
          "BDO Profit is based off the MMORPG Black Desert Online. The website is a tool for players who need help calculating the costs and profits of an ingame recipe or craft.",
          "The user searches for their desired recipe, either using the search bar or navigating the professions recipe table/database. Once the desired recipe is found a page will display all the required materials and their quanities.",
          "The user will enter the costs and the market price of the recipe into the corresponding input fields and the website will do all the calculations for them.",
          "The database was created via webscraping from a website which allows permission. Each recipe has a name, image, submaterials, and the corresponding quantities."
        ],
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
        description: [
          "LoL Champions is based off the popular MOBA game, League of Legends. This website is used to help a beginner player get a better understanding of the game and its champions.",
          "It shows which champions are free that week, which of them are being most played in all tiers, and detailed information about any champion.",
          "All of this information was retrieved by using the offical Riot API."
        ],
        languages: ["ReactJS", "React-Router", "APIs", "Bootstrap", "Sass"]
      },
      personalPortfolio: {
        title: "Personal Portfolio",
        liveLink: "https://edwoulfe.com",
        codeLink: "https://github.com/ejwoulfe/personal_portfolio",
        image: personalPortfolioStatic,
        description: [
          "This is my own personal website, currently used as a hub for all my projects, a bit about me, and contact information. Currently offered in a light or dark theme, Enjoy!"
        ],
        languages: ["ReactJS", "Bootstrap", "Sass"]
      }
    }
  };
  render() {
    return (
      <div id="projects_container">
        <h1 className="heading_title">Projects</h1>
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
