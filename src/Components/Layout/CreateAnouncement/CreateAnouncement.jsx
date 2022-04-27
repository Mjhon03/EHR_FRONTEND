import React from 'react'
import { AnouncementButton } from '../../UI/AnouncementButton/AnouncementButton'
import './CreateAnouncement.css'

export const CreateAnouncement = () => {
  return (
    <div className="create-container">
        <div>
            <h1>Crea tu publicacion</h1>
            <form>
                <p>Nombre de Publicacion</p>
                <input type="text"></input>
                <p>Tipo de estructura</p>
                <input type="text"></input>
                <p>Zona</p>
                <input type="text"></input>
                <p>Direccion</p>
                <input type="text"></input>
                <p>Descripcion</p>
                <textarea></textarea>
            </form>
            <AnouncementButton title={"Siguiente"}></AnouncementButton>
        </div>
    </div>
  )
}
