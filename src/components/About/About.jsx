import React from "react";
import bemCssModules from "bem-css-modules";

import { default as AboutStyles } from "./About.module.scss";
import MainText from "./MainText/MainText";

import img from "../../assets/about2.png";
import CEO from "../Home/subComponents/CEO/CEO";
import Facts from "../Home/subComponents/Facts/Facts";

const style = bemCssModules(AboutStyles);

const About = () => {
  return (
    <div className={style("")}>
      <MainText />
      <img src={img} alt="" />
      <div className={style("about-wrapper")}>
        <h3>O NAS</h3>
        <div className={style("text-wrapper")}>
          <p>
            „Inlogica stawia na partnerstwo. Rozpoczynając współpracę z firmą
            zainteresowaną naszymi usługami staramy się wychodzić poza schemat
            sprowadzający się do odwzorowania założeń dokumentacji technicznej.
            Naszą misją jest dzielenie się zdobytym podczas wielu lat
            działalności doświadczeniem.
          </p>
          <p>
            Klient ma pewność, że do powierzonych nam zadań podchodzimy z
            należytą starannością i ambicją – tak, jakbyśmy wykonywali je na
            własny użytek. Wprowadzane rozwiązania optymalizujemy pod kątem
            użyteczności tak, aby te były jak najbardziej pomocne w codziennej
            pracy i przekraczały oczekiwania naszych Klientów”.
          </p>
        </div>
      </div>
      <CEO />
      <div className={style("text2-wrapper")}>
        <p>
          Zespół Inlogica to programiści i konsultanci, którzy zdobywali
          doświadczenie podczas realizacji projektów związanych z wdrażaniem i
          wsparciem oprogramowania firmy Microsoft w wielu krajach Europy oraz w
          USA.
        </p>
        <p>
          Pracowali min. dla firm z Danii, Niemiec, Szwajcarii i Polski,
          każdorazowo dostosowując wprowadzane rozwiązania do lokalnej specyfiki
          i indywidualnych potrzeb Klientów.{" "}
        </p>
        <p>
          Realizowali projekty dla firm zajmujących się min. dystrybucją,
          produkcją opakowań ochronnych, obrotem i dystrybucją energii
          elektrycznej, produkcją wyposażenia łazienek, produkcją materiałów
          budowlanych, hotelarstwem czy produkcją rowerów.
        </p>
      </div>
      <Facts/>
    </div>
  );
};

export default About;
