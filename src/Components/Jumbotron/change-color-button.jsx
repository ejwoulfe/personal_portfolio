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
      document.getElementsByClassName("App")[0].style.color = "#19171C";
      document.getElementsByClassName("App")[0].style.backgroundColor = "white";
      document.getElementById("jumbotron_container").style.color = "white";
      document.getElementById("skills_container").style.backgroundColor =
        "#e6e6e6";
      document.getElementById("about_container").style.backgroundColor =
        "#e6e6e6";
      document.getElementsByClassName("btn")[0].style.color = "white";
      document.getElementsByClassName("btn")[0].style.borderColor = "white";
      for (var i = 1; i < document.getElementsByClassName("btn").length; i++) {
        document.getElementsByClassName("btn")[i].style.color = "white";
        document.getElementsByClassName("btn")[i].style.borderColor = "black";
      }
    } else {
      document.getElementById("about_container").style.backgroundColor =
        "#1b1e24";
      document.getElementsByClassName("App")[0].style.backgroundColor =
        "#111820";
      document.getElementById("skills_container").style.backgroundColor =
        "#1b1e24";
      document.getElementsByClassName("App")[0].style.color = "#b2123b";

      document.getElementById("jumbotron_container").style.color = "#b2123b";

      for (var j = 0; j < document.getElementsByClassName("btn").length; j++) {
        document.getElementsByClassName("btn")[j].style.borderColor = "#b2123b";
        document.getElementsByClassName("btn")[j].style.color = "#b2123b";
      }
    }
  }
  componentDidMount() {
    document.getElementsByClassName("App")[0].style.color = "#19171C";
    document.getElementById("skills_container").style.backgroundColor =
      "#e6e6e6";
    document.getElementsByClassName("btn")[0].style.color = "white";
    document.getElementsByClassName("btn")[0].style.borderColor = "white";
    for (var k = 1; k < document.getElementsByClassName("btn").length; k++) {
      document.getElementsByClassName("btn")[k].style.color = "white";
      document.getElementsByClassName("btn")[k].style.borderColor = "black";
    }

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
          className="btn"
        >
          {this.state.lightTheme ? "Dark Theme" : "Light Theme"}
        </Button>
      </div>
    );
  }
}

export default ChangeColorTheme;
