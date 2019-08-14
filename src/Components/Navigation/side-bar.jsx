import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Links from "./links.jsx";

function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" id="side_bar_button" onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body>
          <Links />
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
}

export default SideBar;
