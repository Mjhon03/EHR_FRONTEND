import React from 'react'
import { useState } from 'react'
import { db } from '../../../firebase'
import { UseChat } from '../../../UseChat'
import './Chat.css'
import { Header } from '../../Layout/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

export const Chat = () => {

    let date = new Date()

    const [message, setMessage] = useState('')
    const { loading, messages, error } = UseChat()

    const onPress = (e) => {
        db.collection('messages').add({
            timestamp: Date.now(),
            date,
            message
        })
        changeDefault()
    }

     const sendEvent =(event)=>{
        let charCode = event.keyCode;
        if (charCode===13){
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
                       <ul>
                        {messages.map(m => <li key={m.id}>{m.message}</li>)}
                        </ul> 
                    </div>
                    
                    <div className='send-message-content'>
                        <input autoFocus className='info-input-send' placeholder='Escribe un mensaje aquí' onKeyUp={sendEvent}  value={message} type='text' onChange={(e) => setMessage(e.target.value)} />
                        <FontAwesomeIcon className='send-message-icon' icon={faPaperPlane}  onClick={ onPress} />
                    </div>
                </div>
            </div>

        </div>
    )
}
