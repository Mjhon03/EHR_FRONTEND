import './MyAnouncementCard.css'
import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { UserContext } from '../../../UserProvider/UserProvider';
import axios from 'axios';
import swal from 'sweetalert';
import CurrencyFormat from 'react-currency-format';

export const MyAnouncementCard = ({ data }) => {
    const { idusuario , idanuncio, titulo, direccion, zona ,ciudad, precio, url1 } = data
    const { user } = useContext(UserContext)

    const deleteUserAnouncement = () => {
        axios.delete('https://easy-house-rent.azurewebsites.net/api/Advertisement/DeleteAd' ,
        { params : { idanuncio : idanuncio}}) 
        .then(res => {
            console.log(res);
        })
        .then(err => {
            console.log(err);
        })
    }

    const confirmDelete = () => {
        swal({
            title: `¿Esta seguro de eliminar el anuncio?`,
            text: `Una vez que lo elimine no lo podra recuperar`,
            icon: `warning`,
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                deleteUserAnouncement()
                swal("El anuncio se ha eliminado correctamente", {
                    icon: "success",
            });
        }
    });
    }

    
    const [ displayOptions , setDisplayOptions ] = useState(false)

    const validateUser = () => {
        if(user === null ){
            setDisplayOptions(false)
        }else if(user[0].idusuario === idusuario){
            setDisplayOptions(true)
        }else{
            setDisplayOptions(false)
        }
    }

    useEffect(()=> {
        validateUser()
    })

    const navigate = useNavigate()

    const SendAnouncement = () => {
        navigate(`/anouncement/?idanounce=${idanuncio}&adzone=${zona}`)
    }
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="card-image-container">
                        <img className='card-image' src={url1} alt="url1" />
                    </div>
                    {displayOptions &&
                        <div className="media-icons">
                            <FontAwesomeIcon onClick={confirmDelete} icon={faTrash} className="card-action" />
                            <FontAwesomeIcon icon={faPen} className='card-action' ></FontAwesomeIcon>
                        </div>
                    }
                    <div className="aling-info">
                        <div className="name-atributes">
                            <p className='title-card'>{titulo}</p>
                            <p className='adress-city'>{direccion}-{ciudad}</p>
                            <p><CurrencyFormat value={precio}displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <p>{value} <b>COP</b></p>} /></p>
                        </div>
                        <div className="button-visualizer">
                            <button onClick={SendAnouncement} className='action-visualizer'>Ver publicación</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

