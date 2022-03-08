import './Header.css';
import image from '../../../Images/logo.png';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <nav>
        <div className='navbar'>
            <div className='logo'>
                <a>EHR</a>
            </div>
            <div className='nav-links'>
                <ul className='links'>
                    <li><a>contacto</a></li>
                    <li>
                        <a>categorias</a>
                        <FontAwesomeIcon icon={ faAngleDown } />
                        <ul className='submenu'>
                            {/* <li><a>apartamentos</a></li>
                            <li><a>hogares</a></li>
                            <li><a>fincas</a></li>
                            <li><a>en venta</a></li>
                            <li><a>arriendos</a></li> */}


                        </ul>
                    </li>
                    <li>
                        <a>ingresar</a>
                    </li>
                    <li>
                        <a>registrarme</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
