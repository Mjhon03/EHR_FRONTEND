import { faHouseCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { ProfileCardButton } from '../../StyledComponents/Overlay/StyledComponents'
import { UserImage } from '../../UI/UserImage/UserImage'
import './OtherUser.css'
import Carousel from 'react-elastic-carousel';
import { MyAnouncementCard } from '../../UI/MyAnouncementCard/MyAnouncementCard'

export const OtherUser = () => {

  const [searchParams] = useSearchParams()

  let idUser = searchParams.get('idUser')

  const [userData, setUserData] = useState([])

  const getUserInfo = () => {
    axios.get('https://easy-house-rent.azurewebsites.net/api/Users/getUser', { params: { idusuario: idUser } })
      .then(response => {
        setUserData(response.data)
      })
  }

  const [userAnouncement, setUserAnouncement] = useState([])

  const getAdversitement = () => {
    axios.get('https://easy-house-rent.azurewebsites.net/api/Advertisement/AdUser', { params: { idusuario: idUser } })
      .then(response => {
        setUserAnouncement(response.data)
      })
      .catch(err => {
        console.log(err);
      })
  }

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

  useEffect(() => {
    getAdversitement()
    displayMyAnouncement()
  })

  useEffect(() => { getUserInfo() }, [])

  return (
    <div className='profile-page'>
      <Header />
      <div className="user-info-tools">
        <div className="profile-data-received">
          <UserImage userData={userData} />
        </div>
        <div className="line-profile-separator" />
        <div className="add-settings-account">
          <ProfileCardButton >Contactar</ProfileCardButton>
          <ProfileCardButton >Reportar</ProfileCardButton>
        </div>
      </div>
      <div className="most-recent-container">
        <h2>Publicaciones de este usuario</h2>
        {viewAnouncement === 0 &&
          <div className="not-anouncement">
            <div className="not-anouncement-profile">
              <FontAwesomeIcon className='not-icon' icon={faHouseCircleXmark} />
              <h2 className='not-anouncement-title'>Aun no tiene publicaciones...</h2>
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
      <Footer />
    </div>
  )
}
