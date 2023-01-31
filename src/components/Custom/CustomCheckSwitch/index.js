import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./CheckSwitch.scss";

export const CheckSwitch = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);
  return (
    <label className="theme-change">
      <input
        type="checkbox"
        className={`${dark ? "checked" : "unchecked"}`}
        onClick={() => toggleTheme()}
      />
      <span />
    </label>
  );
};
