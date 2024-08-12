import React from 'react';

type CardsProps = {
  projectName: string;
  tags: string[];
  slug: string;
  image: string;
};

function ProjectCard({ projectName, tags, slug, image }: CardsProps) {
  return (
    <div
      className="rounded-2xl shadow-xl overflow-hidden  h-100% bg-gray-600"
      name="conteiner-card"
    >
      <img
        src={ image }
        className="w-full object-cover"
        name="thumb-projeto"
      />
      <div className="p-4" name="div-tags">
        <h2 className="text-2xl font-bold text-white flex flex-wrap mb-6">{projectName}</h2>
        <p className="text-white  flex flex-wrap items-center">
          {
        tags.map((tag) => (
          <span key={ tag } className="text-sm bg-gray-700 p-2 rounded-md m-1">{tag}</span>
        ))
        }
        </p>
      </div>
      <div name="botao-card">
        <a href={ `/${slug}` }>
          <button
            className="bg-slate-900 p-4 w-full text-white text-sm rounded-md text-xl font-extrabold
        scale-110 transition-all duration-300 hover:scale-100 "
          >
            Ver mais detalhes →
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
