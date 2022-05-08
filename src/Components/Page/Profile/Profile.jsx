import React, { useContext } from 'react'
import { UserContext } from '../../../UserProvider/UserProvider';
import { UpdateInfo } from '../../Modal/UpateInfo/UpdateInfo'
import { Header } from '../../Layout/Header/Header'
import './Profile.css'

export const Profile = () => {

    const userData = useContext(UserContext)
    console.log(userData);
    return (
        <>
            <Header />
            <div className="profile-user-container">
                <div className="profile-user-info">
                    <div className="user-image-container">
                        <img src="" alt="profileImage" />
                    </div>
                    <p>nombre : {userData[0].nombre}</p>
                    <p>apellidos : {userData[0].apellidos}</p>
                    <p>edad : {userData[0].edad}</p>
                    <p>telefono : :{userData[0].telefono}</p>

                    <UpdateInfo />
                </div>
            </div>
        </>
    )
}
