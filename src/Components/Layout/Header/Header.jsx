import React from 'react'
import './Header.css';
import { Logo } from '../../UI/Logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <div className='wrapper'>
        <nav>
            <div className="content">
            < Logo />
                <ul className="links">
                    <li><p>Populares</p></li>
                    <li><p>Categorias</p></li>
                    <li><p>Contacto</p></li>
                    <li><p>Ingresar</p></li>
                    <li><p>Registar</p></li>   
                </ul>
            </div>
            <div className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
            <form action='#' className='search-box'>
                <input type="text" placeholder="desear buscar algo..."></input>
                <button className='go-icon'><FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon></button>
            </form>
        </nav>
    </div>
    
  )
}
