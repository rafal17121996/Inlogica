import React from "react";
import bemCssModules from "bem-css-modules";

import { default as FactsStyles } from "./Facts.module.scss";

const style = bemCssModules(FactsStyles);

const Facts = () => {
  return (
    <div className={style("")}>
      <div className={style("left")}>
        <h1>
          Kilka faktów, <br />
          których o nas <br />
          nie wiesz
        </h1>
      </div>
      <div className={style("right")}>
        <div className={style("column")}>
          <div className={style("item")}>
            <h3>12</h3>
            <p>produktów</p>
          </div>
          <div className={style("item")}>
            <h3>22</h3>
            <p>lata na rynku</p>
          </div>
          <div className={style("item")}>
            <h3>+34</h3>
            <p>lorem ipsum</p>
          </div>
        </div>
        <div className={style("column")}>
          <div className={style("item")}>
            <h3>470</h3>
            <p>wdrożeń</p>
          </div>
          <div className={style("item")}>
            <h3>8%</h3>
            <p>lorem ipsum</p>
          </div>
          <div className={style("item")}>
            <h3>34</h3>
            <p>specjalistów</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
