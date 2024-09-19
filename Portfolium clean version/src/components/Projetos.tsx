import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
// import projeto1 from "../assets/projeto1.jpg";
import ProjectData from "../data/ProjectData";
import { Link } from "react-router-dom"; 
import "../styles/Projetos.css";

function Projetos(props) {
  return (
    <div className="projetos-pai" id="projects">
      <h1>PROJETOS</h1>
      <div>
        <ul>
          {ProjectData.map((projeto) => (
            <Link key={projeto.id} to={`/projeto/${projeto.id}`}>
            <li>
              <ProjectCard
                projectName={projeto.title}
                tags={projeto.techs}
                image={projeto.iconimage}
                slug={projeto.id}
              />
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

Projetos.propTypes = {};

export default Projetos;