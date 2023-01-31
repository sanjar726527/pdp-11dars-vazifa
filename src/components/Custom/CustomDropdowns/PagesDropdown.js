import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { MdSupport } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { BsFillCloudDownloadFill, BsToggleOff, BsPlus } from "react-icons/bs";
import { CustomBadge } from "../CustomBadge";

export const PagesDropdown = () => {
  return (
    <div className="constDropdown">
      <button className="button">
        <span className="span">Pages</span>
      </button>
      <div className="dropDownCards">
        <div className="container-fluid">
          <a href="#pages/action/1.1" className="card-item">
            About
          </a>
          <a href="#pages/action/1.2" className="card-item">
            Contact
          </a>
          <div className="card-item dropDown2">
            <button className="button p-0">
              <span className="span1">
                Shop<CustomBadge children="New" />
              </span>
            </button>
            <div className="dropDownCards1">
              <div className="container-fluid">
                <a href="#pages/action/1.1" className="card-item">
                  Shop Grip<CustomBadge children="New" />
                </a>
                <a href="#pages/action/1.1" className="card-item">
                  Shop Detail<CustomBadge children="New" />
                </a>
                <a href="#pages/action/1.1" className="card-item">
                  CheckOut<CustomBadge children="New" />
                </a>
                <a href="#pages/action/1.1" className="card-item">
                  Cart<CustomBadge children="New" />
                </a>
                <a href="#pages/action/1.1" className="card-item">
                  Empty Cart<CustomBadge children="New" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item dropDown2">
            <button className="button p-0">
              <span className="span2">
                Other Archives<CustomBadge children="New" />
              </span>
            </button>
            <div className="dropDownCards1">
              <div className="container-fluid">
                <a href="#pages/action/1.1" className="card-item">
                  Shop Grip<CustomBadge children="New" />
                </a>
                <a href="#pages/action/1.1" className="card-item">
                  Shop Detail<CustomBadge children="New" />
                </a>
                <a href="#pages/action/1.1" className="card-item">
                  CheckOut<CustomBadge children="New" />
                </a>
                <a href="#pages/action/1.1" className="card-item">
                  Cart<CustomBadge children="New" />
                </a>
                <a href="#pages/action/1.1" className="card-item">
                  Empty Cart<CustomBadge children="New" />
                </a>
              </div>
            </div>
          </div>
          <a href="#pages/action/1.2" className="card-item">
            Error 404
          </a>
          <a href="#pages/action/1.2" className="card-item">
            Signin
          </a>
          <a href="#pages/action/1.2" className="card-item">
            Signup
          </a>
          <a href="#pages/action/1.2" className="card-item border-bottom">
            Offline
          </a>
          <div className="card-item dropDown2">
            <button className="button p-0">
              <span className="span3">DropDown Levels</span>
            </button>
            <div className="dropDownCards1">
              <div className="container-fluid">
                <div className="card-item dropDown3">
                  <button className="button p-0">
                    <span className="span4">DropDown (End)</span>
                  </button>
                  <div className="dropDownCards2">
                    <div className="container-fluid">
                      <a href="#pages/action/1.1" className="card-item">
                        DropDown Item
                      </a>
                      <a href="#pages/action/1.1" className="card-item">
                        DropDown Item
                      </a>
                    </div>
                  </div>
                </div>
                <a href="#pages/action/1.1" className="card-item">
                  DropDown Item
                </a>
                <div className="card-item dropDown4">
                  <button className="button p-0">
                    <span className="span4">DropDown (Start)</span>
                  </button>
                  <div className="dropDownCards3">
                    <div className="container-fluid">
                      <a href="#pages/action/1.1" className="card-item">
                        DropDown Item
                      </a>
                      <a href="#pages/action/1.1" className="card-item">
                        DropDown Item
                      </a>
                    </div>
                  </div>
                </div>
                <a href="#pages/action/1.1" className="card-item">
                  DropDown Item
                </a>
              </div>
            </div>
          </div>
          <a href="#pages/action/1.2" className="card-item border-top">
            <MdSupport color="yellow" /> Support
          </a>
          <a href="#pages/action/1.2" className="card-item border-bottom">
            <TiDocumentText color="indianred" /> Documentation
          </a>
          <a href="#pages/action/1.2" className="card-item">
            <BsToggleOff color="indianred" /> RTL Demo
          </a>
          <a href="#pages/action/1.2" className="card-item">
            <BsFillCloudDownloadFill color="indianred" /> Buy Blogzine!
          </a>
        </div>
      </div>
    </div>
  );
};
