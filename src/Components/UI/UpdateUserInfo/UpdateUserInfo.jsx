import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useState } from 'react'
import { UserContext } from '../../../UserProvider/UserProvider'
import { Modal, Overlay, ProfileCardButton } from '../../StyledComponents/Overlay/StyledComponents'
import './UpdateUserInfo.css'

export const UpdateUserInfo = () => {

  const { user } = useContext(UserContext)
  const [visibility, setVisibility] = useState(false)

  const updateVisibility = () => {
    setVisibility(true)
  }

  const closeModal = () => {
    setVisibility(false)
  }


  return (
    <>
      <ProfileCardButton onClick={() => updateVisibility()}>Actualizar</ProfileCardButton>
      {visibility &&
        <Overlay>
          <Modal>
            <div className="header-modal">
              <FontAwesomeIcon className='header-modal-icon' onClick={closeModal} icon={faArrowRightFromBracket}></FontAwesomeIcon>
            </div>
            <div className="update-content">
              <h1 className='create-title'>Actualiza tu informacion</h1>
            </div>
            <div className="update-render-info">
              <p>Nombres</p>
              <input type="text" className='email-put' placeholder={`${user[0].nombre}`} ></input>
              <p>Apellidos</p>
              <input type="text" className='email-put' placeholder={`${user[0].apellidos}`} ></input>
              <p>Correo Electronico</p>
              <input type="text" className='email-put' placeholder={`${user[0].email}`} ></input>
              <div className="modality-medium">
                <div className="medium-update">
                  <p>Telefono</p>
                  <input type="text" className='email-put' placeholder={`${user[0].telefono}`} ></input>
                </div>
                <div className="medium-update">
                  <p>Edad</p>
                  <input type="text" className='email-put' placeholder={`${user[0].edad}`} ></input>
                </div>
              </div>
            </div>
            <div className="update-info-container">
                <button className='send-email'>Actualizar</button>
              </div>
          </Modal>
        </Overlay>
      }
    </>
  )
}
