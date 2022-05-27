import React, { useState, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyUser, faFilterCircleDollar, faCircleInfo, faNewspaper, faHeadset, faCommentDots } from '@fortawesome/free-solid-svg-icons'
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
                    <NavLink to='/'>
                        <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faHouseChimneyUser} /></button>
                    </NavLink>
                    <NavLink to='/'>
                        <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faFilterCircleDollar} /></button>
                    </NavLink>
                    <NavLink to='/AboutUs'>
                        <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faCircleInfo} /></button>
                    </NavLink>
                    <NavLink to='/'>
                        <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faCommentDots} /></button>
                    </NavLink>
                    <NavLink to='/support'>
                        <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faNewspaper} /></button>
                    </NavLink>
                    <NavLink to='/'>
                        <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faHeadset} /></button>
                    </NavLink>
                    
                </div>
                {userSession === 0 &&
                    <div className="header-nouser-actions">
                        <NavLink to='/login'><button className='nouser-action'>Ingresar</button></NavLink>
                        <NavLink to='/register'><button className='nouser-action'>Registrarme</button></NavLink>

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