import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './ForgotPasswordForm.css'
import emailjs from '@emailjs/browser';
import { NavLink } from 'react-router-dom';
import { Alert } from '../../Alert';


export const ForgotPasswordForm = () => {

    const EMAILURL = 'https://easy-house-rent.azurewebsites.net/api/password'

    const [email, setemail] = useState({ email: "email" })

    const [user, setUser] = useState("user");
    const [token, setToken] = useState("token");

    useEffect(() => {
        console.log(token);
        console.log(user);
    }, [token], [user])

    const captureValue = ((event) => {
        setemail(event.target.value)
        setUser(event.target.value)
        console.log(event.target.value);
    })

    const verifyEmail = (event) => {
        event.preventDefault()
        axios.post(EMAILURL, { params: { email: email } })
            .then(response => {
                if (response.data.state === true) {
                    setToken(`https://localhost:3000/passwordReset/?token=${response.data.token}`)
                    localStorage.setItem('email', email)
                    sendEmail()
                } else {
                    console.log(response.data)
                }
            })
        }
    

    let params = {
        sendUser: user,
        userToken: token
    }

    const sendEmail = () => {
        emailjs.send('service_8uodl5r', 'template_9ea0axg', params, 'KYHPZomx00qkEwjDP')
        .then(function(response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        })
    }


    const enterLogin=(event)=>{
        let charCode = event.keyCode;
        if (charCode===13){
            if(event.target.value === ""){
                Alert("Recuperación inválida","Por favor ingrese un correo.", "error", "Ok", "2000")
            }
            else{
                verifyEmail(event)
            }
        }
    }

    const validateDataInput = (event) => {
        event.preventDefault();
        if (event.target.value !== " ") {
            verifyEmail(event)
        }
        else {
            Alert("Recuperación inválida", "Por favor ingrese un correo.", "error", "Ok", "2000")
        }
    }


    return (
        <div className="body-container">
            <div className="forgot-password-container">
                <div className="logo-container">
                    <h3>EHR</h3>
                    <p>Easy House Rent</p>
                </div>
                <h2 className='forgot-title'>Recuperacion de Contraseña</h2>
                <form>
                    <input className='email-put' required type="email" placeholder='Correo electrónico' name="user_name" onChange={captureValue} onKeyUp={e => (enterLogin(e))}></input>
                    <p className='create-account'>No tienes cuenta...<NavLink to="/register"><p className='send-register'>Cree una</p></NavLink></p>
                    <div className="send-content">
                        <button onClick={event => (validateDataInput(event))} className='send-email'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
