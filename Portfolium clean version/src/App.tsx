import React from "react";
import "./App.css";
import Rotas from "./components/Rotas.tsx";
import Header from "./components/Header.tsx";
import Projetos from "./components/Projetos.tsx";
import BurgerMenu from "./components/BurgerMenu.tsx";
import Profile from "./components/Profile.tsx";
import Skill from "./components/Skill.tsx";
import FundoDandelion from "./components/FundoDandelion.tsx";
import HeaderPetalas from "./components/HeaderPetalas";

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <div className="menu">

      </div>
      <BurgerMenu />
      <Header />
      <HeaderPetalas />
      <div className="fundo">
        <FundoDandelion />
      </div>
      <Profile />
      <Skill />
      {/* <Rotas /> */}
      {/* <Projetos/> */}
    </>
  );
}

export default App;
