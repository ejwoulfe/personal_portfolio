import React from "react";
import "react-bootstrap/dist/react-bootstrap.min.js";
import JumbotronContainer from "./Components/Jumbotron/jumbotron-container";
import SkillsContainer from "./Components/Skills/skills-container";
import ProjectsContainer from "./Components/Projects/projects-container";
function App() {
  return (
    <div className="App">
      <JumbotronContainer />
      <SkillsContainer />
      <ProjectsContainer />
    </div>
  );
}

export default App;
