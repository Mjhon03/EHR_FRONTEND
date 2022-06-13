import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { Modal, Overlay, ProfileCardButton } from '../../StyledComponents/Overlay/StyledComponents'
import './UpdateUserInfo.css'

export const UpdateUserInfo = () => {

    const [ visibility , setVisibility ] = useState(false)

    const updateVisibility = () => {
        setVisibility(true)
    }

    const closeModal = () => {
        setVisibility(false)
    }


  return (
    <>
     <ProfileCardButton onClick={() => updateVisibility()}>Actualizar</ProfileCardButton>
     { visibility && 
        <Overlay>
            <Modal>
            <div className="header-modal">
              <FontAwesomeIcon className='header-modal-icon' onClick={closeModal} icon={faArrowRightFromBracket}></FontAwesomeIcon>
            </div>
            </Modal>
        </Overlay>
     }
    </>
  )
}
