import React from "react";
import "./App.css";
import Rotas from "./components/Rotas.tsx";
import Header from "./components/Header.tsx";
import Projetos from "./components/Projetos.tsx";
import BurgerMenu from "./components/BurgerMenu.tsx";

function App() {
  return (
    <>
      <BurgerMenu />
      <Header />
      <Rotas />
      {/* <Projetos/> */}
    </>
  );
}

export default App;
