import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Title() {
  return (
    <div id="title_container">
      <h1>Javascript Engineer</h1>
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
          <a
            href="https://github.com/ejwoulfe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <h5>Linkedin</h5>
        </span>
        <span>
          <a
            href="https://github.com/ejwoulfe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFile} size="2x" />
          </a>
          <h5>Resume</h5>
        </span>
      </div>
    </div>
  );
}
export default Title;
