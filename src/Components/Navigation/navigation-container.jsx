import React, { Component } from "react";
import Logo from "./logo.jsx";
import Links from "./links.jsx";
import SideBar from "./side-bar";
import { Navbar, Button } from "react-bootstrap";
import "./navigation.scss";

class NavigationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    if (this.state.width < 830) {
      return (
        <React.Fragment>
          <div id="navigation_container">
            <Navbar className="col-12">
              <SideBar />
              <Logo />
            </Navbar>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div id="navigation_container">
            <Navbar className="col-12">
              <Logo />
              <Links />
            </Navbar>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default NavigationContainer;
