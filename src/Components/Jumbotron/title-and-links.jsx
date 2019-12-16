import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChangeColorTheme from "./change-color-button";
import pdf from "../../Assets/Edmond_Woulfe_Resume.pdf";

function TitleAndLinks() {
  return (
    <div id="title_container">
      <h1>Web Developer</h1>
      <div id="code_links_container">
        <span>
          <a
            href="https://github.com/ejwoulfe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <h5>Github</h5>
        </span>
        <span>
          <a href={pdf} target="_blank" rel="noopener noreferrer" download>
            <FontAwesomeIcon icon={faFile} size="2x" />
          </a>
          <h5>Resume</h5>
        </span>
      </div>
      <ChangeColorTheme />
    </div>
  );
}
export default TitleAndLinks;
