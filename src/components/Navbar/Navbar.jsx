import React, { useState } from "react";
import bemCssModules from "bem-css-modules";
// import { Link as Link1 } from "react-scroll";
import { Link } from "react-router-dom";

import { MenuItems } from "./MenuItem/MenuItem";

import { default as NavbarStyles } from "./Navbar.module.scss";

import menu from "../../assets/menu.png";
import logoInlogica from "../../assets/logo.png";
import close from "../../assets/close.png";

const style = bemCssModules(NavbarStyles);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  const Items = MenuItems.map((item, index) => {
    return (
      <li key={index} className={style("nav-item")}>
        <Link
          to={item.url}
          className={style("nav-links")}
          onClick={() => handleOnClick()}
        >
          {item.title}
        </Link>
      </li>
    );
  });
  const itemStyle = isOpen
    ? style("nav-menu", { active: true })
    : style("nav-menu");

  const logo = (
    <Link to="/">
      {isOpen ? (
        <img
          onClick={handleOnClick}
          className={style("logo")}
          src={logoInlogica}
          alt="Logo"
        />
      ) : (
        <img className={style("logo")} src={logoInlogica} alt="Logo" />
      )}
    </Link>
  );
  const menuButton = isOpen ? (
    <img onClick={handleOnClick} src={close} alt="" />
  ) : (
    <img onClick={handleOnClick} src={menu} alt="" />
  );

  return (
    <nav className={style("")}>
      <div className={style("wrapper")}>
        <div className={style("menu-button")}>{menuButton}</div>
        {logo}
        <ul className={itemStyle}>{Items}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
