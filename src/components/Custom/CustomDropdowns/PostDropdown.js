import React from "react";
import { BsPlus } from "react-icons/bs";

export const PostDropdown = () => {
  return (
    <div className="constDropdown">
      <button className="button">
        <span className="span">Post</span>
      </button>
      <div className="dropDownCards">
        <div className="container-fluid">
          <div className="card-item dropDown4">
            <button className="button p-0">
              <span className="span1">Post Grid</span>
            </button>
            <div className="dropDownCards3">
              <div className="container-fluid">
                <a href="#pages/action/1.1" className="card-item">
                  Post Grip
                </a>
                <a href="#pages/action/1.1" className="card-item">
                  Post Grip 4 Col
                </a>
                <a href="#pages/action/1.1" className="card-item">
                  Post Grip Masonry
                </a>
                <a href="#pages/action/1.1" className="card-item">
                  Post Grip Masonry Filter
                </a>
                <a href="#pages/action/1.1" className="card-item">
                  Post mixed large than grid
                </a>
              </div>
            </div>
          </div>
          <a href="#post/action/1.1" className="card-item">
            Post List
          </a>
          <a href="#post/action/1.1" className="card-item">
            Post List 2
          </a>
          <a href="#post/action/1.1" className="card-item">
            Post Card
          </a>
          <a href="#post/action/1.1" className="card-item">
            Post Overlay
          </a>
          <a href="#post/action/1.1" className="card-item border-bottom">
            Post Types
          </a>
          <a href="#post/action/1.1" className="card-item">
            Post Single Magazine
          </a>
          <a href="#post/action/1.1" className="card-item">
            Post Single Classic
          </a>
          <a href="#post/action/1.1" className="card-item">
            Post Single Minimal
          </a>
          <a href="#post/action/1.1" className="card-item">
            Post Single Card
          </a>
          <a href="#post/action/1.1" className="card-item ">
            Post Single Review
          </a>
          <a href="#post/action/1.1" className="card-item">
            Post Single Video
          </a>
          <a href="#post/action/1.1" className="card-item border-bottom">
            Post Single
          </a>
          <a href="#post/action/1.1" className="card-item ">
            Post Types
          </a>
        </div>
      </div>
    </div>
  );
};
