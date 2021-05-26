import React from "react";
import bemCssModules from "bem-css-modules";

import { default as ItemStyles } from "./Item.module.scss";
import { Link } from "react-router-dom";

const style = bemCssModules(ItemStyles);

const Item = ({ img, title, text }) => {
  return (
    <li className={style("")}>
      <div className={style("link")}>
        <figure className={style("img-wrapper")}>
        <Link
          to={"oknoplast"}
        >
         <img className={style("img")} alt="Travel Image" src={img} />
        </Link>
          
        </figure>
        <div className={style("info")}>
          <h5 className={style("title")}>{title}</h5>
          <br />
          <span className={style("text")}>{text}</span>
        </div>
      </div>
    </li>
  );
};

export default Item;
