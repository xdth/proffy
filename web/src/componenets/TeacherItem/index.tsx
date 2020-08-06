import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
      <article className="teacher-item">
        <header>
          <img src="https://avatars1.githubusercontent.com/u/12601116?s=460&u=a654dd1ff2aa806f44650c70871b0b614b99d64f&v=4" alt="xdth"/>
          <div>
            <strong>xdth</strong>
            <span>Chimie</span>
          </div>
        </header>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <footer>
          <p>
            Pris/heure
            <strong>€ 80,00</strong>
          </p>
          <button>
            <img src={whatsappIcon} alt="Whatsapp"/>
            Whatsapp
          </button>
        </footer>
      </article>
  );
}

export default TeacherItem;