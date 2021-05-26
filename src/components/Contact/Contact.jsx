import React from "react";
import bemCssModules from "bem-css-modules";

import { default as ContactStyles } from "./Contact.module.scss";

const style = bemCssModules(ContactStyles);

const Contact = () => {
  return (
    <div className={style("")}>
      <div className={style("info-wrapper")}>
        <div className={style("left")}>
          <h1>Kontakt</h1>
        </div>
        <div className={style("right")}>
          <div className={style("top")}>
            <div>
              <h3>BIURO</h3>
              <p>Inlogica</p>
              <p>ul. Św. Michała 43</p>
              <p>61-119 Poznań</p>
              <p>office@inlogica.com</p>
              <p>+48 61 278 58 30</p>
            </div>
            <div>
              <h3>Znajdź NAS</h3>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Linkedin</p>
            </div>
          </div>
          <div className={style("bottom")}>
            <div>
              <h3>Dyrektor działu sprzedaży</h3>
              <p>Michał Paluszczak</p>
              <p>+48 (607) 311 077</p>
              <p>e-mail: mpa@inlogica.pl</p>
            </div>
            <div>
              <h3>Manager ds. relacji z klientami</h3>
              <p>Beata Matuszyn</p>
              <p>+48 (667) 633 915</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style("contact-wrapper")}>
        <div className={style("left")}>
          <h1>
            Jak możemy <br />
            Ci pomóc?
          </h1>
        </div>
        <div className={style("mailer")}>
          <input type="text" placeholder="Imię i nazwisko*" />
          <input type="text"  placeholder="Telefon*" />
          <input type="text"  placeholder="Email"/>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <p>
            Wyrażam zgodę na przekazywanie mi przez Inlogica Sp. z o.o. Sp.k.
            informacji handlowych za pośrednictwem:
          </p>
          <input type="checkbox" name="" id="" />{" "}
          <p>wiadomości elektronicznych (e-mail)</p>
          <input type="checkbox" name="" id="" />{" "}
          <p>
            telekomunikacyjnych urządzeń końcowych (telefonicznie lub sms/mms).{" "}
          </p>
          <p>
            Administratorem danych osobowych jest Inlogica Sp. z o.o. Sp.k. z
            siedzibą w Poznaniu (61-119), przy ul. Św. Michała 43, z którym
            można skontaktować się listownie pod wskazanym powyżej adresem lub
            elektronicznie za pośrednictwem skrzynki: office@inlogica.com.
          </p>
        </div>
      </div>
      <div className={style("data-wrapper")}>
        <h3>Dane rejestrowe</h3>
        <p>
          Inlogica Sp. z o.o. Sp.k., ul. Św. Michała 43, 61-119 Poznań <br />
          NIP: 7822871457, REGON: 384600047, Sąd Rejonowy Poznań - Nowe Miasto i
          Wilda w Poznaniu, <br />
          VIII Wydział Gospodarczy Krajowego Rejestru Sądowego, KRS: 0000808173
        </p>
      </div>
    </div>
  );
};

export default Contact;
