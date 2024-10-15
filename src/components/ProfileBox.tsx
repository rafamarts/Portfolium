import React from "react";
import "../styles/ProfileBox.css";
import foto from "../assets/foto2.png";
import github from "../assets/icones/github-logo.png";
import linkedin from "../assets/icones/linkedin_logo_icon_147268.png";
import curriculum from "../assets/icones/curriculum1.png";

function ProfileBox() {
  return (
    <div className="container">
      <div className="background"></div> {/*fundo azul */}
      <img
        src={foto}
        alt="foto de desenvolvedor front end"
        className="foto-perfil"
      />
      <div className="texto1">
        <h1>
          <br />
          Rafael Nunes
        </h1>
        <hr />
        <h2>Desenvolvedor Front-end</h2>
      </div>
      <div className="texto2">
        Criativo e entusiasta de soluções inovadoras no desenvolvimento de
        software, desenvolvi de forma autodidata competências em programação e
        design, e estou determinado a destacar-me como programador profissional.
        Valorizo o trabalho em equipe e estou sempre em busca de soluções
        eficazes para desafios tecnológicos, além de estar comprometido com o
        aprendizado contínuo.
      </div>
      <div className="icone">
        <img src={github} alt="github" className="iconeRedondo" />
        <img src={linkedin} alt="linkedin" className="iconeRedondo" />
        <img src={curriculum} alt="curriculum" className="iconeComprido" />
      </div>
    </div>
  );
}

export default ProfileBox;
