import React, { useRef, useState } from "react";
import { Button, Overlay, Tooltip } from "react-bootstrap";
import "./CustomOverlays.scss";

export default function CustomOverlays({ icon, children, tooltip, ...props }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div className="customOverlay">
      <Button variant="dark" ref={target} onClick={() => setShow(!show)}>
        {icon} {children}
      </Button>
      <Overlay target={target.current} show={show} placement="top">
        {props =>
          <Tooltip id="overlay-example" color="white" {...props}>
            {tooltip}
          </Tooltip>}
      </Overlay>
    </div>
  );
}
