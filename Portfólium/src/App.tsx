import React from 'react';
import './App.css';
import Rotas from './components/Rotas.tsx';
import Header from './components/Header.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import projeto1 from './assets/projeto1.jpg';

function App() {
  return (
    <>
      <Header />
      <Rotas />
      <div
        className="p-8 m-12 grid gap-4
        sm:grid-cols-1
        md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]
        "
      >
        <ProjectCard projectName="Plataforma de Streaming de Dados" tags={ ['Javascript', 'Tailwind', 'React'] } image={ projeto1 } />
        <ProjectCard projectName="Plataforma de Streaming de Dados" tags={ ['Javascript', 'Tailwind', 'React'] } image={ projeto1 } />
        <ProjectCard projectName="Plataforma de Streaming de Dados" tags={ ['Javascript', 'Tailwind', 'React'] } image={ projeto1 } />
        <ProjectCard projectName="Plataforma de Streaming de Dados" tags={ ['Javascript', 'Tailwind', 'React'] } image={ projeto1 } />
      </div>
    </>
  );
}

export default App;
