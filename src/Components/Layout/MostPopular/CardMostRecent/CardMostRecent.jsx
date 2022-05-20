import React from "react"
import './CardMostRecent.css'

export const CardMostRecent = ({data}) => {
    const {titulo,zona,precio,url1} = data

    return (
        <div className="divCardMostRecent">
            <b><p className="titleMostRecent">{titulo}</p></b>
            <div className="divImageCardMostRecent">
                <img className="imageCardMostCecent" src={url1} alt={titulo} />
            </div>
            <p><b>Zona: </b>{zona}</p>
            <p><b>Precio: </b>{precio}</p>
            <button className="btnCardMostRecent">Ver</button>
        </div>
    )
}