import React, { useEffect, useRef, useState } from "react";
import { CustomButton } from "../Custom/CustomButton";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "./CustomMain.scss";

const itemMain = {
  badge: "Lifestyle",
  title: "10 tell-tale signs you need to get a new startup.",
  text:
    "No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. ",
  avatar: "https://blogzine.webestica.com/assets/images/avatar/11.jpg",
  name: "Louis",
  data: "Jan 01, 2022",
  time: "5 min read"
};

const paginations = [
  {
    img: "https://blogzine.webestica.com/assets/images/blog/16by9/big/01.jpg",
    title: "7 common mistakes everyone makes while traveling",
    subtitle: "Particular way thoroughly unaffected projection favorable"
  },
  {
    img: "https://blogzine.webestica.com/assets/images/blog/16by9/big/02.jpg",
    title: "Tell-tale signs you need to get a new startup",
    subtitle: "Departure defective arranging rapturous did believe"
  },
  {
    img: "https://blogzine.webestica.com/assets/images/blog/16by9/big/03.jpg",
    title: "Initial problem of startups and their solution",
    subtitle: "Drawings offended yet answered Jennings perceive"
  }
];

export const CustomMain = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <section className="main-banner my-3">
      <div className="main-banner__container ">
        <Swiper
          ref={swiperRef}
          spaceBetween={5}
          onSlideChange={e => {
            setActiveIndex(e.activeIndex);
          }}
        >
          <SwiperSlide
            className="main-banner__slide"
            style={{
              background:
                "url(https://blogzine.webestica.com/assets/images/blog/16by9/big/01.jpg) center / cover no-repeat"
            }}
          >
            <div className="container">
              <CustomButton
                children="Travel"
                variant="warning"
                className="lower black"
              />
              <h2 className="main-banner__slide-title">
                <a href="#">7 common mistakes everyone makes while traveling</a>
              </h2>
              <p className="main-banner__slide-subtitle">
                Particular way thoroughly unaffected projection favorable Mrs
                can be projecting own.
              </p>
              <div className="main-banner__slide-footer">
                <img
                  src="https://blogzine.webestica.com/assets/images/avatar/10.jpg"
                  className="main-banner__slide-img"
                  alt="Картинка"
                />
                <span className="main-banner__slide-item">
                  by <a href="#">Larry</a>
                </span>
                <p className="main-banner__slide-item">Feb 22, 2022</p>
                <p className="main-banner__slide-item">2 min read</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="main-banner__slide"
            style={{
              background:
                "url(https://blogzine.webestica.com/assets/images/blog/16by9/big/02.jpg) center / cover no-repeat"
            }}
          >
            <div className="container">
              <CustomButton
                children="Lifestyle"
                variant="danger"
                className="lower"
              />
              <h2 className="main-banner__slide-title">
                <a href="#">
                  10 tell-tale signs you need to get a new startup.
                </a>
              </h2>
              <p className="main-banner__slide-subtitle">
                Particular way thoroughly unaffected projection favorable Mrs
                can be projecting own.
              </p>
              <div className="main-banner__slide-footer">
                <img
                  src="https://blogzine.webestica.com/assets/images/avatar/11.jpg"
                  className="main-banner__slide-img"
                  alt="Картинка"
                />
                <span className="main-banner__slide-item">
                  by <a href="#">Louis</a>
                </span>
                <p className="main-banner__slide-item">Jan 01, 2022</p>
                <p className="main-banner__slide-item">5 min read</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="main-banner__slide"
            style={{
              background:
                "url(https://blogzine.webestica.com/assets/images/blog/16by9/big/03.jpg) center / cover no-repeat"
            }}
          >
            <div className="container">
              <CustomButton
                children="Travel"
                variant="warning"
                className="lower black"
              />
              <h2 className="main-banner__slide-title">
                <a href="#">Initial problem of startups and their solution</a>
              </h2>
              <p className="main-banner__slide-subtitle">
                Thirty it matter enable become admire in giving. See resolved
                goodness felicity shy civility domestic.
              </p>
              <div className="main-banner__slide-footer">
                <img
                  src="https://blogzine.webestica.com/assets/images/avatar/08.jpg"
                  className="main-banner__slide-img"
                  alt="Картинка"
                />
                <span className="main-banner__slide-item">
                  by <a href="#">Denis</a>
                </span>
                <p className="main-banner__slide-item">Jun 17, 2022</p>
                <p className="main-banner__slide-item">10 min read</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="main-banner__box">
          {paginations.map(({ img, title, subtitle }, i) => {
            return (
              <article
                onClick={() => {
                  setActiveIndex(i);
                  swiperRef.current.swiper.slideTo(i);
                }}
                className={`main-banner__box-item ${activeIndex == i
                  ? "active"
                  : "passive"}`}
                key={i}
              >
                <img
                  src={img}
                  className="main-banner__box-img"
                  alt="Картинка"
                />
                <p className="main-banner__box-title">
                  {title}
                </p>
                <span className="main-banner__box-subtitle">
                  {subtitle}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
