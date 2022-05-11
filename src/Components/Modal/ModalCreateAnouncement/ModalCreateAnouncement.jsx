import React, { useEffect, useState } from 'react'
import './ModalCreateAnouncement.css'
import { Overlay, Modal } from '../../StyledComponents/Overlay/StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export const ModalCreateAnouncement = () => {

  const [visibility, setVisibility] = useState(false)
  const [formSection, setFormSection] = useState(0)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState(' ')

  useEffect(() => {
    console.log(formSection)
  }, [formSection])

  const changeModal = () => {
    setVisibility(true)
  }

  const closeModal = () => {
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

  const [images, setimages] = useState([]);

  const changeInput = (e) => {
    //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
    let indexImg;

    //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setimages(newImgsState);

    console.log(newImgsState);
  };

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files;

    //el array con las imagenes nuevas
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];

      let url = URL.createObjectURL(file);

      //console.log(file);
      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file
      });

      indexInicial++;
    });

    //despues de haber concluido el ciclo retornamos las nuevas imagenes
    return arrayImages;
  }

  function deleteImg(indice) {
    //console.log("borrar img " + indice);

    const newImgs = images.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setimages(newImgs);
  }


  return (
    <>
      <button onClick={() => changeModal()} class="noselect">
        <span class='text'>Crear Publicacion</span>
        <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
          <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
        </svg>
        </span>
      </button>
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
                    <p>2</p>
                    <p>3</p>
                    "C:\Users\adsi\AppData\Local\Programs\Microsoft VS Code\Code.exe"</div>
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
                      </select>
                      <select className='create-input-add'>

                      </select >
                      <select className='create-input-add' name="" id="">
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
                    <div className="container-fluid">
                      <br></br>
                      {/* INPUT IMAGES */}
                      <label className="btn btn-warning">
                        <span>Seleccionar archivos </span>
                        <input hidden type="file" multiple onChange={changeInput}></input>
                      </label>

                      {/* VIEW IMAGES */}
                      <div className="row">
                        {images.map((imagen) => (
                          <div className="col-6 col-sm-4 col-lg-3 square" key={imagen.index}>
                            <div className="content_img">
                              <button
                                className="position-absolute btn btn-danger"
                                onClick={deleteImg.bind(this, imagen.index)}
                              >
                                x
                              </button>
                              <img
                                alt="algo"
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
                  <div className="create-action-container">
                    <button className='create-action-button' onClick={decreaseStatus}>anterior</button>
                    <button className='create-action-button' >publicar</button>
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
