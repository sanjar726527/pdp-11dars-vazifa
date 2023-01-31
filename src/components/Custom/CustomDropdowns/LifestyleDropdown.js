import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export const LifeStyleDropdown = () => {
  return (
    <div className="lifeStyleDropdowns">
      <button className="button">
        <span className="span">LifeStyle</span>
      </button>
      <div className="lifeStyleCards">
        <div className="container-fluid d-flex gap-4">
          <div className="card-item">
            <img
              src="https://blogzine.webestica.com/assets/images/blog/16by9/small/01.jpg"
              alt=""
            />
            <h6 className="slide-title">
              <a href="#">
                12 worst types of business accounts you follow on Twitter
              </a>
            </h6>
            <div className="footer">
              <span className="footer-item1">
                <a href="#">Joan Wallace</a>
              </span>
              <p className="footer-item2">Feb 18, 2022</p>
            </div>
          </div>
          <div className="card-item">
            <img
              src="https://blogzine.webestica.com/assets/images/blog/16by9/small/02.jpg"
              alt=""
            />
            <h6 className="slide-title">
              <a href="#">
                12 worst types of business accounts you follow on Twitter
              </a>
            </h6>
            <div className="footer">
              <span className="footer-item1">
                <a href="#">Lori Stevens</a>
              </span>
              <p className="footer-item2">Jun 03, 2022</p>
            </div>
          </div>
          <div className="card-item">
            <img
              src="https://blogzine.webestica.com/assets/images/blog/16by9/small/03.jpg"
              alt=""
            />
            <h6 className="slide-title">
              <a href="#">
                12 worst types of business accounts you follow on Twitter
              </a>
            </h6>
            <div className="footer">
              <span className="footer-item1">
                <a href="#">Judy Nguyen</a>
              </span>
              <p className="footer-item2">Sep 07, 2022</p>
            </div>
          </div>
          <div className="card-item  align-items-center text-center">
            <div className="card bg-primary bg-opacity-10">
              <span>The Blogzine</span>
              <h3>
                Premium <br /> Membership
              </h3>
              <p>Become a Member Today!</p>
              <a href="#" className="btn btn-warning">
                View pricing plans
              </a>
            </div>
          </div>
        </div>
        <ul className="list-inline d-flex gap-5 mt-3 ms-3 ">
          <li className="list-inline-item">Trending tags:</li>
          <li className="list-inline-item">
            <a href="#" className="badge bg-primary bg-opacity-10 text-primary">
              Travel
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="badge bg-warning bg-opacity-10 text-warning">
              Business
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="badge bg-success bg-opacity-10 text-success">
              Tech
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="badge bg-danger bg-opacity-10 text-danger">
              Gadgets
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="badge bg-info bg-opacity-10 text-info">
              Lifestyle
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="badge bg-primary bg-opacity-10 text-primary">
              Vaccine
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="badge bg-success bg-opacity-10 text-success">
              Sports
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="badge bg-danger bg-opacity-10 text-danger">
              Covid-19
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="badge bg-info bg-opacity-10 text-info">
              Politics
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
