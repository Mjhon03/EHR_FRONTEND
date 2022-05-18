import { faRocketchat } from '@fortawesome/free-brands-svg-icons'
import { faCaretDown, faCircleInfo, faGears, faIdCardClip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{ useEffect, useState } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import { ProfileAction, ProfileActionText, ProfileModal, SettingsSpace } from '../../StyledComponents/Overlay/StyledComponents'
import './ProfileSettings.css'

export const ProfileSettings = ({ userData }) => {


  const [ settingsVisibility , setSettingsVisibility ] = useState(false)

  useEffect(()=>{
    console.log(settingsVisibility);
  },[])

  const changeSettings = () =>{
    if(settingsVisibility === false){
      setSettingsVisibility(true)
    }else{
      setSettingsVisibility(false)
    }
  }

  const disableSettings = () =>{
    setSettingsVisibility(false)
  }

  const deleteSesion = () => {
    localStorage.removeItem("userInfo")
    Navigate('/')
    window.location.reload()
  }


  return (
    <>
    <button className='profile-modal-activate' onClick={()=> changeSettings()}><FontAwesomeIcon className='activate-profile-icon' icon={ faCaretDown} /></button>
    {settingsVisibility &&
      <ProfileModal>
        <NavLink to='/profile'>
        <div className="settings-basic-info">
          <div className="settings-image-container">
            <img src="https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_960_720.jpg" alt="settingsImage" className='settings-image' />
          </div>
          
            <div className="settings-profile">
              <p className='settings-profile-name'>{ userData[0].nombre}</p>
              <p className='send-profile-button'>ver tu perfil</p>
            </div>
        </div>
        </NavLink>
        <SettingsSpace />
        <div className="settings-container">
          <ProfileAction><FontAwesomeIcon className='settings-action-icon' icon={ faRocketchat }/><ProfileActionText>Mensajes</ProfileActionText></ProfileAction>
          <ProfileAction><FontAwesomeIcon className='settings-action-icon' icon={ faGears } /><ProfileActionText>Configuracion</ProfileActionText></ProfileAction>
          <ProfileAction><FontAwesomeIcon className='settings-action-icon' icon={ faCircleInfo }/><ProfileActionText>Ayuda y soporte</ProfileActionText></ProfileAction>
          <ProfileAction><FontAwesomeIcon className='settings-action-icon' icon={ faIdCardClip }/><ProfileActionText>Contacto</ProfileActionText></ProfileAction>
        </div>
        <SettingsSpace />
          <div className="settings-action-container">
            <button className='settings-close' onClick={ deleteSesion } >Cerrar sesion</button>
          </div>
        </ProfileModal>
      }
    </>
  )
}
