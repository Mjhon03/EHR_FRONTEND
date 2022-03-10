import React from 'react'
import './Header.css';
import { Logo } from '../../UI/Logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLongArrowAltRight , faBars } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <div className='wrapper'>
        <nav>
            <input type="checkbox"id='show-search'/> 
            <input type="checkbox"id='show-menu'/> 
            <label for="show-menu" className="menu-icon"><FontAwesomeIcon icon={ faBars }/></label>

            <div className="content">
            < Logo />
                <ul className="links">
                    <li><p>Populares</p></li>
                    <li>
                        <p className='desktop-link' for="show-categorias">Categorias</p>
                        <input type="checkbox" id='show-categorias'></input>
                        <label className="label-text" for="show-categorias">Categorias</label>
                        <ul >
                            <li><p>Apartamentos</p></li>
                            <li><p>Hogares</p></li>
                            <li><p>Fincas</p></li>
                            <li><p>En venta</p></li>
                            <li><p>Arriendos</p></li>
                        </ul>
                    </li>
                    <li><p>Contacto</p></li>
                    <li><p>Ingresar</p></li>
                    <li><p>Registrar</p></li>   
                </ul>
            </div>
            <label for="show-search" className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass}/></label>
            <form action='#' className='search-box'>
                <input type="text" placeholder="desear buscar algo..." required></input>
                <button type="submit" className='go-icon'><FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon></button>
            </form>
        </nav>
    </div>
    
  )
}
