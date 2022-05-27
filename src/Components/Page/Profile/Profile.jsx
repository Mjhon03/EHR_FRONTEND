import React, { useContext } from 'react'
import { UserContext } from '../../../UserProvider/UserProvider';
import { UpdateInfo } from '../../Modal/UpateInfo/UpdateInfo'
import { Header } from '../../Layout/Header/Header'
import './Profile.css'
import { SettingsAcount } from '../../Modal/SettingsAcount/SettingsAcount';
import { ProfileInfoContent } from '../../StyledComponents/Overlay/StyledComponents'
import { ModalCreateAnouncement } from '../../Modal/ModalCreateAnouncement/ModalCreateAnouncement'
import { RegisterFooter } from '../../Layout/RegisterFooter/RegisterFooter';
import { ProfileImage } from '../../UI/ProfileImage/ProfileImage';

export const Profile = () => {

    const userData = useContext(UserContext)
    return (
        <div className="profile-page">
            <Header />
            <div className="user-info-tools">
                <div className="profile-data-received">
                    <ProfileImage />
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
