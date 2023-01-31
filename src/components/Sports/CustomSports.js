import React from "react";
import "./CustomSports.scss";
import { BsController } from "react-icons/bs";
import { CustomButton } from "../Custom/CustomButton";

export default function CustomSports() {
  return (
    <div className="customSports my-5">
      <div className="container">
        <div className="mb-4">
          <h2 className="m-0">
            <BsController />Sports update
          </h2>
          <p className="m-0">
            Get the latest sports news and updates from football, tennis,
            formula one, cricket, NBA, and golf with live scores and stats
          </p>
        </div>
        <div className="sports-row">
          <div className="sports-card">
            <img
              className="background-image"
              src="https://blogzine.webestica.com/assets/images/blog/16by9/06.jpg"
            />
            <div className="card-info">
              <CustomButton
                variant="danger"
                children="Travel"
                className="lower"
              />
              <h2 className="slide-title">
                <a href="#">8 initial problem of startups and their solution</a>
              </h2>
              <div className="footer">
                <img
                  src="https://blogzine.webestica.com/assets/images/avatar/08.jpg"
                  className="footer-img"
                  alt="Картинка"
                />
                <span className="footer-item1">
                  by <a href="#">Carolyn</a>
                </span>
                <p className="footer-item">Feb 28, 2022</p>
                <p className="footer-item">6 min read</p>
              </div>
            </div>
          </div>
          <div className="sports-card">
            <img
              className="background-image"
              src="https://blogzine.webestica.com/assets/images/blog/16by9/01.jpg"
            />
            <div className="card-info">
              <CustomButton
                variant="warning"
                children="Technology"
                className="black"
              />
              <h2 className="slide-title">
                <a href="#">Business ideas that will boom in upcoming years</a>
              </h2>
              <div className="footer">
                <img
                  src="https://blogzine.webestica.com/assets/images/avatar/09.jpg"
                  className="footer-img"
                  alt="Картинка"
                />
                <span className="footer-item1">
                  by <a href="#">Billy</a>
                </span>
                <p className="footer-item">Jul 19, 2022</p>
                <p className="footer-item">2 min read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
