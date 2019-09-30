import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

class BdoProfitProject extends Component {
  render() {
    const builtWithList = this.props.project.languages.map(language => {
      return <li key={language}>{language}</li>;
    });
    const description = this.props.project.description.map(paragraph => {
      return <p key={paragraph}>{paragraph}</p>;
    });
    return (
      <Fade bottom>
        <React.Fragment>
          <Row className="project_rows" id="bdoprofit_row">
            <div className="col-2 filler_col" />

            <div
              id="second_project_description"
              className="project_container col-lg-4 col-sm-12"
            >
              <h4>{this.props.project.title}</h4>
              <div className="description_container">{description}</div>
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
            <div className="col-lg-4 col-sm-12 image_col">
              <p>
                <b>Hover</b> over the image to get a brief glimpse of the
                website.
              </p>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow_down"
                size="lg"
              />
              <div className="computer">
                <div
                  id="bdo_profit_image"
                  className="website_image_container"
                  style={{
                    backgroundImage: `url(${this.props.project.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    margin: "auto",
                    width: "480px",
                    height: "270px"
                  }}
                />
              </div>
              <div className="stand"></div>
              <div className="keyboard"></div>
            </div>
            <div className="col-2 filler_col" />
          </Row>
        </React.Fragment>
      </Fade>
    );
  }
}

export default BdoProfitProject;
