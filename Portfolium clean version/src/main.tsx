import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { HashRouter } from 'react-router-dom'; // Substitua BrowserRouter por HashRouter
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
