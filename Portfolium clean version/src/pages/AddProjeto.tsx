import React from 'react';
import { useNavigate } from 'react-router-dom';
import autenticador from '../components/autenticador';

function AddProjeto() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpa o localStorage
    localStorage.removeItem('user');
    
    // Redireciona para a página de login
    navigate('/login');
  };

  return (
    <div>
      <h2>Adicionar Projeto</h2>
      <button onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}

export default autenticador(AddProjeto);
