import React, { Component } from "react";
import { Row, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

class LolChampionsProject extends Component {
  state = {};
  render() {
    return (
      <Fade right>
        <React.Fragment>
          <Row className="project_rows" id="lol_champions_row">
            <div className="col-2 filler_col" />
            <div id="first_project_description" className="col-lg-4 col-xs-6">
              <h4>LoL Champions</h4>
              <p>
                This website displays data on the games champions. This data
                consists of the champions stats, abilities, and skins. All taken
                from the offical Riot API.
              </p>
              <p>
                Other data retrieved from the API include: which champions are
                free to play this week and which champions are being played the
                most in a given ranked tier.
              </p>

              <Button className="code_button">Code</Button>
              <Button className="website_button">Live Website</Button>

              <div className="tech_stack">
                <ul>
                  <li>ReactJS</li>
                  <li>APIs</li>
                  <li>Bootstrap</li>
                  <li>Sass</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-xs-6 image_col">
              <p>Hover over the image to get a brief glimpse of the website.</p>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow_down"
                size="lg"
              />
              <div id="lol_champions_link" />
            </div>
            <div className="col-2 filler_col" />
          </Row>
        </React.Fragment>
      </Fade>
    );
  }
}

export default LolChampionsProject;
