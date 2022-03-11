import React from 'react'
import './Header.css';
import { Logo } from '../../UI/Logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLongArrowAltRight , faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="wrapper">
        <nav>
        <input type="checkbox" id="show-search"/>
        <input type="checkbox" id="show-menu"/>
        <label for="show-menu" className="menu-icon"><FontAwesomeIcon icon={ faBars }></FontAwesomeIcon></label>
        <div class="content">
        <div className="logo"><p>EHR</p></div>
            <ul className="links">
                <NavLink to="/"><li><p>Incio</p></li></NavLink>
                <NavLink to="/"><li><p>Populares</p></li></NavLink>
                <NavLink to="/contact"><li><p>contacto</p></li></NavLink>
                <li>
                    <p className="desktop-link">Categorias</p>
                    <input type="checkbox" id="show-features"/>
                    <label for="show-features">Categorias</label>
                    <ul>
                    <li><p>Apartamentos</p></li>
                    <li><p>Hogares</p></li>
                    <li><p>fincas</p></li>
                    <li><p>En venta</p></li>
                    <li><p>En arriendo</p></li>
                    </ul>
                </li>
                <NavLink to="/login"><li><p>ingresar</p></li></NavLink>
                <NavLink to="/register"><li><p>registrar</p></li></NavLink>
            </ul>
        </div>
        <label for="show-search" className="search-icon"><FontAwesomeIcon icon={ faMagnifyingGlass }></FontAwesomeIcon></label>
        <form action="#" className="search-box">
            <input type="text" placeholder="Type Something to Search..." required/>
            <button type="submit" className="go-icon"><FontAwesomeIcon icon={ faLongArrowAltRight }></FontAwesomeIcon></button>
        </form>
    </nav>
  </div>
  )
}
