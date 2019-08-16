import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Links from "./links.jsx";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBar() {
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
          <Links />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SideBar;
