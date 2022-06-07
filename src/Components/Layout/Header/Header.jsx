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
    if (user != null) {
      setUserSession(1)
    } else {
      setUserSession(0)
    }
  }

  useEffect(() => {
    SetUserData()
  })

  const navigate = useNavigate()

  const sendHome = () => {
    navigate('/')
  }


  return (
    <div className="header-container">
      <div className="header-logo-container">
        <div className="logo-content">
          <img src="https://i.ibb.co/zQHyDyt/logo.png" alt="logoEhr" className='logo-header' />
        </div>
        <p className='header-logo'>EHR</p>
      </div>
      <div className="header-actions">

        <div className='iconHeader'>
          <NavLink to='/'>
            <button className='header-action-button '><FontAwesomeIcon className='header-action-icon' icon={faHouseChimneyUser} /></button>
          </NavLink>
        </div>

        <div className='iconHeader'>
          <NavLink to='/'>
            <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faFilterCircleDollar} /></button>
          </NavLink>
        </div>
        <div className='iconHeader'>
          <NavLink to='/AboutUs'>
            <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faCircleInfo} /></button>
          </NavLink>
        </div>
        <div className='iconHeader'>
          <NavLink to='/'>
            <button className='header-action-button'><FontAwesomeIcon className='header-action-icon' icon={faCommentDots} /></button>
          </NavLink>
        </div>
        <div className='iconHeader'>
          <NavLink to='/support'>
            <button className='header-action-button action-responsive'><FontAwesomeIcon className='header-action-icon' icon={faNewspaper} /></button>
          </NavLink>
        </div>
        <div className='iconHeader'>
          <NavLink to='/'>
            <button className='header-action-button action-responsive'><FontAwesomeIcon className='header-action-icon' icon={faHeadset} /></button>
          </NavLink>
        </div>
      </div>
      {userSession === 0 &&
        <div className="nouser-actions">
          <NavLink to='/login'className='nouser-action'><button >Ingresar</button></NavLink>
          <NavLink to='/register'className='nouser-action'><button >Registrarme</button></NavLink>
          <FontAwesomeIcon className='icon-none header-action-button' icon={faAngleDown} />       
        </div>
      }
    </div>
  )
}
