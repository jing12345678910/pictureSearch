import { Link, Outlet } from "react-router-dom";

import React, { useState, useEffect } from "react";

import Footer from "./components/Footer";
import { GlobalOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import { useAppStore } from "./store/appStore";
import { getTheme, setTheme } from "./utils/localStorage";
import "./styles/index.css"
const setBodyThemeClass = (theme) => {
  const body = document.body;
  body.className = "";
  body.classList.toggle(theme);
};

const items = [
  {
    key: "zh_TW",
    label: (
      <Button onClick={() => i18n.changeLanguage("zh_TW")}>繁體中文</Button>
    ),
  },

  {
    key: "en_US",
    danger: true,
    label: (
      <Button onClick={() => i18n.changeLanguage("en_US")}>English</Button>
    ),
  },
];
const Layout = () => {
  const { t } = useTranslation();
  const appStore = useAppStore();
  const { isLightMode, setIsLightMode } = appStore;
  const setBodyThemeClass = (theme) => {
    const body = document.body;
    body.className = "";
    body.classList.toggle(theme);
  };
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    setTheme(!isLightMode ? "light" : "dark"); //localStorage=>'dark'
    setBodyThemeClass(getTheme("Theme")); //dark
  };
  useEffect(() => {
    const currentTheme = getTheme(); //預設light
    setBodyThemeClass(currentTheme);
  }, []);
  return (
    <div>
      <nav>
        <ul>
          <li>
            {" "}
            <div className="App"></div>
          </li>
          <li>
            <Link to="/">{t("home")}</Link>
          </li>
          <li>
            <Link to="/about">{t("about")}</Link>
          </li>
          <li>
            <Dropdown menu={{ items }}>
              <Button onClick={(e) => e.preventDefault()}>
                <GlobalOutlined />
              </Button>
            </Dropdown>
          </li>
          <li>
            <Button type="primary" onClick={toggleTheme}>
              {isLightMode ? <SunOutlined /> : <MoonOutlined />}
            </Button>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
