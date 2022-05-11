import React, { useState, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyUser, faFilterCircleDollar, faCircleInfo, faNewspaper, faHeadset } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { ProfileSettings, profileSettings } from '../../Modal/ProfileSettings/ProfileSettings'
import { UserContext, UserProvider } from '../../../UserProvider/UserProvider'



export const Header = () => {

    const [userSession, setUserSession] = useState(0)

    const userData = useContext(UserContext)


    const SetUserData = () => {
        if (userData != null) {
            console.log(userData);
            setUserSession(1)
        }else{
            setUserSession(0)
        }
    }

    useEffect(() => {
        SetUserData()
    })


    return (
        <>
            <div className="header-container">
                <div className="header-logo-container">
                    <img src="https://i.ibb.co/zQHyDyt/logo.png" alt="logoEhr" className='logo-header' />
                    <p className='header-logo'>EHR</p>
                </div>
                <div className="header-actions">
                    <NavLink to='/'>
                        <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faHouseChimneyUser} /></button>
                    </NavLink>
                    <NavLink to='/'>
                        <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faFilterCircleDollar} /></button>
                    </NavLink>
                    <NavLink to='/'>
                        <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faCircleInfo} /></button>
                    </NavLink>
                    <NavLink to='/'>
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
                        <NavLink to="/Profile">
                            <div className="header-user-settings">
                                <img src="https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_960_720.jpg" className='header-profile' alt="header-profile" />
                                <p className='text-header-profile'>{userData[0].nombre}</p>
                            </div>
                        </NavLink>
                        <ProfileSettings userData={userData} />
                    </div>
                }
            </div>

        </>
    )
}