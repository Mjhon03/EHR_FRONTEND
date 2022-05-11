import React, { useContext } from 'react'
import { UserContext } from '../../../UserProvider/UserProvider';
import { UpdateInfo } from '../../Modal/UpateInfo/UpdateInfo'
import { Header } from '../../Layout/Header/Header'
import './Profile.css'
import { SettingsAcount } from '../../Modal/SettingsAcount/SettingsAcount';
import { ProfileActions, ProfileInfoContent } from '../../StyledComponents/Overlay/StyledComponents'
import { ModalCreateAnouncement } from '../../Modal/ModalCreateAnouncement/ModalCreateAnouncement'

export const Profile = () => {

    const userData = useContext(UserContext)
    console.log(userData);
    return (
        <div className="profile-page">
            <Header />
            <div className="profile-user-container">
                <div className="user-card">
                    <div className="profile-user-info">
                        <div className="user-image-container">
                            <img src="https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_960_720.jpg" alt='profileImage' className='profile-user-image' />
                        </div>
                        <div className="profile-info-data">
                            <p>nombre : {userData[0].nombre}</p>
                            <p>apellidos : {userData[0].apellidos}</p>
                            <p>email : {userData[0].email}</p>
                            <p>telefono : {userData[0].telefono}</p>
                        </div>
                        <div className="add-settings-account">
                            <UpdateInfo />
                            <SettingsAcount />
                        </div>
                    </div>
                    <div className="footer-profile-container">
                        <p>&copy; Easy House Rent 2022</p>
                    </div>
                </div>
                <div className="anouncement-user-container">
                    <ProfileInfoContent />
                    <ProfileActions><ModalCreateAnouncement />
                    </ProfileActions>
                    <ProfileInfoContent />
                </div>
            </div>
        </div>
    )
}
