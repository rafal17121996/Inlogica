import React from "react";
import bemCssModules from "bem-css-modules";

import { default as ArticlesStyles } from "./Articles.module.scss";
import ScrollMenu from "react-horizontal-scrolling-menu";

import img from "../../../../assets/arrow.png"

const style = bemCssModules(ArticlesStyles);

const list = [
  {
    title: "Microsoft Dynamics 365 Business Central dostępny na rynku polskim",
    data: "MARZEC 12, 2020",
    text: "Microsoft udostępnił chmurową wersję Microsoft Dynamics 365 Business Central, kompleksowego pakietu aplikacji biznesowych dla małych i średnich przedsiębiorstw. ",
  },
  {
    title: "Integracja Dynamics 365 z LinkedIn2 ",
    data: "LUTY 12, 2020",
    text: "Wraz z wprowadzeniem na rynek aplikacji Dynamics 365, Microsoft zaproponował nowoczesne środowisko zintegrowanych usług w chmurze, które dzięki połączeniu wszystkich danych w przedsiębiorstwie pozwalają na podejmowanie trafniejszych i szybszych decyzji.",
  },
  {
    title: "Microsoft Dynamics 365 Business Central dostępny na rynku polskim231",
    data: "MARZEC 12, 2020",
    text: "Microsoft udostępnił chmurową wersję Microsoft Dynamics 365 Business Central, kompleksowego pakietu aplikacji biznesowych dla małych i średnich przedsiębiorstw. ",
  },
  {
    title: "Integracja Dynamics 365 z LinkedIn 3",
    data: "LUTY 12, 2020",
    text: "Wraz z wprowadzeniem na rynek aplikacji Dynamics 365, Microsoft zaproponował nowoczesne środowisko zintegrowanych usług w chmurze, które dzięki połączeniu wszystkich danych w przedsiębiorstwie pozwalają na podejmowanie trafniejszych i szybszych decyzji. ",
  },
  {
    title: "Microsoft Dynamics 365 Business Central dostępny na rynku polskim32",
    data: "MARZEC 12, 2020",
    text: "Microsoft udostępnił chmurową wersję Microsoft Dynamics 365 Business Central, kompleksowego pakietu aplikacji biznesowych dla małych i średnich przedsiębiorstw. ",
  },
  {
    title: "Integracja Dynamics 365 z LinkedIn4 ",
    data: "LUTY 12, 2020",
    text: "Wraz z wprowadzeniem na rynek aplikacji Dynamics 365, Microsoft zaproponował nowoczesne środowisko zintegrowanych usług w chmurze, które dzięki połączeniu wszystkich danych w przedsiębiorstwie pozwalają na podejmowanie trafniejszych i szybszych decyzji. ",
  },
  {
    title: "Microsoft Dynamics 365 Business Central dostępny na rynku polskim5",
    data: "MARZEC 12, 2020",
    text: "Microsoft udostępnił chmurową wersję Microsoft Dynamics 365 Business Central, kompleksowego pakietu aplikacji biznesowych dla małych i średnich przedsiębiorstw. ",
  },
  {
    title: "Integracja Dynamics 365 z LinkedIn 6",
    data: "LUTY 12, 2020",
    text: "Wraz z wprowadzeniem na rynek aplikacji Dynamics 365, Microsoft zaproponował nowoczesne środowisko zintegrowanych usług w chmurze, które dzięki połączeniu wszystkich danych w przedsiębiorstwie pozwalają na podejmowanie trafniejszych i szybszych decyzji. ",
  },
];

const Articles = () => {
  return (
    <div className={style("")}>
      <h1 className={style("title")}>Artykuły</h1>
      {/* <ScrollMenu
        data={list.map((item) => (
          <div
            key={item.title}
            className={style("item")}
            onClick={() => console.log("x")}
          >
            <p>{item.data}</p>
            <p>{item.title}</p>
            <p>{item.text}</p>
          </div>
        ))}
      /> */}
      <div className={style("scrollmenu")}>
        {list.map((item) => (
          <div
            key={item.title}
            className={style("item")}
            onClick={() => console.log("x")}
          >
            <p className={style("data")}>{item.data} </p>
            <p className={style("tit")}>{item.title} </p>
            <p className={style("text")}>{item.text} </p>
            <div className={style("arrow")}><img src={img} alt="" /></div>
          </div>))}
      </div>
    </div>
  );
};

export default Articles;
