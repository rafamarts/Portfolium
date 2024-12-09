import React from 'react';
import "./App.css";
// import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Importar HashRouter e Routes
import Home from './pages/Home';
import Projeto from './pages/Projeto';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import AddProjeto from './pages/AddProjeto';
import { ProjectProvider } from "./context/ProjectContext";

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <ProjectProvider>
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/projeto/:slug" element={ <Projeto /> } />
        <Route path="*" element={ <NotFound /> } />
    </Routes>
    </ProjectProvider>
  );
}

export default App;
