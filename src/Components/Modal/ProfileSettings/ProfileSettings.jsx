import React,{ useEffect, useState } from 'react'
import { ProfileModal, SettingsSpace } from '../../StyledComponents/Overlay/StyledComponents'
import './ProfileSettings.css'

export const ProfileSettings = () => {


  const [ settingsVisibility , setSettingsVisibility ] = useState(true)

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
  return (
    <>
    <button onClick={()=> changeSettings()}>mostrar Ajustes</button>
    {settingsVisibility &&
      <ProfileModal>
        <div className="settings-basic-info">
          <p>Nombre de usuario</p>
          <p>ver tu perfil</p>
          <div className="settings-image-container">
            <img src="" alt="settings-image" className='settings-image' />
          </div>
        </div>
        <div className="settings-actions">
          <div className="settings-action-container">
            <img src="" alt="settings-action" />
            <p> Compartir perfil</p>
          </div>
        </div>
        <SettingsSpace />
        <div className="settings-action-container">
            <img src="" alt="settings-action" />
            <p>Chat</p>
          </div>
          <div className="settings-action-container">
            <img src="" alt="settings-action" />
            <p></p>
          </div>
          <div className="settings-action-container">
            <img src="" alt="settings-action" />
            <p>Ayuda y soporte</p>
          </div>
          <div className="settings-action-container">
            <img src="" alt="settings-action" />
            <p></p>
          </div>
        <SettingsSpace />
          <div className="settings-action-container">
            <button>Cerrar Sesion</button>
          </div>
      </ProfileModal>
      }
    </>
  )
}
