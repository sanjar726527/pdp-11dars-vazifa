import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import ThemeContext from "../context/ThemeContext";
import { CheckSwitch } from "../Custom/CustomCheckSwitch";
import { CustomButton } from "../Custom/CustomButton";
import "./CustomNavbar.scss";
import { CustomDropdown } from "./HomeDropdown";
import ThreeDotsDropdown from "../Custom/CustomDropdowns/ThreeDotsDropdown";
import SearchDropdown from "../Custom/CustomDropdowns/SearchDropdown";

export const CustomNavbar = () => {
  const { dark } = useContext(ThemeContext);
  console.log(dark);
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className={`customNavbar py-3 ${dark ? "dark" : ""}`}>
        <Navbar.Brand href="#home" className="navbar-logo">
          <img
            className="dark-image"
            src="https://blogzine.webestica.com/assets/images/logo.svg"
            alt=""
          />
          <img
            className="light-image"
            src="https://blogzine.webestica.com/assets/images/logo-light.svg"
            alt=""
          />
        </Navbar.Brand>
        <div className="d-flex justify-content-center align-items-center gap-5">
          <CustomDropdown />
          <div className="right d-flex gap-3 justify-content-center align-items-center">
            <CheckSwitch />
            <ThreeDotsDropdown />
            <CustomButton children={"Subscribe!"} />
            <SearchDropdown />
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
