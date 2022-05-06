import React, { useState, useContext, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyUser, faFilterCircleDollar, faCircleInfo, faNewspaper, faHeadset } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { ProfileSettings, profileSettings } from '../../Modal/ProfileSettings/ProfileSettings'
import { UserContext, UserProvider } from '../../../UserProvider/UserProvider'


export const Header = () => {

    const [userSession, setUserSession] = useState(1)

    useEffect(() => {
        console.log(userSession);
    },[userSession])

    const userData = useContext(UserContext)
    

    const SetUserData = () =>{
        if(userData != null){
            console.log(userData);   
            setUserSession(1)                                                                                                                                                                                                                                                                                                                                    
        }
    }

    useEffect(() =>{
        SetUserData()
    })
    

    return (
        <>
            <div className="header-container">
                <div className="header-logo-container">
                    <p className='header-logo'>EHR</p>
                </div>
                <div className="header-actions">
                    <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faHouseChimneyUser} /></button>
                    <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faFilterCircleDollar} /></button>
                    <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faCircleInfo} /></button>
                    <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faNewspaper} /></button>
                    <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faHeadset} /></button>
                </div>
                {userSession === 0 &&
                    <div className="header-nouser-actions">
                        <NavLink to='/login'><button className='nouser-action'>Ingresar</button></NavLink>
                        <NavLink to='/register'><button className='nouser-action'>Registrarme</button></NavLink>

                    </div>
                }
                {userSession === 1 &&
                    <div className="header-nouser-actions">
                        <div className="header-user-settings">
                            <img src="https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_960_720.jpg" className='header-profile' alt="header-profile" />
                            <p className='text-header-profile'>jhon maicol</p>
                        </div>
                        <ProfileSettings />
                    </div>
                }
            </div>
            
        </>
    )
}