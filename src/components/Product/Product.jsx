import React from "react";
import bemCssModules from "bem-css-modules";

import { default as ProductStyles } from "./Product.module.scss";
import MainText from "./subComponents/MainText/MainText";
import ProductPanel from "../Home/subComponents/ProductPanel/ProductPanel";

import img1 from "../../assets/imgHome1.jpg";
import img2 from "../../assets/imgHome2.jpg";
import img3 from "../../assets/imgHome3.jpg";
import PlusButton from "../Home/subComponents/PlusButton/PlusButton";


const style = bemCssModules(ProductStyles);

const Product = () => {
  return (
    <div className={style("")}>
        <MainText/>
        <ProductPanel
        color={"#ffe600"}
        textColor={"#000000"}
        layoutLeft={true}
        img={img1}
        title={"Analiza przedwdrożeniowa"}
        text={
          "Wraz z wprowadzeniem na rynek aplikacji Dynamics 365, Microsoft zaproponował nowoczesne środowisko zintegrowanych usług w chmurze, które dzięki połączeniu wszystkich danych w przedsiębiorstwie pozwalają na podejmowanie trafniejszych i szybszych decyzji. "
        }
      />
      <ProductPanel
        color={"#ffffff"}
        textColor={"#000000"}
        layoutLeft={false}
        img={img2}
        title={"Helpdesk"}
        text={
          "Wraz z wprowadzeniem na rynek aplikacji Dynamics 365, Microsoft zaproponował nowoczesne środowisko zintegrowanych usług w chmurze, które dzięki połączeniu wszystkich danych w przedsiębiorstwie pozwalają na podejmowanie trafniejszych i szybszych decyzji. "
        }
      />
      <ProductPanel
        color={"#000000"}
        textColor={"#ffffff"}
        layoutLeft={true}
        img={img3}
        title={"Zarządzanie projektami"}
        text={
          "Wraz z wprowadzeniem na rynek aplikacji Dynamics 365, Microsoft zaproponował nowoczesne środowisko zintegrowanych usług w chmurze, które dzięki połączeniu wszystkich danych w przedsiębiorstwie pozwalają na podejmowanie trafniejszych i szybszych decyzji. "
        }
      />
      <div  className={style("plus-btn")}><PlusButton/></div>
    </div>
    
  );
};

export default Product;
