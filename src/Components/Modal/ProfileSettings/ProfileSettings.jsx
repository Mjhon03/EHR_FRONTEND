import { faRocketchat } from '@fortawesome/free-brands-svg-icons'
import { faCaretDown, faCircleInfo, faGears, faIdCardClip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ProfileAction, ProfileActionText, ProfileModal, SettingsSpace } from '../../StyledComponents/Overlay/StyledComponents'
import './ProfileSettings.css'


export const ProfileSettings = ({ userData }) => {

  const [settingsVisibility, setSettingsVisibility] = useState(false)

  const navigate = useNavigate()

  const changeSettings = () => {
    if (settingsVisibility === false) {
      setSettingsVisibility(true)
    } else {
      setSettingsVisibility(false)
    }
  }

  const changeVisbilility = () => {

  }


  const deleteSesion = () => {
    localStorage.removeItem("userInfo")
    localStorage.setItem("userInfo", null)
    navigate('/')
    window.location.reload()
  }


  return (
    <>
      <button className='profile-modal-activate' onClick={() => changeSettings()}><FontAwesomeIcon className='activate-profile-icon' icon={faCaretDown} /></button>
      {settingsVisibility &&
        <div className="status" onClick={changeSettings}>
          <ProfileModal>
            <NavLink to='/profile'>
              <div className="settings-basic-info">
                <div className="settings-image-container">
                  <img src={userData[0].foto} alt="settingsImage" className='settings-image' />
                </div>
                <div className="settings-profile">
                  <p className='settings-profile-name'>{userData[0].nombre}</p>
                  <p className='send-profile-button'>Ver tu perfil</p>
                </div>
              </div>
            </NavLink>
            <SettingsSpace />
            <div className="settings-container">
              <ProfileAction><FontAwesomeIcon className='settings-action-icon' icon={faRocketchat} /><ProfileActionText>Mensajes</ProfileActionText></ProfileAction>
              <ProfileAction><FontAwesomeIcon className='settings-action-icon' icon={faGears} /><ProfileActionText>Configuracion</ProfileActionText></ProfileAction>
              <ProfileAction><FontAwesomeIcon className='settings-action-icon' icon={faCircleInfo} /><ProfileActionText>Ayuda y soporte</ProfileActionText></ProfileAction>
              <ProfileAction><FontAwesomeIcon className='settings-action-icon' icon={faIdCardClip} /><ProfileActionText>Contacto</ProfileActionText></ProfileAction>
            </div>
            <SettingsSpace />
            <div className="settings-action-container">
              <button className='settings-close' onClick={deleteSesion} >Cerrar sesion</button>
            </div>
          </ProfileModal>
        </div>
      }

    </>
  )
}
