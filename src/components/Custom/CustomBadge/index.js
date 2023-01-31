import React from "react";
import { Badge } from "react-bootstrap";
import "./CustomBadge.scss";

export const CustomBadge = ({ children }) => {
  return (
    <Badge className="customBadge mx-2">
      {children}
    </Badge>
  );
};
