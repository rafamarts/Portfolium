import React from "react";
import "../styles/Header.css";
import dandelion_c from "../assets/c.png";
import nuvemA from "../assets/nuvem1.png";
import nuvemB from "../assets/nuvem2.png";

function Header() {
  return (
    <div className="header-pai">
      <div className="titulo-pai">
        <h1 className="header-title">Portfólio</h1>
        <br /> <hr /> <br />
        <h2 className="header-subtitle">Portfólio front end de Rafael Nunes</h2>
      </div>
      <img className="nuvemA" src={nuvemA} />
      <img className="nuvemB" src={nuvemB} />
      <img className="dandelionBaseA" src={dandelion_c} />
      <img className="dandelionBaseB" src={dandelion_c} />
      <img className="dandelionBaseC" src={dandelion_c} />
      <img className="dandelionBaseD" src={dandelion_c} />
      <img className="dandelionBaseE" src={dandelion_c} />
      <img className="dandelionBaseF" src={dandelion_c} />
      <img className="dandelionBaseG" src={dandelion_c} />
      <img className="dandelionBaseH" src={dandelion_c} />
    </div>
  );
}

export default Header;
