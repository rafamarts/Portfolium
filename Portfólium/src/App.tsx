import React from 'react';
import './App.css';
import Header from './components/Header.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import projeto1 from './assets/projeto1.jpg';

function App() {
  return (
    <>
      <Header />
      <div className="h-96" />
      <div className="p-8 m-12 grid gap-4 items-center justify-between">
        <ProjectCard projectName="Plataforma de Streaming de Dados" tags={ ['Javascript', 'Tailwind', 'React'] } image={ projeto1 } />
        <ProjectCard projectName="Plataforma de Streaming de Dados" tags={ ['Javascript', 'Tailwind', 'React'] } image={ projeto1 } />
        <ProjectCard projectName="Plataforma de Streaming de Dados" tags={ ['Javascript', 'Tailwind', 'React'] } image={ projeto1 } />
        <ProjectCard projectName="Plataforma de Streaming de Dados" tags={ ['Javascript', 'Tailwind', 'React'] } image={ projeto1 } />
      </div>

    </>
  );
}

export default App;
