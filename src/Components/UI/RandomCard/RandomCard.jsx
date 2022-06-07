import React from 'react'
import { useNavigate } from 'react-router'
import './RandomCard.css'

export const RandomCard = ({ data }) => {

  const navigate = useNavigate()

  const sendAnouncement = () => {
    navigate(`/anouncement/?idanounce=${idanuncio}&adzone=${zona}`)
}

  const { idanuncio, titulo, direccion, zona, ciudad,  url1 , url2 , url3 } = data
  return (
    <div className="card-random-container">

      <div className="other-random-info-container">
        <div className="card-random-title-container">
          <h1 className='card-random-title'>{titulo}</h1>
        </div>
        <div className="card-images-random">
          <div className="secondary-image-random">
            <img className='secondary-render' src={ url2 } alt="secondaryrender" />
          </div>
          <div className="primary-images-random">
            <img className='secondary-render' src={ url1 } alt="primaryrender" />
          </div>
          <div className="secondary-image-random">
            <img className='secondary-render' src={ url3 } alt="secondaryrender" />
          </div>
        </div>
        <div className="description-data-random">
         <h2>Caracteristicas</h2> 
        </div>
        <div className="description-other-random">
          <h3 className='city-random'>Ciudad : {ciudad}</h3>
          <h3 className='city-random' >Zona : {zona}</h3>
          <h3 className='city-random'>Direccion : {direccion}</h3>
        </div>
        <button onClick={sendAnouncement} className='button-random-redirect'>ver publicacion</button>
      </div>
    </div>
  )
}
