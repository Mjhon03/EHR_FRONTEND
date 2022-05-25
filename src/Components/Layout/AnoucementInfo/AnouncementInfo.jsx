import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './AnouncementInfo.css'
import emailjs from '@emailjs/browser';
import axios from 'axios';

export const AnouncementInfo = ({ data }) => {

    const sendOtherProfile = () => {
        navigate(`/user/profile?idUser=${data}`)
    }

    const [ email , setEmail ] = useState(0)

    const getEmailToSend = () => { 
        axios.get('https://easy-house-rent.azurewebsites/api/Users/GetUser', { 
            
        })
        .then(response => {
            console.log(response);
            setEmail(response.data.email)
        }).catch(err => { 
            console.log(err);
        })
    }

        
    let params = {
        toUser : email   
    }

    const sendNotification = () => {
        emailjs.send('service_8uodl5r', 'template_i43k2jsen', params, 'KYHPZomx00qkEwjDP')
        .then(function(response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        })
    }

    return (
        <div className="anouncement-info-render">
            <button onClick={sendOtherProfile}>perfil de usuario</button>
        </div>
    )
}