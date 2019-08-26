import React, { Component } from "react";
class Links extends Component {
  linksClicked() {
    document.getElementById("skills_container").scrollIntoView({
      behavior: "smooth"
    });
  }
  projectsClicked() {
    document.getElementById("projects_container").scrollIntoView({
      behavior: "smooth"
    });
  }
  contactClicked() {
    document.getElementById("contact_container").scrollIntoView({
      behavior: "smooth"
    });
  }
  render() {
    return (
      <div id="links_container" className="col-8">
        <ul>
          <li id="skills_link" onClick={this.linksClicked}>
            Skills
          </li>
          <li id="projects_link" onClick={this.projectsClicked}>
            Projects
          </li>
          <li id="contact_link" onClick={this.contactClicked}>
            Contact
          </li>
        </ul>
      </div>
    );
  }
}
export default Links;
