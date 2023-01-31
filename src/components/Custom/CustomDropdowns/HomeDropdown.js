import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { CustomBadge } from "../CustomBadge";

const homeItem = [
  "Home default",
  "Home lazy load",
  "Magazine classic",
  "Home cards",
  "Blog classic",
  "Blog Personal",
  "Blog Vintage",
  "Blog Tech",
  "Blog Fashion",
  "Blog Podcast"
];

export const HomeDropdown = () => {
  return (
    <div className="homeDropdown">
      <button className="button">
        <span className="span">Home</span>
      </button>
      <div className="dropDownCards">
        <div className="container-fluid">
          {homeItem.map((item, i) => {
            return (
              <a href={`#home/action/1.${i + 1}`} key={i} className="card-item">
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
