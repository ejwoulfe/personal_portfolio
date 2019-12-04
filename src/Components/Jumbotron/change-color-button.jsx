import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import skillsIconLight from "../../Assets/light-cogs-solid.svg";
import skillsIconDark from "../../Assets/dark-cogs-solid.svg";

class ChangeColorTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightTheme: true
    };
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
  }
  changeToLightTheme() {
    // Changes to all letters within the Application
    document.getElementsByClassName("App")[0].style.color = "#19171C";
    document.getElementsByClassName("App")[0].style.backgroundColor = "white";
    document.getElementById("jumbotron_container").style.color = "white";

    // Changes background colors of some containers.
    document.getElementById("skills_container").style.backgroundColor =
      "#e6e6e6";
    document.getElementById("about_container").style.backgroundColor =
      "#e6e6e6";

    // Change border line
    for (
      var z = 0;
      z < document.getElementsByClassName("project_container").length;
      z++
    ) {
      document.getElementsByClassName("project_container")[
        z
      ].style.borderBottom = "3px solid black";
      document.getElementsByClassName("image_col")[z].style.borderBottom =
        "3px solid black";
      document.getElementsByClassName("project_title")[z].style.color = "black";
      document.getElementsByClassName("built_with_title")[z].style.color =
        "black";
    }

    // Changes the jumbotron button
    document.getElementsByClassName("btn")[0].style.color = "white";
    document.getElementsByClassName("btn")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("btn")[0].style.borderColor = "white";

    // Changes the svg icons to the light cogwheel
    document.getElementsByClassName("svg")[0].src = skillsIconLight;
    document.getElementsByClassName("svg")[1].src = skillsIconLight;

    // Changes all other buttons in the application.
    for (var i = 1; i < document.getElementsByClassName("btn").length; i++) {
      document.getElementsByClassName("btn")[i].style.color = "white";
      document.getElementsByClassName("btn")[i].style.backgroundColor =
        "#11182065";
      document.getElementsByClassName("btn")[i].style.borderColor = "black";
    }
  }
  changeToDarkTheme() {
    // Changes to all letters within the Application
    document.getElementsByClassName("App")[0].style.backgroundColor = "#111820";
    document.getElementsByClassName("App")[0].style.color = "#b2123b";
    document.getElementById("jumbotron_container").style.color = "#b2123b";

    // Changes background colors of some containers.
    document.getElementById("skills_container").style.backgroundColor =
      "#1b1e24";
    document.getElementById("about_container").style.backgroundColor =
      "#1b1e24";

    // Change border line
    for (
      var z = 0;
      z < document.getElementsByClassName("project_container").length;
      z++
    ) {
      document.getElementsByClassName("project_container")[
        z
      ].style.borderBottom = "3px solid white";
      document.getElementsByClassName("image_col")[z].style.borderBottom =
        "3px solid white";
      document.getElementsByClassName("project_title")[z].style.color = "white";
      document.getElementsByClassName("built_with_title")[z].style.color =
        "white";
    }

    // Changes the svg icons to the dark cogwheel
    document.getElementsByClassName("svg")[0].src = skillsIconDark;
    document.getElementsByClassName("svg")[1].src = skillsIconDark;

    // Changes all other buttons in the application.
    for (var j = 0; j < document.getElementsByClassName("btn").length; j++) {
      document.getElementsByClassName("btn")[j].style.backgroundColor =
        "#b2123b";
      document.getElementsByClassName("btn")[j].style.borderColor = "white";
      document.getElementsByClassName("btn")[j].style.color = "white";
    }
  }

  handleChangeTheme() {
    this.setState({ lightTheme: !this.state.lightTheme });
  }
  componentDidUpdate() {
    if (this.state.lightTheme) {
      this.changeToLightTheme();
    } else {
      this.changeToDarkTheme();
    }
  }
  componentDidMount() {
    // Default will be light theme
    this.changeToLightTheme();
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
          className="btn"
        >
          {this.state.lightTheme ? "Dark Theme" : "Light Theme"}
        </Button>
      </div>
    );
  }
}

export default ChangeColorTheme;
