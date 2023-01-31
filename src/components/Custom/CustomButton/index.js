import React from "react";
import { Button } from "react-bootstrap";
import "./CustomButton.scss";

export const CustomButton = ({ placement, children, ...props }) => {
  return (
    <Button className="btn" variant="danger" {...props}>
      <span className="dot" /> {children}
    </Button>
  );
};
