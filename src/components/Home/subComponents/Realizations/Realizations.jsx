import React from "react";
import bemCssModules from "bem-css-modules";

import { default as RealizationsStyles } from "./Realizations.module.scss";
import Item from "./Items/Item";

const style = bemCssModules(RealizationsStyles);

import img1 from "../../../../assets/realizattions1.jpg";
import img2 from "../../../../assets/realizattions2.jpg";
import img3 from "../../../../assets/realizattions3.jpg";
import img4 from "../../../../assets/realizattions4.jpg";
import img5 from "../../../../assets/realizattions5.jpg";
import img6 from "../../../../assets/realizattions1.jpg";

const Realizations = () => {
  return (
    <div className={style("")}>
      <h1 className={style("title")}>Nasze realizacje</h1>
      <div className={style("container")}>
        <div className={style("wrapper")}>
          <ul className={style("items")}>
            <Item
              img={img1}
              title="Branża Automotive"
              text="Budowa architektury dostępów 
              do Microsoft Dynamics AX dla Użytkowników systemu"
            />

            <Item
              img={img2}
              title="Produkcja okien"
              text="Kompleksowa opieka od analizy przedwdrożeniowej po modyfikację, personalizację i wdrożenie. "
            />

            <Item
              img={img3}
              title="Dystrybucja odzieży"
              text="Wprowadzenie aplikacji na urządzenia mobilne organizującej codzienną pracę magazynierów"
            />
          </ul>
          <ul className={style("items")}>
            <Item
              img={img4}
              title="Dystrybucja odzieży"
              text="Przygotowanie mobilnej aplikacji dla sklepów sieci odzieżowej pozwalającej na przeprowadzenie inwentaryzacji towaru w oparciu o system Microsoft Dynamics AX."
            />
            <Item
              img={img5}
              title="Dystrybucja odzieży"
              text="Eksport danych z systemu Microsoft Dynamics AX do systemu bankowego"
            />
            <li className={style("item-wrapper")}>
              <div className={style("link")}>
                <div className={style("img-wrapper")}>
                  <button>+</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Realizations;
