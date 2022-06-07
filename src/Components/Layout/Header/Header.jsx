import React, { useState, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyUser, faFilterCircleDollar, faCircleInfo, faNewspaper, faHeadset, faCommentDots, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { ProfileSettings } from '../../Modal/ProfileSettings/ProfileSettings'
import { UserContext } from '../../../UserProvider/UserProvider'
import { useNavigate } from 'react-router'


export const Header = () => {

    const [userSession, setUserSession] = useState(0)

    const { user } = useContext(UserContext)

    const SetUserData = () => {
        if (user!= null) {
            setUserSession(1)
        }else{
            setUserSession(0)
        }
    }

    useEffect(() => {
        SetUserData()
    })

    const navigate = useNavigate()

    const sendHome = () =>{
        navigate('/')
    }


    return (
        <>
            <div className="header-container">
                <div className="header-logo-container">
                    <img onClick={sendHome} src="https://i.ibb.co/zQHyDyt/logo.png" alt="logoEhr" className='logo-header' />
                    <p onClick={sendHome} className='header-logo'>EHR</p>
                </div>
                <div className="header-actions">

                    <div className='iconHeader'>
                        <NavLink to='/'>
                            <button className='header-action-button '><FontAwesomeIcon className='header-action-icon' icon={faHouseChimneyUser} /></button> 
                            <div className='viewTextIcon'><p>Inicio</p></div>
                        </NavLink>
                    </div>

                    <div className='iconHeader'>
                        <NavLink to='/'>            
                            <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faFilterCircleDollar} /></button>
                            <div className='viewTextIcon'><p>Recientes</p></div>
                        </NavLink>
                    </div>

                    <div className='iconHeader'>
                        <NavLink to='/AboutUs'>
                            <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faCircleInfo} /></button>
                            <div className='viewTextIcon'><p>Nosotros</p></div>
                        </NavLink>
                    </div>

                    <div className='iconHeader'>
                        <NavLink to='/'>
                            <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faCommentDots} /></button>
                            <div className='viewTextIcon'><p>Chat</p></div>
                        </NavLink>
                    </div>

                    <div className='iconHeader'>
                        <NavLink to='/support'>
                            <button className='header-action-button action-responsive'><FontAwesomeIcon className='header-action-icon' icon={faNewspaper} /></button>
                            <div className='viewTextIcon'><p>Soporte</p></div>
                        </NavLink>
                    </div>

                    <div className='iconHeader'>
                        <NavLink to='/'>
                            <button className='header-action-button action-responsive'><FontAwesomeIcon className='header-action-icon' icon={faHeadset} /></button>
                            <div className='viewTextIcon'><p>Contacto</p></div>
                        </NavLink>
                    </div>
                    
                </div>

                {userSession === 0 &&
                    <div className="header-nouser-actions">
                        <NavLink to='/login'><button className='nouser-action'>Ingresar</button></NavLink>
                        <NavLink to='/register'><button className='nouser-action'>Registrarme</button></NavLink>
                        <div className="header-action-button header-responsive">
                            <FontAwesomeIcon className='header-action-icon' icon={faAngleDown} />
                        </div>
                    </div>
                }
                {userSession === 1 &&
                    <div className="header-nouser-actions">
                        <NavLink  to="/Profile">
                            <div className="header-user-settings">
                                <img src={user[0].foto} className='header-profile' alt="header-profile" />
                                <p className='text-header-profile'>{user[0].nombre}</p>
                            </div>
                        </NavLink>
                        <ProfileSettings userData={user} />
                    </div>
                }
            </div>

        </>
    )
}