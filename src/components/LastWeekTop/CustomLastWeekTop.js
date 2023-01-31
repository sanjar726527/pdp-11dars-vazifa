import React from "react";
import { CustomButton } from "../Custom/CustomButton";
import CustomOverlays from "../Custom/CustomOverlays";
import "./CustomLastWeekTop.scss";
import { BsBookmarkStar, BsInfoCircle } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

const rightSide = [
  {
    image: "https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg",
    badge: "LifeStyle",
    variant: "danger",
    title: "The pros and cons of business agency",
    avatar: "https://blogzine.webestica.com/assets/images/blog/4by3/07.jpg",
    name: "Samuel",
    data: "Jan 22, 2022"
  },
  {
    image: "https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg",
    badge: "Sports",
    variant: "info",
    title: "5 reasons why you shouldn't startup",
    avatar: "https://blogzine.webestica.com/assets/images/avatar/02.jpg",
    name: "Dennis",
    data: "Mar 07, 2022"
  },
  {
    image: "https://blogzine.webestica.com/assets/images/blog/4by3/03.jpg",
    badge: "Business",
    variant: "success",
    title: "Five unbelievable facts about money.",
    avatar: "https://blogzine.webestica.com/assets/images/avatar/03.jpg",
    name: "Bryan",
    data: "Jun 17, 2022"
  },
  {
    image: "https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg",
    badge: "Technology",
    variant: "warning",
    title: "Around the web: 20 fabulous infographics about business",
    avatar: "https://blogzine.webestica.com/assets/images/avatar/05.jpg",
    name: "Jacqueline",
    data: "Jun 17, 2022"
  }
];

export default function CustomLastWeekTop() {
  return (
    <div className="customLastWeekTop my-5">
      <div className="container">
        <div className="mb-4">
          <h2 className="m-0">
            <BsBookmarkStar />Last week top highlights
          </h2>
          <p className="m-0">
            Check last weeks top highlights, news, stories and headline news
          </p>
        </div>
        <div className="customLastWeekTop__main-card">
          <div className="left-side">
            <div className="background-image" />
            <div className="left-column">
              <div className="customs d-flex gap-3">
                <CustomButton
                  variant="primary"
                  children="Business"
                  className="lower"
                />
                <CustomOverlays
                  icon={<BsInfoCircle />}
                  children="Sponsored"
                  tooltip="You'r seeing this add because your activity ,meets the intended audience our site"
                />
              </div>
              <h2 className="text-white slide-title">
                <a href="#">
                  Never underestimate the influence of social media
                </a>
              </h2>
              <div className="left-footer">
                <img
                  src="https://blogzine.webestica.com/assets/images/avatar/01.jpg"
                  className="footer-img"
                  alt="Картинка"
                />
                <span className="footer-item1">
                  by <a href="#">Carolyn</a>
                </span>
                <p className="footer-item">Jan 26, 2022</p>
                <p className="footer-item">3 min read</p>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="right-column">
              {rightSide.map((item, i) => {
                return (
                  <div key={i} className="right-card">
                    <img className="card-img" src={item.image} alt="image" />
                    <div className="card-info">
                      <a
                        href="#"
                        className={`badge bg-${item.variant} bg-opacity-10 text-${item.variant} `}
                      >
                        <GoPrimitiveDot size={20} /> {item.badge}
                      </a>
                      <h5 className="slide-title2">
                        <a href="#">
                          {item.title}
                        </a>
                      </h5>
                      <div className="right-footer">
                        <img
                          src={item.avatar}
                          className="footer-img"
                          alt="avatar"
                        />
                        <span className="footer-item1">
                          by <a href="#">{item.name}</a>
                        </span>
                        <p className="footer-item2">
                          {item.data}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
