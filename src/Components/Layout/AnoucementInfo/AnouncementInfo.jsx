import React from 'react'
import { useNavigate } from 'react-router';
import './AnouncementInfo.css'
import emailjs from '@emailjs/browser';
export const AnouncementInfo = ({ data }) => {
    console.log(data);
    
    const navigate = useNavigate()

    const sendOtherProfile = () => {
        navigate(`/user/profile?idUser=${data[0].idusuario}`)
    }
        
    let params = {
        sendUser: data[0].email
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

            <button onClick={sendNotification}>Correo de interes</button>
        </div>
    )
}