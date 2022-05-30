import './MyAnouncementCard.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';


export const MyAnouncementCard = ({ data }) => {
    const { idanuncio , titulo , direccion , ciudad , precio ,url1} = data
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="card-image-container">
                        <img className='card-image' src={ url1 } alt="url1" />
                    </div>
                    <div className="media-icons">
                        <FontAwesomeIcon icon={ faTrash } className="card-action"/>
                        <FontAwesomeIcon icon={ faPen} className='card-action' ></FontAwesomeIcon>
                    </div>
                    <div className="name-atributes">
                        <span className='title'>{ titulo }</span>
                        <span className='adress'>{ direccion }-{ ciudad }</span>
                        <span className='adress'>{ precio }</span>
                    </div>
                    <div className="button-visualizer">
                        <button className='action-visualizer'>ver publicacion</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

