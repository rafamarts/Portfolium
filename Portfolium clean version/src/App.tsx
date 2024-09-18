import React from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projeto from './pages/Projeto';
import NotFound from './pages/NotFound';

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/projeto/:id" element={ <Projeto /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
