import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import './AnouncementInfo.css'
import emailjs from '@emailjs/browser';
import axios from 'axios';

export const AnouncementInfo = ({ data }) => {

    const navigate = useNavigate()

    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')

    const [ idAnouncement , setIdAnouncement ] = useState('')
    const [ zone , setZone ] = useState('')
    const [idUser, setIdUser] = useState(0)
    const [title, setTitle] = useState('hola')
    const [ description , setDescription ] = useState('')
    const [ editicacion , setEedification ] = useState('')
    const [ adress , setAdress ] = useState('')
    const [ modality , setModality ] = useState('')
    const [ value , setValue ] = useState('')
    const [ rooms , setRooms ] = useState('')
    const [ garage , setGarage ] = useState('no')


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
        }
    }

    useEffect(() => {
        getData()
    }, [data])

    const sendOtherProfile = () => {
        navigate(`/user/profile?idUser=${idUser}`)
    }

  const [ email , setEmail ] = useState('')

    const getEmailToSend  = async () => {
        axios.get('https://easy-house-rent.azurewebsites.net/api/Users/GetUser', { params : { idusuario : idUser }})
        .then(response => {
            setEmail(response.data[0].email)
        }).catch(err => {
            console.log(err);
      })
    }

    useEffect(()=>{
        getEmailToSend()
    },[ idUser ])

    let params = {
        toUser: email,
        anouncementTitle : title,
        post : `https://localhost:3000/anouncement/?idanounce=${idAnouncement}&adzone=${zone}`
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
        if(e.target.alt === 'image2'){
            setImage2(image1)
            setImage1(e.target.src)
        }else if(e.target.alt === 'image3'){
            setImage3(image1)
            setImage1(e.target.src)
        }else if(e.target.alt === 'image4'){
            setImage4(image1)
            setImage1(e.target.src)
        }
    }

    return (
        <>
        <h1>{ title }</h1>
            <div className="anouncement-info-render">
                <div className="anouncement-images-container">
                    <div className="first-image">
                        <img src={image1} alt="image1" className='anouncement-first-image' />
                    </div>
                    <div className="other-images-container">
                        <div className="other-image-container">
                            <img onMouseEnter={e => {changePhoto(e)}} src={image2} alt="image2" className='anouncement-other-image' />
                        </div>
                        <div className="other-image-container">
                            <img src={image3} onMouseEnter={e => {changePhoto(e)}} alt="image3" className='anouncement-other-image' />
                        </div>
                        <div className="other-image-container">
                            <img src={image4} alt="image4" onMouseEnter={e => {changePhoto(e)}} className='anouncement-other-image' />
                        </div>
                    </div>
                </div>
                <div className="anoucement-aditional-info">
                    <p>{ description }</p>
                    <p>{ adress }</p>
                    <p>{ editicacion }</p>
                    <p>{ modality }</p>
                    <p>{ value }</p>
                    <p>{ rooms }</p>
                    <p>{ garage }</p>
                </div>



                <button onClick={sendOtherProfile}>perfil de usuario</button>
                <button onClick={sendNotification}>notificacion de interes</button>
            </div>
        </>
    )
}