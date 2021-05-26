import React from "react";
import bemCssModules from "bem-css-modules";

import { default as CEOStyles } from "./CEO.module.scss";
import img from "../../../../assets/cytat.png";

const style = bemCssModules(CEOStyles);

const CEO = () => {
  return (
    <div className={style("")} style={{ backgroundImage: `url(${img})` }}>
      <div className={style("text-wrapper")}>
        <h1 className={style("text")}>
          Wdrożenie jest strategią. <br /> Budowanie strategii jest <br /> warte tyle co jej
          wdrożenie.
        </h1>
        <p className={style("author")}>GRZEGORZ BIGOS – CEO</p>
      </div>
    </div>
  );
};

export default CEO;
