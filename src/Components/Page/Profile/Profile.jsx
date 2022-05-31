import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../UserProvider/UserProvider';
import { UpdateInfo } from '../../Modal/UpateInfo/UpdateInfo'
import { Header } from '../../Layout/Header/Header'
import './Profile.css'
import { SettingsAcount } from '../../Modal/SettingsAcount/SettingsAcount';
import { ModalCreateAnouncement } from '../../Modal/ModalCreateAnouncement/ModalCreateAnouncement'
import { RegisterFooter } from '../../Layout/RegisterFooter/RegisterFooter';
import { ProfileImage } from '../../UI/ProfileImage/ProfileImage';
import axios from 'axios';
import { MyAnouncementCard } from '../../UI/MyAnouncementCard/MyAnouncementCard'
import Carousel from 'react-elastic-carousel';

export const Profile = () => {
    const { user } = useContext(UserContext)
    
    const [userAnouncement, setUserAnouncement] = useState([])

    const getAdversitement = () => {
        axios.get('https://easy-house-rent.azurewebsites.net/api/Advertisement/AdUser', { params: { idusuario: user[0].idusuario } })
            .then(response => {
                console.log(response.data);
                setUserAnouncement(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getAdversitement()
        displayMyAnouncement()
    },)

    const [viewAnouncement, setViewAnouncement] = useState(0)

    const displayMyAnouncement = () => {
        if (userAnouncement.length !== 0) {
            setViewAnouncement(1)
        }else{
            console.log('no hay nada');
            setViewAnouncement(0)
        }
    }

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
            <div className="most-recent-container">
                <h2 className='most-recent-title'>mis publicaciones</h2>
                {viewAnouncement === 1 &&
                    <Carousel itemsToShow={3} pagination={false}>
                        {userAnouncement.map(
                            userAnouncement => (
                                <MyAnouncementCard key={userAnouncement.idanuncio} data={userAnouncement} />
                            )
                        )
                        }
                    </Carousel>
                }
            </div>
            <div className="profile-user-container">

            </div >
            <RegisterFooter />
        </div>
    )
}
