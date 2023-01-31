import React from "react";
import "./CustomTrending.scss";

const trendingCard = [
  {
    image:
      "https://blogzine.webestica.com/assets/images/blog/1by1/thumb/01.jpg",
    title: "Travel"
  },
  {
    image:
      "https://blogzine.webestica.com/assets/images/blog/1by1/thumb/02.jpg",
    title: "Business"
  },
  {
    image:
      "https://blogzine.webestica.com/assets/images/blog/1by1/thumb/03.jpg",
    title: "Marketing"
  },
  {
    image:
      "https://blogzine.webestica.com/assets/images/blog/1by1/thumb/04.jpg",
    title: "Photography"
  },
  {
    image:
      "https://blogzine.webestica.com/assets/images/blog/1by1/thumb/05.jpg",
    title: "Sports"
  }
];

export default function CustomTrending() {
  return (
    <div className="customTrending my-5">
      <div className="container">
        <div className="d-sm-flex justify-content-between align-items-center mb-4">
          <h2 className="m-0">Trending topics</h2>
          <a href="#" className="text-body text-primary-hover">
            <u>View all categories</u>
          </a>
        </div>
        <div className="trending-cards">
          <div className="trending-row">
            {trendingCard.map((item, i) => {
              return (
                <div key={i} className="trending-card">
                  <img className="background-image" src={item.image} />
                  <h5 className="slide-title">
                    <a href="#">
                      {item.title}
                    </a>
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
