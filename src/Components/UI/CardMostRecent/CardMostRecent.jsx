import React from "react"
import { useNavigate } from "react-router"
import './CardMostRecent.css'

export const CardMostRecent = ({data}) => {
    const { idanuncio, direccion,ciudad ,titulo,zona,precio,url1} = data
    console.log(data);
    const navigate = useNavigate()

    const sendAnouncement = () => {
        navigate(`/anouncement/?idanounce=${idanuncio}&adzone=${zona}`)
    }

    return (
        <div className="divCardMostRecent">
            <b><p className="titleMostRecent">{titulo}</p></b>
            <div className="divImageCardMostRecent">
                <img className="imageCardMostCecent" src={url1} alt={titulo} />
            </div>
            <p><b>direccion: </b>{ direccion }</p>
            <p><b>ciudad: </b>{ ciudad }</p>
            <p><b>Precio: </b>{precio}</p>
            <button onClick={sendAnouncement} className="btnCardMostRecent">Ver</button>
        </div>
    )
}