import React from "react";
import "react-bootstrap/dist/react-bootstrap.min.js";
import JumbotronContainer from "./Components/Jumbotron/jumbotron-container";
import SkillsContainer from "./Components/Skills/skills-container";
import ProjectsContainer from "./Components/Projects/projects-container";
import AboutContainer from "./Components/About/about-container";

function App() {
  return (
    <div className="App">
      <JumbotronContainer />
      <SkillsContainer />

      <ProjectsContainer />

      <AboutContainer />
    </div>
  );
}

export default App;
