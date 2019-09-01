import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import darkBackgroundImage from "../../Assets/mountain.jpg";
import lightBackgroundImage from "../../Assets/winter.jpg";

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
      document.getElementsByClassName("App")[0].style.backgroundColor =
        "#FFFFFF";
      document.getElementsByClassName("App")[0].style.color = "#19171C";
      document.getElementById(
        "jumbotron_container"
      ).style.backgroundImage = `url(${lightBackgroundImage})`;
      document.getElementById("jumbotron_container").style.color = "white";
      document.getElementById("change_theme_button").style.backgroundColor =
        "white";
      document.getElementById("change_theme_button").style.color = "#19171C";
    } else {
      document.getElementsByClassName("App")[0].style.backgroundColor =
        "#111820";
      document.getElementsByClassName("App")[0].style.color = "#b2123b";
      document.getElementById(
        "jumbotron_container"
      ).style.backgroundImage = `url(${darkBackgroundImage})`;
      document.getElementById("jumbotron_container").style.color = "#b2123b";
      document.getElementById("change_theme_button").style.backgroundColor =
        "#19171C";

      document.getElementById("change_theme_button").style.color = "#b2123b";
    }
  }
  componentDidMount() {
    document.getElementById(
      "jumbotron_container"
    ).style.backgroundImage = `url(${lightBackgroundImage})`;
    document.getElementsByClassName("App")[0].style.backgroundColor = "#FFFFFF";
    document.getElementsByClassName("App")[0].style.color = "#19171C";

    document.getElementById("jumbotron_container").style.color = "#19171C";
    document.getElementById("change_theme_button").style.backgroundColor =
      "white";
    document.getElementById("change_theme_button").style.color = "#19171C";
    document.getElementById("jumbotron_container").style.color = "white";
  }

  render() {
    return (
      <div id="color_theme_container">
        <p>
          Want a {this.state.lightTheme ? "dark" : "light"} theme? Click button
          to change it.{" "}
        </p>
        <Button
          onClick={this.handleChangeTheme}
          variant="link"
          id="change_theme_button"
        >
          {this.state.lightTheme ? "Dark Theme" : "Light Theme"}
        </Button>
      </div>
    );
  }
}

export default ChangeColorTheme;