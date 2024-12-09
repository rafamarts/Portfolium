import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import ImageWrapper from "./ImageWrapper";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import "../styles/Projetos.css";
import BackgroundText from './BackgroundText';
import { useProjects } from "../context/ProjectContext";

function Projetos() {
  const projectData = useProjects();//pega os dados do contexto
console.table(projectData);
  return (
    <div className="projetos-pai" id="projects">
      <h1>PROJETOS</h1>

      <BackgroundText texto="PROJETOS"/>
      <div>
        <ul>
          {projectData.map((projeto, index) => (
            <ImageWrapper key={projeto.slug} 
            style={{ borderRadius: '10%' }} 
            delay={(index + 1) * 0.2}>
              <li>
                <ProjectCard
                  projectName={projeto.title}
                  tags={projeto.metadata.techs.split(',').map(tag => tag.trim())}
                  image={projeto.metadata.iconimage}
                  slug={projeto.slug}
                />
              </li>
            </ImageWrapper>
          ))}
        </ul>
      </div>
    </div>
  );
}

Projetos.propTypes = {};

export default Projetos;
