import React, { Component } from "react";
import "./jumbotron.scss";
import TitleAndLinks from "./title-and-links";
import NavigationBar from "../Navigation/navigation-container";

class JumbotronContainer extends Component {
  render() {
    return (
      <div id="jumbotron_container">
        <div id="overlay">
          <NavigationBar />
          <TitleAndLinks />
        </div>
      </div>
    );
  }
}

export default JumbotronContainer;
