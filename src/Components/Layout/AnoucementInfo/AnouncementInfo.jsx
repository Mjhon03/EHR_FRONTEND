import React from 'react'
import { useNavigate } from 'react-router';
import './AnouncementInfo.css'

export const AnouncementInfo = ({ data }) => {
    console.log(data);
    
    const navigate = useNavigate()

    const sendOtherProfile = () => {
        navigate(`/user/profile?idUser=${data[0].idusuario}`)

    }
    return (
        <div className="anouncement-info-render">
            <button onClick={sendOtherProfile}>perfil de usuario</button>
        </div>
    )
}