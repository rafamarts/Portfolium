import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ProfilePic from './ProfilePic';

function Header() {
// ---------------------(1)Muda cor do menu quando clicado---------------------//
  const [linkActive, setLinkActive] = useState('');
  const handleClick = (section) => (event) => {
    event.preventDefault(); // Previne o comportamento padrão do link
    setLinkActive(section);
  };
  // --------------------Fim Muda cor do menu quando clicado-------------------//

  // ---------------------(2)Muda cor do menu quando clicado---------------------//
  const headerRef = useRef<HTMLHeadingElement>(null);// cria uma referencia para identificar o header

  useEffect(() => { // ao mover deixa o fundo do menu mais escuro
    const handleScroll = () => {
      if (window.scrollY > 0) {
        headerRef.current.classList.add('bg-zinc-900', 'py-4');
        headerRef.current.classList.remove('py-8');
      } else {
        headerRef.current.classList.remove('bg-zinc-900', 'py-4');
        headerRef.current.classList.add('py-8');
      }
    };

    window.addEventListener('scroll', handleScroll);// adiciona o evento na janela toda
  }, []);

  // ---------------------Fim Muda cor do menu quando clicado---------------------//

  return (
    <div className="bg-zinc-800 h-screen w-full">
      <header
        ref={ headerRef }// (2)marca esse elemento como headerRef
        className="fixed w-full flex justify-between items-center px-8 py-8
        transition duration-300 ease-in-out"
      >
        <p className="text-orange-500 text-2xl font-extrabold">logo</p>
        <nav className="text-white flex gap-4">
          <a
            href="#"
            className={ `hover:text-orange-500 ${linkActive === 'sobre' ? 'text-orange-500' : ''}` }
            onClick={ handleClick('sobre') }
          >
            Sobre
          </a>
          <a
            href="#"
            className={ `hover:text-orange-500 ${linkActive === 'habilidades' ? 'text-orange-500' : ''}` }
            onClick={ handleClick('habilidades') }
          >
            Habilidades
          </a>
          <a
            href="#"
            className={ `hover:text-orange-500 ${linkActive === 'projetos' ? 'text-orange-500' : ''}` }
            onClick={ handleClick('projetos') }
          >
            Projetos
          </a>
          <a
            href="#"
            className={ `hover:text-orange-500 ${linkActive === 'sim' ? 'text-lime-400' : ''}` }
            onClick={ handleClick('sim') }
          >
            Sim
          </a>
        </nav>
      </header>
      <div className="h-full bg-black flex items-center justify-center px-8 gap-8 ">
        <div className="text-white" id="dados-criador">
          <h1 className="text-6xl font-bold" id="nome">Rafael Nunes</h1>
          <p className="text-2xl text-orange-500" id="profissao">Programador Front End</p>
          <div className="flex flex-row gap-4" id="social-media">
            <a href="#" className="flex items-center gap-2">
              <FaLinkedin size={ 24 } />
              Linkedin
            </a>
            <a href="#" className="flex items-center gap-2">
              <FaGithub size={ 24 } />
              Github
            </a>
          </div>

        </div>
        <ProfilePic />

      </div>
    </div>
  );
}

export default Header;
