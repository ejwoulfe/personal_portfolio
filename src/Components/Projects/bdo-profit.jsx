import React, { Component } from "react";
import { Row, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

class BdoProfitProject extends Component {
  state = {};
  render() {
    return (
      <Fade left>
        <React.Fragment>
          <Row className="project_rows" id="bdoprofit_row">
            <div className="col-2 filler_col" />

            <div id="second_project_description" className="col-lg-4 col-xs-6">
              <h4>BDO Profit</h4>
              <p>
                BDO Profit is a tool to help calculate a recipe's costs and
                profits. The database was built using webscraping (from a
                website that gives permission) and holds all of the games
                recipes. Each recipe has their own materials. The user will
                enter in the costs of the materials and the sale price of the
                recipe once crafted. The website will then calculate if its
                profitable or not.
              </p>

              <Button className="code_button">Code</Button>
              <Button className="website_button">Live Website</Button>
            </div>
            <div className="col-lg-4 col-xs-6 image_col">
              <p>Hover over the image to get a brief glimpse of the website.</p>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow_down"
                size="lg"
              />
              <div id="bdo_profit_link" />
            </div>
            <div className="col-2 filler_col" />
          </Row>
        </React.Fragment>
      </Fade>
    );
  }
}

export default BdoProfitProject;
