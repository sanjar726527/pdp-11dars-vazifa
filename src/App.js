import { useState } from "react";
import "./App.scss";

import ThemeContext from "./components/context/ThemeContext";
import CustomLastWeekTop from "./components/LastWeekTop/CustomLastWeekTop";
import { CustomMain } from "./components/Main/CustomMain";
import { CustomNavbar } from "./components/Navbar/CustomNavbar";
import CustomSports from "./components/Sports/CustomSports";
import CustomTodayTop from "./components/TodayTop/CustomTodayTop";
import CustomTrending from "./components/Trending/CustomTrending";
import CustomNews from "./components/News/CustomNews";
import { CustomFooter } from "./components/Footer/CustomFooter";
import CustomNeverMiss from "./components/NeverMiss/CustomNeverMiss";

function App() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark(dark => (dark ? false : true));
  };
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div className={`app ${dark ? "dark" : ""}`}>
        <CustomNavbar />
        <div className="section">
          <CustomMain />
          <CustomTodayTop />
          <CustomLastWeekTop />
          <CustomTrending />
          <CustomSports />
          <CustomNews />
          <CustomNeverMiss />
        </div>
        <CustomFooter />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
