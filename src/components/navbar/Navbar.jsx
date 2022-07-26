import {
  ChatBubbleOutlineOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  LightMode,
  ListOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";
const Navbar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>

          {darkMode ? (
            <div className="item">
              <LightMode
                className="icon"
                onClick={() => {
                  dispatch({ type: "TOGGLE" });
                }}
              />
            </div>
          ) : (
            <div className="item">
              <DarkModeOutlined
                className="icon"
                onClick={() => {
                  dispatch({ type: "TOGGLE" });
                }}
              />
            </div>
          )}

          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?cs=srgb&dl=pexels-mentatdgt-937481.jpg&fm=jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
