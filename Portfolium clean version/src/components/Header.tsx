import React from "react";
import "../styles/Header.css";
import HeaderDandelions from "./HeaderDandelions";
import HeaderPetalas from "./HeaderPetalas";


function Header() {
  return (

      <div className="titulo-pai" id="home">
        <h1 className="header-title">Portfólio</h1>
        <br /> <hr /> <br />
        <h2 className="header-subtitle">Portfólio front end de Rafael Nunes</h2>
      </div>

  );
}

export default Header;
