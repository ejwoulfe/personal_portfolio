import React, { Component } from "react";
import Logo from "./logo.jsx";
import Links from "./links.jsx";
import SideBar from "./side-bar";
import { Navbar } from "react-bootstrap";
import "./navigation.scss";

class NavigationContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="navigation_container">
          <Navbar className="col-12">
            <SideBar id="side_bar_button" variant="link" className="col-1" />

            <Logo />
            <Links />
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}

export default NavigationContainer;
