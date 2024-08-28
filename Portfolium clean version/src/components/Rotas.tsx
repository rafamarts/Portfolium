import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projeto from '../pages/Projeto';
import NotFound from '../pages/NotFound';

const Rotas: React.FC = () => {
  return (
    <Routes>
      <Route path="/Portfolium" element={ <Home /> } />
      <Route path="/Portfolium/projeto" element={ <Projeto /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
};

export default Rotas;
