import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../../UserProvider/UserProvider';
import { UpdateInfo } from '../../Modal/UpateInfo/UpdateInfo'
import { Header } from '../../Layout/Header/Header'
import './Profile.css'
import { SettingsAcount } from '../../Modal/SettingsAcount/SettingsAcount';
import { ProfileInfoContent } from '../../StyledComponents/Overlay/StyledComponents'
import { ModalCreateAnouncement } from '../../Modal/ModalCreateAnouncement/ModalCreateAnouncement'
import { RegisterFooter } from '../../Layout/RegisterFooter/RegisterFooter';
import { ProfileImage } from '../../UI/ProfileImage/ProfileImage';
import axios from 'axios';

export const Profile = () => {

    const { user } = useContext(UserContext)
    console.log(user);

    const getAdversitement = () => {
        axios.get('https://easy-house-rent.azurewebsites.net/api/Advertisement/AdUser', { params: { idusuario: user[0].idusuario }})
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(()=>{
        getAdversitement()
    },[])

    return (
        <div className="profile-page">
            <Header />
            <div className="user-info-tools">
                <div className="profile-data-received">
                    <ProfileImage />
                    <div className="profile-data">
                        <h1>{user[0].nombre} {user[0].apellidos}</h1>

                    </div>
                </div>
                <div className="line-profile-separator" />
                <div className="add-settings-account">
                    <UpdateInfo />
                    <SettingsAcount />
                    <ModalCreateAnouncement />
                </div>
            </div>
            <div className="profile-user-container">
                <div className="anouncement-user-container">
                    <ProfileInfoContent />
                    <ProfileInfoContent />
                </div>
            </div>
            <RegisterFooter />
        </div>
    )
}
