import React from "react";
import bemCssModules from "bem-css-modules";

import { default as RealizationStyles } from "./Realization.module.scss";
import MainText from "./MainText/MainText";
import Realizations from "../Home/subComponents/Realizations/Realizations";


const style = bemCssModules(RealizationStyles);

const Realization = () => {
  return (
    <div className={style("")}>
        <MainText/>
        <Realizations/>
    </div>
    
  );
};

export default Realization;
