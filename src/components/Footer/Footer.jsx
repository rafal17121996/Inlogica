import React from "react";
import bemCssModules from "bem-css-modules";
import { Link } from "react-scroll";

import { default as FooterStyles } from "./Footer.module.scss";

import logo from "../../assets/logoNav.png";
import microsoft from "../../assets/microsoft.png";
import img from "../../assets/scrollTop.png";

const style = bemCssModules(FooterStyles);

const Footer = () => {
  return (
    <div className={style("")}>
      <div className={style("wrapper")}>
        <div className={style("text-wrapper")}>
          <p>Produkty i usługi</p>
          <p>Realizacje</p>
          <p>Artykuły</p>
          <p>O Nas</p>
          <p>Kontakt</p>
        </div>
        <div className={style("text-wrapper")}>
          <p>Realizacje</p>
          <p>Zadzwoń lub napisz do nas</p>
        </div>
        <div className={style("text-wrapper")}>
          <p>Inlogica Sp. z o.o. Sp.k.</p>
          <p>office@inlogica.com</p>
          <p>+48 61 278 58 30</p>
          <p>ul. Św. Michała 43</p>
          <p>61-119 Poznań</p>
        </div>
        <div className={style("text-wrapper")}>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Linkedin</p>
        </div>
      </div>
      <div className={style("scroll-btn")}>
        <Link smooth={true} duration={1000} to="home">
          <img src={img} alt="" />
        </Link>
      </div>
      <div className={style("partner")}>
        <img src={microsoft} alt="logo" />
      </div>
      <div className={style("bottom")}>
        <div className={style("bottom-wrapper")}>
          <p>Informacje prawne</p>
          <p>Polityka prywatności</p>
          <p>Polityka plików cookies</p>
          <p>Regulamin serwisu</p>
          <p>Formularz cofnięcia zgód</p>
          <div className={style("logo")}>
            <img src={logo} alt="logo" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
