import React from "react";
import bemCssModules from "bem-css-modules";

import { default as ProductPanelStyles } from "./ProductPanel.module.scss";

const style = bemCssModules(ProductPanelStyles);

const ProductPanel = ({ img, color, text, title, layoutLeft, textColor }) => {
  const borderStyle = `2px solid ${textColor}`
  return (
    <div id='products' className={style("")}>
      {layoutLeft ? (
        <div className={style("wrapper")}>
          <div className={style("left")}>
            <img src={img} alt="" />
          </div>
          <div className={style("right")} style={{ backgroundColor: color, color: textColor }}>
            <h3>Produkty i usługi</h3>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className={style("btn")}>
            <button style={{ color: textColor, border: borderStyle}}>Zobacz więcej</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={style("wrapper")}>
          <div className={style("right")} style={{ backgroundColor: color, color: textColor }}>
            <h3>Produkty i usługi</h3>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className={style("btn")}>
            <button style={{ color: textColor, border: borderStyle}}>Zobacz więcej</button>
            </div>
          </div>
          <div className={style("left")}>
            <img src={img} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPanel;
