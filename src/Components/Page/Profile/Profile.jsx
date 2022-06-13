import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../UserProvider/UserProvider';
import { UpdateInfo } from '../../Modal/UpateInfo/UpdateInfo'
import { Header } from '../../Layout/Header/Header'
import './Profile.css'
import { ModalCreateAnouncement } from '../../Modal/ModalCreateAnouncement/ModalCreateAnouncement'
import { Footer } from '../../Layout/Footer/Footer';
import { ProfileImage } from '../../UI/ProfileImage/ProfileImage';
import axios from 'axios';
import { MyAnouncementCard } from '../../UI/MyAnouncementCard/MyAnouncementCard'
import Carousel from 'react-elastic-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseCircleXmark } from '@fortawesome/free-solid-svg-icons';

export const Profile = () => {
    const { user } = useContext(UserContext)

    console.log(user);

    const [userAnouncement, setUserAnouncement] = useState([])

    const getAdversitement = () => {
        axios.get('https://easy-house-rent.azurewebsites.net/api/Advertisement/AdUser', { params: { idusuario: user[0].idusuario } })
            .then(response => {
                setUserAnouncement(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getAdversitement()
        displayMyAnouncement()
    })

    const breakproint = [

        {
            width: 500,
            itemsToShow: 2
        },
        {
            width: 880,
            itemsToShow: 3

        },
        {
            width: 1260,
            itemsToShow: 4,
        },
    ]

    const [viewAnouncement, setViewAnouncement] = useState(0)

    const displayMyAnouncement = () => {
        if (userAnouncement.length !== 0) {
            setViewAnouncement(1)

        } else {
            setViewAnouncement(0)
        }
    }

    return (
        <>
            <div className="profile-page">
                <Header />
                <div className="user-info-tools">
                    <div className="profile-data-received">
                        
                        <div className="profile-data">
                            <ProfileImage />
                            
                        </div>
                        <div className="profile-tools">
                            <h2>Nombre Completo</h2>
                            <p>{user[0].nombre} {user[0].apellidos}</p>
                            <h2>Correo electronico</h2>
                            <p>{ user[0].email}</p>
                            <h2>localidad</h2>
                            <p>Quindio - Pijao</p>
                            <h2>Telefono</h2>
                            <p>3174583592</p>
                        </div>
                    </div>
                    <div className="line-profile-separator" />
                    <div className="add-settings-account">
                        <UpdateInfo />
                        <ModalCreateAnouncement />
                    </div>
                </div>
                <div className="most-recent-container">
                    <h2>Mis publicaciones</h2>
                    {viewAnouncement === 0 &&
                        <div className="not-anouncement">
                            <div className="not-anouncement-profile">
                                <FontAwesomeIcon className='not-icon' icon={faHouseCircleXmark} />
                                <h2 className='not-anouncement-title'>Aun no tienes publicaciones...</h2>
                            </div>
                        </div>
                    }
                    {viewAnouncement === 1 &&
                        <Carousel itemsToShow={4} pagination={false}
                            breakPoints={breakproint}>
                            {userAnouncement.map(
                                userAnouncement => (
                                    <MyAnouncementCard key={userAnouncement.idanuncio} data={userAnouncement} />
                                )
                            )
                            }
                        </Carousel>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}
