import './MyAnouncementCard.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faPen } from '@fortawesome/free-solid-svg-icons';


export const MyAnouncementCard = () => {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="card-image-container">
                        <img className='card-image' src='https://cdn.pixabay.com/photo/2022/05/17/15/59/cat-7203072_960_720.jpg' alt="url1" />
                    </div>
                    <div className="media-icons">
                        <FontAwesomeIcon icon={faDeleteLeft} className='card-action'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={ faPen} className='card-action' ></FontAwesomeIcon>
                    </div>
                    <div className="name-atributes">
                        <span className='title'>algun titulo</span>
                        <span className='adress'>alguna direccion</span>
                    </div>
                    <div className="button-visualizer">
                        <button className='action-visualizer'>ver publicacion</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

