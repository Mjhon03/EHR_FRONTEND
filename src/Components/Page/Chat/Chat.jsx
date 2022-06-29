import React, { useContext } from 'react'
import { useState } from 'react'
import { db } from '../../../firebase'
import { UseChat } from '../../../UseChat'
import './Chat.css'
import { Header } from '../../Layout/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { UserContext } from '../../../UserProvider/UserProvider'
import { useNavigate } from 'react-router'

export const Chat = () => {

    const { user } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (user === null) {
            navigate('/')
        }
    })

    let currentTime = new Date() 
    let date = currentTime.toLocaleTimeString()

    const [message, setMessage] = useState('')
    const { loading, messages, error } = UseChat()

    const onPress = (e) => {
        db.collection('messages').add({
            timestamp: Date.now(),
            date : date,
            message,
            user: user[0].idusuario,
            photo: user[0].foto
        })
        changeDefault()
    }

    const sendEvent = (event) => {
        let charCode = event.keyCode;
        if (charCode === 13) {
            onPress()
        }
    }

    const changeDefault = () => {
        setMessage('')
    }


    return (
        <div className='chat-box'>
            <Header />
            <div className="chat-container">
                <div className="contacts-container">
                    <h1>contactos</h1>
                </div>
                <div className="chat-form-content">
                    <div className="messages-container">
                        {messages.map(m => {
                            if (m.user === user[0].idusuario) {
                                return (
                                    <div className="message-content">
                                        <div className="photo-content-msj">
                                            <img src={m.photo} alt="profile" className='photo-msj' />
                                        </div>
                                        <div className="message-container-text">
                                            <p className='send-message' key={m.id}>{m.message}{m.date}</p>
                                        
                                        </div>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className="messages-content">
                                        <p className='send-message' key={m.id}>{m.message}</p>
                                        <div className="photo-content-msj">
                                            {
                                                m.photo === ' ' ?
                                                    <img src='https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png' alt="" />
                                                    :
                                                    <img src={m.photo} alt="profile" className='photo-msj' />
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        }

                        )}
                    </div>
                    <div className='send-message-content'>
                        <input autoFocus className='info-input-send' placeholder='Escribe un mensaje aquí' onKeyUp={sendEvent} value={message} type='text' onChange={(e) => setMessage(e.target.value)} />
                        <FontAwesomeIcon className='send-message-icon' icon={faPaperPlane} onClick={onPress} />
                    </div>
                </div>
            </div>

        </div>
    )
}
