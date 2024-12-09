import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

type CardsProps = {
  projectName: string;
  tags: string[];
  slug: string;
  image: string;
};

function ProjectCard({ projectName, tags, slug, image }: CardsProps) {
  return (

      <div className="conteiner-card" name="conteiner-card">
        <img src={image} name="thumb-projeto" />

        <div name="div-tags" className="div-tags">
          <h2>{projectName}</h2>
          <p>
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </p>
        </div>
        <div name="botao-card" className="botao-card">
          <Link to={`projeto/${slug}`}>
            <button>Ver mais</button>
          </Link>
        </div>
      </div>

  );
}

export default ProjectCard;
