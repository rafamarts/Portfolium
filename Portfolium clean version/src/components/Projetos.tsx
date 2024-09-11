import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import projeto1 from "../assets/projeto1.jpg";

function Projetos(props) {
  return (
    <div>
      <div
        className="p-8 m-12 grid gap-4
        sm:grid-cols-1
        md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]
        "
      >
        <ProjectCard
          projectName="Plataforma de Streaming de Dados"
          tags={["Javascript", "Tailwind", "React"]}
          image={projeto1}
        />
        <ProjectCard
          projectName="Plataforma de Streaming de Dados"
          tags={["Javascript", "Tailwind", "React"]}
          image={projeto1}
        />
        <ProjectCard
          projectName="Plataforma de Streaming de Dados"
          tags={["Javascript", "Tailwind", "React"]}
          image={projeto1}
        />
        <ProjectCard
          projectName="Plataforma de Streaming de Dados"
          tags={["Javascript", "Tailwind", "React"]}
          image={projeto1}
        />
      </div>
    </div>
  );
}

Projetos.propTypes = {};

export default Projetos;
