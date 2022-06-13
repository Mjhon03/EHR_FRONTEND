import React, { useEffect, useContext, useState } from 'react'
import './ModalCreateAnouncement.css'
import { Overlay, Modal, ProfileCardButton } from '../../StyledComponents/Overlay/StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { UserContext } from '../../../UserProvider/UserProvider'
import { createAnouncement } from '../../../methodAdversitement';
import { Alert } from '../../Alert';

export const ModalCreateAnouncement = () => {

  const { user } = useContext(UserContext)

  const [visibility, setVisibility] = useState(false)
  const [formSection, setFormSection] = useState(0)

  const [city, setCity] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState(' ')
  const [zone, setZone] = useState(' ')
  const [edification, setEdification] = useState('')
  const [rooms, setRooms] = useState(' ')
  const [garage, setGarage] = useState(' ')
  const [modality, setModality] = useState('')
  const [price, setPrice] = useState(' ')

  useEffect(() => {
  }, [formSection])

  let date = new Date();
  let newDate = (date.toISOString().split('T')[0]);

  const changeModal = () => {
    setVisibility(true)
  }

  const closeModal = () => {
    setVisibility(false)
  }

  const validateForm = () => {
    if (title === '' || description === '' || address === '') {
      Alert("Error", "Por favor complete todos los campos", "error", "Ok", "2000")
    } else {
      changeMoreStatus()
    }
  }
  const validateFormDetail = () => {
    if (zone === '' || edification === '' || rooms === 0 || garage === 0 || modality === '' || price === 0) {
      Alert("Error", "Por favor complete todos los campos", "error", "Ok", "2000")
    } else {
      changeMoreStatus()
    }
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

  const [images, setimages] = useState([]);

  const changeInput = (e) => {
    let indexImg;
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setimages(newImgsState);
  };

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files;
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];

      let url = URL.createObjectURL(file);
      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file
      });
      indexInicial++;
    });
    return arrayImages;
  }

  function deleteImg(indice) {
    const newImgs = images.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setimages(newImgs);
  }

  const [arrayImages, setArraytImages] = useState([])

  const sendPhotos = async () => {
    let imagesUrl = []
    images.forEach(element => {
      const formData = new FormData()
      formData.append("file", element.file)
      formData.append("upload_preset", "anouncement")
      axios.post("https://api.cloudinary.com/v1_1/easyhouserent/image/upload", formData)
        .then(response => {
          console.log(response.data.url);
          imagesUrl.push(response.data.url)
        })
        .catch(err => {
          console.log(err);
        })
    });
    setArraytImages(imagesUrl)
    return true;
  }


  const validateFormImage = () => {
    if (images.length === 0) {
      Alert("Error", "Por favor agregue al menos una imagen", "error", "Ok", "2000")
    } else {
      sendProfile()
    }
  }
  const awaitAnouncement = async () => {
    createAnouncement(user[0].idusuario, title, address, city, description, modality, zone, edification, rooms, garage, price, newDate, arrayImages)
  }

  const sendProfile = async () => {
    awaitAnouncement() 
    await sendPhotos()
    if (awaitAnouncement) {
      Alert('El anuncio se ha creado correctamente', '', 'success', 'OK','2000')
    }
    closeModal()
    setimages([])
    setFormSection(0)
  }

  return (
    <>
      <ProfileCardButton onClick={() => changeModal()}>Agregar Publicacion</ProfileCardButton>
      {visibility &&
        <Overlay>
          <Modal>
            <div className="header-modal">
              <FontAwesomeIcon className='header-modal-icon' onClick={closeModal} icon={faArrowRightFromBracket}></FontAwesomeIcon>
            </div>
            <div className="modal-content-item">
              <h1 className='create-title'>Publica tu propiedad</h1>
              {
                formSection === 0 &&
                <div className="secondary-create-form">
                  <div className="create-progress">
                    <p className='form-stage'>1</p>
                    <p className='form-stage-none'>2</p>
                    <p className='form-stage-none'>3</p>
                  </div>
                  <div className="create-info">
                    <h2 className='create-subtitle'>Informacion Basica</h2>
                    <div className="required-info">
                      <input type='text' placeholder='Titulo de la publicacion' className='email-put' onChange={(e) => {
                        setTitle(e.target.value)
                        console.log(e.target.value)
                      }} />
                      <div className="modality-medium">
                        <input className='email-put' type='text' placeholder='direccion' onChange={(e) => {
                          setAddress(e.target.value)
                          console.log(e.target.value)
                        }} />
                        <input className='email-put' type='text' placeholder='ciudad' onChange={(e) => {
                          setCity(e.target.value)
                          console.log(e.target.value)
                        }} />
                      </div>
                      <textarea className='email-put create-description' placeholder='descripcion de la vivienda ( detalles de la vivienda , consideraciones , aportes importantes a tener en cuenta )'
                        onChange={(e) => {
                          setDescription(e.target.value)
                          console.log(e.target.value);
                        }} />
                    </div>
                  </div>
                  <div className="first-action-container">
                    <button className='send-email create-action-button' onClick={validateForm}>Siguente</button>
                  </div>
                </div>
              }
              {
                formSection === 1 &&
                <div className="secondary-create-form">
                  <div className="create-progress">
                    <p className='form-stage-none'>1</p>
                    <p className='form-stage'>2</p>
                    <p className='form-stage-none'>3</p>
                  </div>
                  <div className="create-info">
                    <h2 className='create-subtitle'>Informacion detallada</h2>
                    <div className="required-info">
                      <div className="modality-medium">
                        <select className='email-put' onChange={(e) => {
                          setModality(e.target.value)
                          console.log(e.target.value)
                        }}>
                          <option value="">modalidad</option>
                          <option value="venta">venta</option>
                          <option value="arrendo">arrendo</option>
                        </select>
                        <select className='email-put' onChange={(e) => {
                          setZone(e.target.value)
                          console.log(e.target.value);
                        }}>
                          <option value="">zona</option>
                          <option value="rural">rural</option>
                          <option value="norte">norte</option>
                          <option value="sur">sur</option>
                          <option value="centro">centro</option>
                        </select>
                      </div>
                      <div className="modality-medium">
                        <select className='email-put' onChange={(e) => {
                          setEdification(e.target.value)
                          console.log(e.target.value);
                        }}>
                          <option value="">tipo de edificacion</option>
                          <option value="finca">finca</option>
                          <option value="apartamento">apartamento</option>
                          <option value="terreno">terreno</option>
                          <option value="local">local</option>
                          <option value="hogar">hogar</option>
                        </select>
                        <input type='number' placeholder='habitaciones' className='email-put' onChange={(e) => {
                          setRooms(e.target.value)
                          console.log(e.target.value)
                        }} />
                      </div>
                      <input type='text' placeholder='garaje' className='email-put' onChange={(e) => {
                        setGarage(e.target.value)
                        console.log(e.target.value)
                      }} />
                      <input type='number' placeholder='precio' className='email-put' onChange={(e) => {
                        setPrice(e.target.value)
                        console.log(e.target.value)
                      }} />
                    </div>
                  </div>
                  <div className="first-action-container create-action-container">
                    <button className='send-email create-action-button' onClick={decreaseStatus}>anterior</button>
                    <button className='send-email create-action-button' onClick={validateFormDetail}>siguente</button>
                  </div>
                </div>
              }
              {
                formSection === 2 &&
                <div className="secondary-create-form">
                  <div className="create-progress">
                    <p className='form-stage-none'>1</p>
                    <p className='form-stage-none'>2</p>
                    <p className='form-stage'>3</p>
                  </div>
                  <div className="create-info">
                    <h2 className='create-subtitle'>Verificacion de datos</h2>
                    <div className="required-info">
                    
                      <label className="btn btn-warning select-files">
                        <span>Seleccionar archivos </span>
                        <input hidden type="file" multiple onChange={(e) => { changeInput(e) }}></input>
                      </label>
                      <div className="row">
                        {images.map((imagen) => (
                          <div className="square" key={imagen.index}>
                            <div className="content_img">
                              <button
                                onClick={deleteImg.bind(this, imagen.index)} className='image-delete'
                              >
                                x
                              </button>
                              <img
                                alt="previewAnouncement"
                                src={imagen.url}
                                data-toggle="modal"
                                data-target="#ModalPreViewImg"
                                className="img-responsive"
                              ></img>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="first-action-container create-action-container">
                    <button className='send-email create-action-button' onClick={decreaseStatus}>Anterior</button>
                    <button className='send-email create-action-button' onClick={validateFormImage}>Publicar</button>
                  </div>
                </div>
              }
            </div>
          </Modal>
        </Overlay>
      }
    </>
  )
}

