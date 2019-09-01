import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  function linksClicked() {
    handleClose();
    setTimeout(() => {
      document.getElementById("skills_container").scrollIntoView({
        behavior: "smooth"
      });
    }, 100);
  }
  function projectsClicked() {
    handleClose();
    setTimeout(() => {
      document.getElementById("projects_container").scrollIntoView({
        behavior: "smooth"
      });
    }, 100);
  }
  function aboutClicked() {
    handleClose();
    setTimeout(() => {
      document.getElementById("about_container").scrollIntoView({
        behavior: "smooth"
      });
    }, 100);
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        id="side_bar_button"
        variant="link"
        className="col-1"
        onClick={handleShow}
      >
        <FontAwesomeIcon id="search_icon" icon={faBars} />
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton />
        <Modal.Body>
          <div id="links_container" className="col-8">
            <ul>
              <li id="skills_link" onClick={linksClicked}>
                Skills
              </li>
              <li id="projects_link" onClick={projectsClicked}>
                Projects
              </li>
              <li id="about_link" onClick={aboutClicked}>
                About
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SideBar;
