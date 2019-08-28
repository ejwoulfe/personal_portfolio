import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class ChangeColorTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightTheme: true
    };
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
  }

  handleChangeTheme() {
    this.setState({ lightTheme: !this.state.lightTheme });
  }
  componentDidUpdate() {
    if (this.state.lightTheme) {
      document.getElementsByClassName("App").style.backgroundColor = "#FFFFFF";
      document.getElementsByClassName("App").style.color = "#19171C";
    } else {
      document.getElementsByClassName("App").style.backgroundColor = "#111820";
      document.getElementsByClassName("App").style.color = "#b2123b";
    }
  }

  render() {
    return (
      <div id="color_theme_container">
        <Button onClick={this.handleChangeTheme}>
          {this.state.lightTheme ? "Light Theme" : "Dark Theme"}
        </Button>
      </div>
    );
  }
}

export default ChangeColorTheme;
