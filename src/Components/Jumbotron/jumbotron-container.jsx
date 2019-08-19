import React, { Component } from "react";
import "./jumbotron.scss";
import Title from "./title";
import NavigationBar from "../Navigation/navigation-container";

class JumbotronContainer extends Component {
  state = {};
  render() {
    return (
      <div id="jumbotron_container">
        <div id="overlay">
          <NavigationBar />
          <Title />
        </div>
      </div>
    );
  }
}

export default JumbotronContainer;
