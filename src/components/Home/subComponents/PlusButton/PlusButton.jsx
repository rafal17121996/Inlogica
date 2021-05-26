import React from "react";
import bemCssModules from "bem-css-modules";

import { default as PlusButtonStyles } from "./PlusButton.module.scss";

const style = bemCssModules(PlusButtonStyles);

const PlusButton = () => {
  return (
    <div className={style("")}>
        <button>+</button>
    </div>
  );
};

export default PlusButton;
