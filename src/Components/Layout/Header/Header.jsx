import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faSearch , faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div class="wrapper">
        <nav>
        <input type="checkbox" id="show-search"></input>
        <input type="checkbox" id="show-menu"></input>
        <label for="show-menu" class="menu-icon"><FontAwesomeIcon icon={ faBars }></FontAwesomeIcon></label>
        <div className="content">
        <div className="logo"><NavLink to="/"><p>EHR</p></NavLink></div>
            <ul className="links">
                <NavLink to="/"><li><p>Inicio</p></li></NavLink>
                <li>
                    <p className="desktop-link">Categorias</p>
                    <input type="checkbox" id="show-features"></input>
                    <label htmlFor="show-features">Categorias</label>
                    <ul>
                    <li><p>En venta</p></li>
                    <li><p>Ultimas Publicaciones</p></li>
                    <li><p>Apartamentos</p></li>
                    <li><p>Arrendos</p></li>
                    </ul>
                </li>
                <NavLink to="/contact"><li><p className="desktop-link">Contacto</p></li></NavLink>
                <NavLink to="/aboutUs"><li><p>Nosotros</p></li></NavLink>
                <NavLink to="/register"><li><p>Registrarme</p></li></NavLink>

            </ul>
        </div>
        <label htmlFor="show-search" class="search-icon"><FontAwesomeIcon icon={ faSearch }></FontAwesomeIcon></label>
        <form action="#" className="search-box">
            <input className='search-box-home' type="text" placeholder="Busca por zona , lugar o nombre" required></input>
            <button type="submit" class="go-icon"><FontAwesomeIcon icon={ faLongArrowAltRight }></FontAwesomeIcon></button>
        </form>
        </nav>
  </div>
  )
}
