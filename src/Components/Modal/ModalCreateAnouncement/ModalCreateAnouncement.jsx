import React, { useEffect, useState } from 'react'
import './ModalCreateAnouncement.css'

export const ModalCreateAnouncement = () => {


  const [ formSection , setFormSection ] = useState(0)

  useEffect(() => {
    console.log(formSection)
  },[formSection])
  

  const changeMoreStatus = () =>{
    setFormSection( formSection + 1)
  }

  const decreaseStatus = () =>{
    if(formSection >= 1){
      setFormSection( formSection - 1 )
    }else{
      setFormSection(0)
    }
  }

  return (
    <div className="create-container">
      <h1 className='create-title'>publica tu propiedad</h1>
      {
        formSection === 0 &&
        <div className="principal-create-form">
          <div className="create-progress">
            <p className='form-stage'>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <p>
            formulario 1
          </p>
          <div className="create-info">
            <h2 className='create-subtitle'>Informacion Basica</h2>
            <div className="required-info">
              <input type='text' placeholder='Titulo de la publicacion' />
              <textarea placeholder='descripcion de la vivienda' />
            </div> 
          </div>
          <button className='create-action-button' onClick={changeMoreStatus}>siguente</button>
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
          <p>formulario 2</p>
          <div className="create-info">
            <h2 className='create-subtitle'>Informacion detallada</h2>
            <div className="required-info">
              <input type='text' placeholder='direccion'/>
              <select>
                <option value="zona">zona</option>
                <option value="">Urbano</option>
                <option value="">Rural</option>
              </select>
              <select>
                <option value="">modalidad</option>
                <option value="">venta</option>
                <option value="">Arriendo</option>
                <option value="">Permutar</option>

              </select>
              <select name="" id="">
                <option value="">tipo de vivienda</option>
                <option value="">Casa</option>
                <option value="">Local</option>
                <option value="">Apartamento</option>
                <option value="">Finca</option>
                <option value="">Lote</option>
              </select>
            </div>
            
          </div>
          <button className='create-action-button' onClick={decreaseStatus}>anterior</button>
          <button className='create-action-button' onClick={changeMoreStatus}>siguente</button>
        </div>
      }
      {
        formSection === 2 &&
        <div className="secondary-create-form">
          <div className="create-progress">
            <p>1</p>
            <p>2</p>
            <p  className='form-stage'>3</p>
          </div>
          <p>formulario 3</p>
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
          
          <button className='create-action-button' onClick={decreaseStatus}>anterior</button>
          <button className='create-action-button' >publicar</button>

        </div>
      }
    </div>
  )
}
