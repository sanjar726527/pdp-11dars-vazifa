import React, { useContext } from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import ThemeContext from "../context/ThemeContext";
import "./CustomFooter.scss";

export const CustomFooter = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <footer className={`footer pb-5 ${dark ? "dark" : ""}`}>
      <div className="container">
        <div className="row pt-5">
          <div className="customColumn">
            <div className="navbar-logo">
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
            </div>
            <p className="mt-3">
              The next-generation blog, news, and magazine theme for you to
              start sharing your stories today! This Bootstrap 5 based theme is
              ideal for all types of sites that deliver the news.
            </p>
            <div className="mt-4">
              ©2022{" "}
              <a
                href="https://www.webestica.com/"
                className="text-reset btn-link"
                target="_blank"
              >
                Webestica
              </a>. All rights reserved
            </div>
          </div>

          <div className="customColumn">
            <h5 className="mb-4">Navigation</h5>
            <div className="row ">
              <div className="col-6">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link pt-0" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Style Guide
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Get Theme
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link pt-0" href="#">
                      News
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Career{" "}
                      <span className="badge text-bg-danger ms-2">2 Job</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Technology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Startups
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Gadgets
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="customColumn">
            <h5 className="mb-4">Browse by Tag</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="#"
                  className="badge bg-primary bg-opacity-10 text-primary p-3"
                >
                  Travel
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="badge bg-warning bg-opacity-10 text-warning p-3"
                >
                  Business
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="badge bg-success bg-opacity-10 text-success p-3"
                >
                  Tech
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="badge bg-danger bg-opacity-10 text-danger p-3"
                >
                  Gadgets
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="badge bg-info bg-opacity-10 text-info p-3"
                >
                  Lifestyle
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="badge bg-primary bg-opacity-10 text-primary p-3"
                >
                  Vaccine
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="badge bg-warning bg-opacity-10 text-warning p-3"
                >
                  Marketing
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="badge bg-success bg-opacity-10 text-success p-3"
                >
                  Sports
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="badge bg-danger bg-opacity-10 text-danger p-3"
                >
                  Covid-19
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="badge bg-info bg-opacity-10 text-info p-3"
                >
                  Politics
                </a>
              </li>
            </ul>
          </div>

          <div className="customColumn">
            <h5 className="mb-4">Our Social handles</h5>
            <ul className="nav d-flex flex-column">
              <li className="nav-item">
                <a className="nav-link pt-0" href="#">
                  <BsFacebook /> Facebook
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <BsTwitter /> Twitter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <BsLinkedin /> Linkedin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <BsYoutube /> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
