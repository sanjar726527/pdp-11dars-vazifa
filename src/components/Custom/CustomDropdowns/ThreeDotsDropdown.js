import React from "react";
import { Dropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { CustomBadge } from "../CustomBadge";

const threeItems = ["About", "Newsletter", "Author", "#Tags", "Contact"];

export default function ThreeDotsDropdown() {
  return (
    <Dropdown className="three-dots">
      <Dropdown.Toggle variant="none" id="dropdown-basic">
        <BsThreeDots size="24" className="grey-icons" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        {threeItems.map((item, index) => {
          return (
            <Dropdown.Item
              key={index}
              className="navItem "
              href={`#/action-1/${index + 1}`}
            >
              {item}
            </Dropdown.Item>
          );
        })}
        <Dropdown.Item
          className="navItem"
          href={`#/action-1/${threeItems.length + 1}`}
        >
          <CustomBadge children="2Job" />
          Careers
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
