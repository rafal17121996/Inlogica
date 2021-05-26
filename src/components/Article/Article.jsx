import React from "react";
import bemCssModules from "bem-css-modules";

import { default as ArticleStyles } from "./Article.module.scss";
import MainText from "./MainText/MainText";
import Articles from "../Home/subComponents/Articles/Articles";


const style = bemCssModules(ArticleStyles);

const Article = () => {
  return (
    <div className={style("")}>
        <MainText/>
        <Articles/>
    </div>
    
  );
};

export default Article;
