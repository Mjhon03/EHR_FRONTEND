import './Header.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './Header.css';
import { Logo } from '../../UI/Logo/Logo';

export const Header = () => {
  return (
    <header className="menu-container">
      <input type="checkbox" className="btn-menu" id="btn-menu" ></input>
      <label for="btn-menu"></label>
      < Logo classLogo={"logo1"} />
      <nav className="menu">
        <ul className="menu-content">
          <li><a>Contacto</a></li>
          <li><a>Populares</a></li>
          <li><a>Categorias</a></li>
          <div className="menu-search">
            <input className="searchbox" type="search"></input>
            <FontAwesomeIcon icon={ faMagnifyingGlass } className="icon"/>  
          </div>
          <li><a>ingresar</a></li>
          <li><a>registrar</a></li>
        </ul>
      </nav>
    </header>
  )
}
