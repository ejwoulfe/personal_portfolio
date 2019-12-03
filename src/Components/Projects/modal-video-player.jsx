import ModalVideo from "react-modal-video";
import ReactDOM from "react-dom";
import React from "react";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

let ModalVideoPlayer = ({ onClose, open, videoID }) =>
  open
    ? ReactDOM.createPortal(
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={true}
            videoId={videoID}
            onClose={onClose}
          />
        </div>,
        document.body
      )
    : null;

export default ModalVideoPlayer;
