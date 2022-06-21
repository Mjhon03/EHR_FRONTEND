import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Modal, Overlay } from '../../StyledComponents/Overlay/StyledComponents'

export const UpdateAnouncement = () => {

    const [ visible , setVisible ] = React.useState(false)

    const changeVisible = () => {
        setVisible(!visible)
    }


  return (
    <>
        <FontAwesomeIcon icon={faPen} className='icon-action-mycard' onClick={changeVisible} />
        {visible &&
            <Overlay >
                <Modal></Modal>
            </Overlay>
        }
    </>
  )
}
