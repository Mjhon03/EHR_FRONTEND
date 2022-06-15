import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../UserProvider/UserProvider';
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
import { UpdateUserInfo } from '../../UI/UpdateUserInfo/UpdateUserInfo';

export const Profile = () => {
    const { user } = useContext(UserContext)

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
    }, [])

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

    console.log(user);

    return (
        <>
            <div className="profile-page">
                <Header />
                <div className="user-info-tools">
                    <div className="profile-data-received">
                        <ProfileImage />
                    </div>
                    <div className="line-profile-separator" />
                    <div className="add-settings-account">
                        <UpdateUserInfo />
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
