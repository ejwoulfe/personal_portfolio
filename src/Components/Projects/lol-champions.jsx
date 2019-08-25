import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

class LolChampionsProject extends Component {
  render() {
    const builtWithList = this.props.project.languages.map(language => {
      return <li>{language}</li>;
    });
    return (
      <Fade left>
        <React.Fragment>
          <Row className="project_rows" id="lol_champions_row">
            <div className="col-2 filler_col" />
            <div id="first_project_description" className="col-lg-4 col-xs-6">
              <h4>{this.props.project.title}</h4>
              <div className="description_container">
                <p>{this.props.project.description1}</p>
                <p>{this.props.project.description2}</p>
              </div>
              <div id="buttons_container">
                <a
                  href={this.props.project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Code
                </a>
                <a
                  className="btn"
                  href={this.props.project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Website
                </a>
              </div>

              <div className="tech_stack">
                <h5>Built with:</h5>
                <ul>{builtWithList}</ul>
              </div>
            </div>
            <div className="col-lg-4 col-xs-6 image_col">
              <p>
                <b>Hover</b> over the image to get a brief glimpse of the
                website.
              </p>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow_down"
                size="lg"
              />
              <div
                id="lol_champions_image"
                style={{
                  backgroundImage: `url(${this.props.project.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  margin: "auto",
                  width: "480px",
                  height: "270px"
                }}
                className="website_image_container"
              />
            </div>
            <div className="col-2 filler_col" />
          </Row>
        </React.Fragment>
      </Fade>
    );
  }
}

export default LolChampionsProject;
