import React, { useState, useRef } from "react";
import { Button,  Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

export default function SearchDropdown() {
  const [show, setShow] = useState(false);
  const searchDrop = useRef(null);

  document.addEventListener("mousedown", closeOpenMenus);

  function closeOpenMenus(e) {
    if (searchDrop.current && show && !searchDrop.current.contains(e.target)) {
      setShow(false);
    }
  }

  return (
    <div className="searchDropdown" ref={searchDrop}>
      <button
        className="button"
        onClick={() => {
          show ? setShow(false) : setShow(true);
        }}
      >
        <BsSearch size="22" className="search grey-icons" />
      </button>
      <div className={`searchCard ${show ? "enable" : "disable"}`}>
        <InputGroup>
          <Form.Control
            placeholder="search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="success" className="m-0" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}
