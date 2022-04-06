import React from "react";
import { NavLink } from "react-router-dom";
import './SettingsProfile.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faShareNodes} from '@fortawesome/free-solid-svg-icons'
import{faMessage} from '@fortawesome/free-solid-svg-icons'
import{faUser} from '@fortawesome/free-solid-svg-icons'
import{faUserSlash} from '@fortawesome/free-solid-svg-icons'
import{faLock} from '@fortawesome/free-solid-svg-icons'
import{faUserPen} from '@fortawesome/free-solid-svg-icons'
import{faGears} from '@fortawesome/free-solid-svg-icons'
import{faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'

export const SettingsProfi = () =>{
    return(
            <div className="settings-Container">
                <div className="information-container">
                    <img className="Image-Profile-settings" src='https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_960_720.jpg' alt='profile'></img>
                    <h2>jhon Maicol Montoya</h2>
                </div>
                <ul className="Share-links">
                <NavLink to="/share"><li ><p className="Share-Link"><FontAwesomeIcon icon={faShareNodes}/>Compartir</p></li></NavLink>
                <NavLink to="/profile"><li ><p className="Share-Link"><FontAwesomeIcon icon={faUser}/>Perfil</p></li></NavLink>
                <NavLink to="/"><li ><p className="Share-Link"><FontAwesomeIcon icon={faMessage}/>Chat</p></li></NavLink>
                <NavLink to="/"><li ><p className="Share-Link"><FontAwesomeIcon icon={faUserSlash}/>Borrar cuenta</p></li></NavLink>
                <NavLink to="/"><li ><p className="Share-Link"><FontAwesomeIcon icon={faLock}/>Modificar contraseña</p></li></NavLink>
                <NavLink to="/"><li ><p className="Share-Link"><FontAwesomeIcon icon={faUserPen}/>Editar perfil</p></li></NavLink>
                <NavLink to="/"><li ><p className="Share-Link"><FontAwesomeIcon icon={faGears}/>Configuracion de cuenta</p></li></NavLink>
                <NavLink to="/"><li ><p className="Share-Link"><FontAwesomeIcon icon={faArrowRightFromBracket}/>Cerrar sesion</p></li></NavLink>
                </ul>
            </div>

    )
}