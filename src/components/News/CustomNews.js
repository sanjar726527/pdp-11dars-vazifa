import React from "react";
import { BsMegaphone } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import "./CustomNews.scss";

const itemNews = [
  [
    {
      image: "https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg",
      badge: "Lifestyle",
      title: "The pros and cons of business agency",
      avatar: "https://blogzine.webestica.com/assets/images/avatar/01.jpg",
      name: "Samuel",
      data: "Jan 22, 2022",
      color: "danger"
    },
    {
      image: "https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg",
      badge: "Sports",
      title: "5 reasons why you shouldn't startup",
      avatar: "https://blogzine.webestica.com/assets/images/avatar/02.jpg",
      name: "Dennis",
      data: "Mar 07, 2022",
      color: "info"
    },
    {
      image: "https://blogzine.webestica.com/assets/images/blog/4by3/03.jpg",
      badge: "Business",
      title: "Five unbelievable facts about money.",
      avatar: "https://blogzine.webestica.com/assets/images/avatar/03.jpg",
      name: "Bryan",
      data: "Jun 17, 2022",
      color: "success"
    }
  ],
  [
    {
      image: "https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg",
      badge: "Technology",
      title: "Around the web: 20 fabulous infographics about business",
      avatar: "https://blogzine.webestica.com/assets/images/avatar/05.jpg",
      name: "Jacqueline",
      data: "Oct 11, 2022",
      color: "warning"
    },
    {
      image: "https://blogzine.webestica.com/assets/images/blog/4by3/05.jpg",
      badge: "Marketing",
      title: "7 common mistakes everyone makes while traveling",
      avatar: "https://blogzine.webestica.com/assets/images/avatar/14.jpg",
      name: "Samuel",
      data: "Jul 22, 2022",
      color: "info"
    },
    {
      image: "https://blogzine.webestica.com/assets/images/blog/4by3/06.jpg",
      badge: "Photography",
      title: "5 investment doubts you should clarify",
      avatar: "https://blogzine.webestica.com/assets/images/avatar/07.jpg",
      name: "Judy",
      data: "Sep 30, 2022",
      color: "danger"
    }
  ]
];

const CustomNews = () => {
  return (
    <div className="customNews py-5">
      <div className="container">
        <div className="title">
          <div className="col-md-12">
            <div className="mb-4 d-md-flex justify-content-between align-items-center">
              <h2 className="m-0">
                <BsMegaphone /> Sponsored news
              </h2>
              <a href="#" className="text-body small">
                <u>Content by: Bootstrap</u>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          {itemNews.map((item, index) => {
            return (
              <div key={index} className="rowCard">
                {item.map((value, i) => {
                  return (
                    <div key={i} className="columnCard ">
                      <div className="d-flex gap-3">
                        <div className="">
                          <img
                            width="169"
                            height="127"
                            className="rounded-3"
                            src={value.image}
                            alt=""
                          />
                        </div>
                        <div className="infoCard">
                          <a
                            href="#"
                            className={`badge bg-${value.color} bg-opacity-10 text-${value.color} mb-2`}
                          >
                            <GoPrimitiveDot size={20} /> {value.badge}
                          </a>
                          <h4 className="slide-title">
                            <a href="#">
                              {value.title}
                            </a>
                          </h4>
                          <div className="footer">
                            <img
                              src={value.avatar}
                              className="footer-img"
                              alt="Картинка"
                            />

                            <span className="footer-item">
                              by <a href="#">{value.name}</a>
                            </span>
                            <p className="footer-item">
                              {value.data}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomNews;
