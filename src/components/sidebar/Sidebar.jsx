import {
  AccountCircle,
  Assessment,
  CreditCard,
  Dashboard,
  LocalShipping,
  Logout,
  Notifications,
  PersonOutlineOutlined,
  Psychology,
  Settings,
  SettingsSystemDaydream,
  Store,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">Admin Portal</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlined className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to={"/products"} style={{ textDecoration: "none" }}>
            <li>
              <Store className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCard className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>

          <li>
            <Assessment className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <Notifications className="icon" />
            <span>Notfications</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <SettingsSystemDaydream className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <Psychology className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountCircle className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
