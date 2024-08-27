import React, { useEffect } from 'react';

function Projeto() {
  // Executa o console.log quando o componente é montado
  useEffect(() => {
    console.log('entrei em projetos');
  }, []);

  return (
    <div>
      <h2>projetos</h2>
    </div>
  );
}

export default Projeto;
