import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Projeto from '../pages/Projeto';
import NotFound from '../pages/NotFound';

const Rotas: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* As rotas devem começar com '/' após o '#' no HashRouter */}
        <Route path="/" element={<Home />} />
        <Route path="/projeto" element={<Projeto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
