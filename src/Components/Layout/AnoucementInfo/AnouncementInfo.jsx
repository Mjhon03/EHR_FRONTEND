import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import './AnouncementInfo.css'
import emailjs from '@emailjs/browser';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import { MyAnouncementCard } from '../../UI/MyAnouncementCard/MyAnouncementCard';
import { UserContext } from '../../../UserProvider/UserProvider';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { UserImage } from '../../UI/UserImage/UserImage';
import { AnouncementImages } from '../../UI/AnouncementImages/AnouncementImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck, faLocationDot, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';
import CurrencyFormat from 'react-currency-format';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import swal from 'sweetalert';



export const AnouncementInfo = ({ data, userData }) => {

    const { user } = useContext(UserContext)

    console.log(userData);

    const navigate = useNavigate()

    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')

    const [idAnouncement, setIdAnouncement] = useState('')
    const [zone, setZone] = useState('')
    const [idUser, setIdUser] = useState(0)
    const [title, setTitle] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [editicacion, setEedification] = useState('')
    const [adress, setAdress] = useState('')
    const [modality, setModality] = useState('')
    const [value, setValue] = useState('')
    const [rooms, setRooms] = useState('')
    const [garage, setGarage] = useState('no')

    const getData = () => {
        if (data.length !== 0) {
            setIdAnouncement(data[0].idanuncio)
            setIdUser(data[0].idusuario)
            setTitle(data[0].titulo)
            setImage1(data[0].url1)
            setImage2(data[0].url2)
            setImage3(data[0].url3)
            setImage4(data[0].url4)
            setDescription(data[0].descripcion)
            setEedification(data[0].edificacion)
            setAdress(data[0].direccion)
            setModality(data[0].modalidad)
            setValue(data[0].precio)
            setRooms(data[0].habitaciones)
            setGarage(data[0].garaje)
            setZone(data[0].zona)
            setCity(data[0].ciudad)
        }
    }
    useEffect(() => {
        getData()
    })

    useEffect(() => {
        getUserInformation()
    })
    const sendOtherProfile = () => {
        navigate(`/user/profile?idUser=${idUser}`)
    }

    const [email, setEmail] = useState('')

    const getEmailToSend = async () => {
        axios.get('https://easy-house-rent.azurewebsites.net/api/Users/GetUser', { params: { idusuario: idUser } })
            .then(response => {
                setEmail(response.data[0].email)
            }).catch(err => {
                console.log(err);
            })
    }



    useEffect(() => {
        getEmailToSend()
        getRecomended()
    }, [idUser])

    let params = {

        toUser: email,
        anouncementTitle: title,
        post: `https://localhost:3000/anouncement/?idanounce=${idAnouncement}&adzone=${zone}`
    };

    const sendNotification = () => {
        emailjs.send('service_8uodl5r', 'template_i43k2ju', params, 'KYHPZomx00qkEwjDP')
            .then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            })
    }

    const changePhoto = (e) => {
        if (e.target.alt === 'image2') {
            setImage2(image1)
            setImage1(e.target.src)
        } else if (e.target.alt === 'image3') {
            setImage3(image1)
            setImage1(e.target.src)
        } else if (e.target.alt === 'image4') {
            setImage4(image1)
            setImage1(e.target.src)
        }
    }

    const breakproint = [

        {
            width: 100,
            itemsToShow: 1
        },
        {
            width: 415,
            itemsToShow: 2


        },
        {
            width: 880,
            itemsToShow: 3

        },
        {
            width: 1280,
            itemsToShow: 4,
        },
    ]

    const [recomended, setRecomended] = useState([])

    const getRecomended = () => {
        axios.get('https://easy-house-rent.azurewebsites.net/api/home/recommended', { params: { ciudad: city } })
            .then(response => {
                setRecomended(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const sendAlert = () => {
        console.log('necesita autorizacion');
    }

    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState(' ')
    const [userLastName, setUserLastName] = useState('')

    const getUserInformation = () => {
        if (userData.length !== 0) {
            setUserEmail(userData[0].email);
            setUserName(userData[0].nombre)
            setUserLastName(userData[0].apellidos)
        }
    }

    const noticeInterest = () => {
        if (user === null) {
            swal({
                title: "Necesitas iniciar sesion",
                text: "Para ver el perfil de otro usuario",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        navigate('/login')
                    }
                });
        }
        else {
            console.log("else");
        }
    }

    return (
        <>
            <div className="advertisement-info">
                <div className="prop-images">
                    <AnouncementImages url1={image1} url2={image2} url3={image3} url4={image4} habitaciones={rooms} garaje={garage} modalidad={modality} />
                </div>
                <div className="prop-advertisement">
                    <div className="prop-advertisement-subinfo">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <div className="text-container-dot">
                            <FontAwesomeIcon icon={faLocationDot} className='tools-render-action' />
                            <p>{zone} - {city} - {adress}</p>
                        </div>

                        <p><CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <p>{value}<b>co</b></p>} /></p>
                    </div>
                    <div className="user-target-data">
                        <h2 className='user-data-title'>Propietario</h2>
                        <div className="user-target">
                            <UserImage userdata={userData} />
                            <div className="user-target-info">
                                <p>{userName} {userLastName}</p>
                                <p>{userEmail}</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-target-actions">
                        <button className='target-profile-actions' ><FontAwesomeIcon className='tools-render-action' icon={faUser} />Ver perfil</button>
                        <button className='target-profile-actions' ><FontAwesomeIcon className='tools-render-action' icon={faEnvelopeCircleCheck} />Notificar interés</button>
                        <button className='target-profile-actions' ><FontAwesomeIcon className='tools-render-action' icon={faMessage} />Chat</button>
                        <button className='target-profile-actions' ><FontAwesomeIcon className='tools-render-action' icon={faWhatsapp} />Contacto</button>
                    </div>
                </div>
            </div>
            <div className="most-recent-container-home">
                <h2 className='most-recent-title'>Publicaciones recomendadas</h2>
                <Carousel itemsToShow={4} pagination={false}
                    breakPoints={breakproint}>
                    {recomended.map(
                        recomended => (
                            <MyAnouncementCard key={recomended.idanuncio} data={recomended} />
                        )
                    )
                    }
                </Carousel>
            </div>
        </>
    )
}