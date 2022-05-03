import React, { useEffect, useState } from 'react'
import './ModalCreateAnouncement.css'
import { Overlay, CloseModal, Modal } from '../../StyledComponents/Overlay/StyledComponents'

export const ModalCreateAnouncement = ({ visiblity }) => {

  const [visibility, setVisibility] = useState(false)
  const [formSection, setFormSection] = useState(0)

  useEffect(() => {
    console.log(formSection)
  }, [formSection])

  const changeModal = () =>{
    setVisibility(true)
  }

  const closeModal = () =>{
    setVisibility(false)
  }

  const changeMoreStatus = () => {
    setFormSection(formSection + 1)
  }

  const decreaseStatus = () => {
    if (formSection >= 1) {
      setFormSection(formSection - 1)
    } else {
      setFormSection(0)
    }
  }

  return (
    <>
      <button onClick={() => changeModal()}>open modal</button>
      {visibility &&
        <Overlay>
          <Modal>
            <div className="header-modal">
              <CloseModal><svg onClick={()=> closeModal()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill close-svg" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
              </CloseModal>
            </div>
            <h1 className='create-title'>Publica tu propiedad</h1>
            {
              formSection === 0 &&
              <div className="principal-create-form">
                <div className="create-progress">
                  <p className='form-stage'>1</p>
                  <p>2</p>
                  <p>3</p>
                </div>
                <div className="create-info">
                  <h2 className='create-subtitle'>Informacion Basica</h2>
                  <div className="required-info">
                    <input type='text' placeholder='Titulo de la publicacion' className='create-input-add' />
                    <textarea className='create-description' placeholder='descripcion de la vivienda ( detalles de la vivienda , consideraciones , aportes importantes a tener en cuenta )' />
                  </div>
                </div>
                <div className="first-action-container">
                  <button className='create-action-button' onClick={changeMoreStatus}>siguente</button>
                </div>
              </div>

            }
            {
              formSection === 1 &&
              <div className="secondary-create-form">
                <div className="create-progress">
                  <p>1</p>
                  <p className='form-stage'>2</p>
                  <p>3</p>
                </div>
                <div className="create-info">
                  <h2 className='create-subtitle'>Informacion detallada</h2>
                  <div className="required-info">
                    <input className='create-input-add' type='text' placeholder='direccion' />
                    <select className='create-input-add'>
                      <option value="zona">zona</option>
                      <option value="">Urbano</option>
                      <option value="">Rural</option>
                    </select>
                    <select className='create-input-add'>
                      <option value="">modalidad</option>
                      <option value="">venta</option>
                      <option value="">Arriendo</option>
                      <option value="">Permutar</option>

                    </select >
                    <select className='create-input-add' name="" id="">
                      <option value="">tipo de vivienda</option>
                      <option value="">Casa</option>
                      <option value="">Local</option>
                      <option value="">Apartamento</option>
                      <option value="">Finca</option>
                      <option value="">Lote</option>
                    </select>
                  </div>

                </div>
                <div className="create-action-container">
                  <button className='create-action-button' onClick={decreaseStatus}>anterior</button>
                  <button className='create-action-button' onClick={changeMoreStatus}>siguente</button>
                </div>
              </div>
            }
            {
              formSection === 2 &&
              <div className="secondary-create-form">
                <div className="create-progress">
                  <p>1</p>
                  <p>2</p>
                  <p className='form-stage'>3</p>
                </div>
                <div className="create-info">
                  <h2 className='create-subtitle'>Verificacion de datos</h2>
                  <div className="required-info">
                    <label htmlFor="">Certificado de propiedad</label>
                    <input type='file'></input>
                    <label htmlFor="">Imagenes de la propiedad</label>
                    <input type='file'></input>
                    <label>ubicacion</label>
                  </div>
                </div>
                <div className="create-action-container">
                  <button className='create-action-button' onClick={decreaseStatus}>anterior</button>
                  <button className='create-action-button' >publicar</button>
                </div>
              </div>
            }
          </Modal>
        </Overlay>
      }
    </>
  )
}
