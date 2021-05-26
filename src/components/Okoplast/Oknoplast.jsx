import React from "react";
import bemCssModules from "bem-css-modules";

import { default as OknoplastStyles } from "./Oknoplast.module.scss";
import MainText from "./MainText/MainText";

import img from "../../assets/Oknoplast.png";
import img2 from "../../assets/Oknoplast2.png";

const style = bemCssModules(OknoplastStyles);

const Oknoplast = () => {
  return (
    <div className={style("")}>
      <MainText />
      <img src={img} alt="" />
      <div className={style("wrapper")}>
        <div className={style("left")}>
          <h3>Klient:</h3>
          <p>OKNOPLAST</p>
        </div>
        <div className={style("middle")}>
          <h3>Wyzwanie:</h3>
          <p>
            Zastąpienie poprzedniego narzędzia, dostosowanie (modułu JPK) do
            specyfiki funkcjonowania systemu u Klienta, usprawnienie procesu
            raportowania i weryfikacji danych, skrócenie czasu generowania
            danych, umożliwienie raportowania wg nowych wytycznych Ministerstwa
            Finansów.
          </p>
          <h3>Nasza rola:</h3>
          <p>
            Kompleksowa opieka od analizy przedwdrożeniowej po modyfikację,
            personalizację i wdrożenie. Analiza obejmująca procesy, sposoby
            rejestrowania oraz źródła powstawania danych na potrzeby generowania
            raportu w systemie Klienta.
          </p>
          <h3>Efekt:</h3>
          <p>
            W krótkim czasie wdrożyliśmy system, który obsługuje ponad 100 tys.
            faktur miesięcznie. Umożliwiło to terminowy raport danych do
            Ministerstwa w wymaganym terminie i formacie. Dokonaliśmy
            modyfikacji, dzięki którym narzędzie jest w pełni dostosowane do
            potrzeb Klienta. Rezultatem tych działań jest skrócenie czasu
            generowania danych oraz poprawiona ergonomia pracy. Dodatkowe
            narzędzia do weryfikacji danych przed wysłaniem ich do Ministerstwa
            Finansów.
          </p>
          <img src={img2} alt="" />
          <p>
            Nasza współpraca z firmą Oknoplast zbiegła się w czasie z
            wprowadzeniem przez Ministerstwo Finansów obowiązkowych zmian w
            strukturze JPK dla podmiotów gospodarczych. Zlecenie obejmowało
            kompleksową obsługę programistyczną: od analizy przedwdrożeniowej,
            przez zaprogramowanie dostosowanie nowego modułu JPK w ramach
            istniejącego już systemu Microsoft Dynamics AX, aż po jego
            modyfikacje.
            <br />
            Klient na wdrożenie naszego modułu zdecydował się, ponieważ
            zaprojektowane przez nas rozwiązanie charakteryzuje się nie tylko
            szybszym generowaniem danych, lecz także lepszą optymalizacją z
            punktu widzenia user experience. W krótkim czasie osiągnęliśmy
            wyznaczone cele, dokonując nie tylko pełnego wdrożenia, ale również
            – na życzenie Zamawiającego – personalizacji i dostosowań do
            używanego systemu Dynamics AX 2012.
            <br />
            Wdrożone rozwiązanie pozwala na sprawne raportowanie deklaracji do
            Ministerstwa Finansów i urzędu skarbowego w ramach obowiązujących
            wytycznych, skracając czas uzyskiwania potwierdzenia prawidłowości
            rozliczeń. Moduł wyposażony jest w mechanizm umożliwiający kontrolę
            zawartości katalogu zarówno na poziomie wystawiania faktur jak i
            naniesienie korekt wtórnych po wygenerowaniu zestawienia. Czyni to
            proces ten znacznie wydajniejszym od standardowej procedury,
            przedsiębiorstwa wyposażone w ten system mogą prowadzić wspomniane
            czynności w zauważalnie bardziej efektywny sposób.
            <br />
            Kolejnym krokiem we współpracy z Klientem jest implementacja dodatku
            JPK Delivery, rozszerzającego obecne rozwiązania m.in. o możliwość
            wykorzystania podpisu elektronicznego oraz automatycznego wysyłania
            plików .xml bezpośrednio z system do serwisu Ministerstwa Finansów
            oraz śledzenia i pobierania UPO.
          </p>
        </div>
        <div className={style("right")}>
          <h3>Nasze wsparcie:</h3>
          <p>
            analiza przedwdrożeniowa projektowanie systemu wdrożenie modyfikacje
            Microsoft Dynamics AX 2012
          </p>
          <h3>Czas realizacji:</h3>
          <p>październik - listopad 2020</p>
          <h3>Cechy projektu:</h3>
          <p>
            bezpieczeństwo danych, dostępy, architektura systemów, rachunkowość,
            ministerstwo finansów, gov, JPK, optymalizacja
          </p>
        </div>
      </div>
    </div>
  );
};

export default Oknoplast;
