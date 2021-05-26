import React, { useState } from "react";
import bemCssModules from "bem-css-modules";
import { Link } from "react-scroll";

import { default as MainTextStyles } from "./MainText.module.scss";

import img from "../../../../assets/scrollDown.png";

const style = bemCssModules(MainTextStyles);

const MainText = () => {
  const [offset, setOffset] = useState();

  const handleScroll = () => setOffset(window.pageYOffset);
  window.addEventListener("scroll", handleScroll);

  const x = offset;
  const styles = {
    transform: `translateY(${x}px)`,
  };
  console.log(offset);

  return (
    <div id="home" className={style("")}>
      <h1 style={styles} className={style("text")}>
        Wspieramy rozwój Twojego biznesu <br /> szytymi na miarę rozwiązaniami{" "}
        <br /> w oparciu o systemy Microsoft
      </h1>
      <Link
        smooth={true}
        duration={1000}
        to="products"
        offset={-70}
      >
        <div className={style("scroll")}>
          <img src={img} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default MainText;
