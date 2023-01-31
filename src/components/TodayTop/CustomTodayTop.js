import React, { useContext } from "react";
import { CustomButton } from "../Custom/CustomButton";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsMegaphone } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CustomTodayTop.scss";
import ThemeContext from "../context/ThemeContext";

const customCard = [
  {
    image: "https://blogzine.webestica.com/assets/images/blog/4by3/07.jpg",
    badge: "Marketing",
    title: "7 common mistakes everyone while traveling",
    avatar: "https://blogzine.webestica.com/assets/images/avatar/07.jpg",
    name: "Lori",
    data: "Mar 07, 2022",
    rating: "8.5",
    variant: "info",
    lower: "lower"
  },
  {
    image: "https://blogzine.webestica.com/assets/images/blog/4by3/08.jpg",
    badge: "Sports",
    title: "Skills that you can learn from business",
    avatar: "https://blogzine.webestica.com/assets/images/avatar/08.jpg",
    name: "Joan",
    data: "Aug 15, 2022",
    rating: "",
    variant: "danger",
    lower: "lower"
  },
  {
    image: "https://blogzine.webestica.com/assets/images/blog/4by3/09.jpg",
    badge: "Marketing",
    title: "10 tell-tale signs you need to get a new business",
    avatar: "https://blogzine.webestica.com/assets/images/avatar/09.jpg",
    name: "Bryan",
    data: "Jun 01, 2022",
    rating: "",
    variant: "success",
    lower: "lower"
  },
  {
    image: "https://blogzine.webestica.com/assets/images/blog/4by3/10.jpg",
    badge: "Photography",
    title: "This is why this year will be the year of startups",
    avatar: "https://blogzine.webestica.com/assets/images/avatar/10.jpg",
    name: "Samuel",
    data: "Dec 07, 2022",
    rating: "",
    variant: "primary",
    lower: "lower"
  },
  {
    image: "https://blogzine.webestica.com/assets/images/blog/4by3/11.jpg",
    badge: "Technology",
    title: "Best Pinterest Boards for learning about business",
    avatar: "https://blogzine.webestica.com/assets/images/avatar/12.jpg",
    name: "Dennis",
    data: "Sep 07, 2022",
    rating: "",
    variant: "warning",
    lower: "lower"
  }
];

export default function CustomCarousel() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`customCarousel my-5 ${dark ? "dark" : ""}`}>
      <div className="container ">
        <div className="mb-4">
          <h2 className="m-0">
            <BsMegaphone /> Today's top highlights
          </h2>
          <p className="m-0">
            Latest breaking news, pictures, videos, and special reports
          </p>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          slidesPerGroup={1}
          centeredSlides={false}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          loopedSlidesLimit={1}
          className="mySwiper"
        >
          {customCard.map((item, index) => {
            return (
              <SwiperSlide className="rounded d-flex gap-2" key={index}>
                <div className="cardCustom p-1">
                  <div className=" position-relative">
                    <img
                      className="card-img rounded"
                      src={item.image}
                      height="206"
                      width="274"
                      alt="Card image"
                    />
                    <div className="card-img-overlay d-flex align-items-start flex-column px-2">
                      <div className="w-100 mt-auto d-flex justify-content-end">
                        <div
                          className="icon-md bg-white bg-opacity-10 bg-blur text-white fw-bold rounded-circle"
                          title="8.5 rating"
                        >
                          {item.rating}
                        </div>
                      </div>
                      <div className="text-start">
                        <a href="#" className="badge  mb-2">
                          <CustomButton
                            variant={item.variant}
                            children={item.badge}
                            className={item.lower}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div />
                  <div className="card-body">
                    <h5 className="slide-title">
                      <a href="#">
                        {item.title}
                      </a>
                    </h5>
                    <div className="carousel-footer">
                      <img
                        src={item.image}
                        className="footer-img"
                        alt="Картинка"
                      />

                      <span className="footer-item">
                        by <a href="#">{item.name}</a>
                      </span>
                      <p className="footer-item">
                        {item.data}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
