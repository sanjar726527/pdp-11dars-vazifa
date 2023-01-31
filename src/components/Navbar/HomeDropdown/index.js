import React from "react";
import { HomeDropdown } from "../../Custom/CustomDropdowns/HomeDropdown";
import { LifeStyleDropdown } from "../../Custom/CustomDropdowns/LifestyleDropdown";
import { PagesDropdown } from "../../Custom/CustomDropdowns/PagesDropdown";
import { PostDropdown } from "../../Custom/CustomDropdowns/PostDropdown";
import "../../Custom/CustomDropdowns/CustomDropdown.scss";

export const CustomDropdown = () => {
  return (
    <div className="customDropdown">
      <HomeDropdown />
      <PagesDropdown />
      <PostDropdown />
      <LifeStyleDropdown />
      <div className="dashboard">
        <a href="#dashboard">Dashboard</a>
      </div>
    </div>
  );
};
