import axios  from 'axios'
import React , { useState , useEffect  } from 'react'
import './ForgotPasswordForm.css'
import emailjs from '@emailjs/browser';
import { NavLink } from 'react-router-dom';
import { useLocation, useParams } from 'react-router';


export const ForgotPasswordForm = () => {

    const EMAILURL = 'https://localhost:44375/api/confirmationEmail'

    const[email, setemail] = useState({email: "email"})

    const[ user , setUser ] = useState(null);
    const[ token , setToken] = useState(null);

    useEffect(() => {
        console.log(token);
        console.log(user);
      }, [token],[user])

    const captureValue =((event)=>{
        setemail(event.target.value)
        setUser(event.target.value)
    })

    const verifyEmail = (event) =>{
        event.preventDefault()
        axios.get(EMAILURL,{params:{email:email }})
        .then(response =>{
            if(response.data === true){
                tokenReceived()
            }else{
                console.log(response.data) 
            }
        })
    }

    const tokenReceived = async () => {
        await axios.post(EMAILURL,{ params:{ email:email}})
        .then(res =>{
            setToken(`https://localhost:3000/passwordReset/?token=${res.data.token}`)
            sendEmail()
        })
       
    }

    let params = {
        user : user,
        userToken : token
    }

    const sendEmail = () =>{
        emailjs.send('service_8uodl5r','template_9ea0axg',params,'KYHPZomx00qkEwjDP')
        .then(function(response){  
            console.log(response);
        },function(error){
            console.log(error);
        })
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
                <input className='email-put' type="email" placeholder='Correo electrónico' name="user_name" onChange={ captureValue }></input>
                <p className='create-account'>No tienes cuenta...<NavLink to="/register"><p className='send-register'>Cree una</p></NavLink></p>
                <div className="send-content">
                    <button onClick={verifyEmail} className='send-email'>Enviar</button>
                </div>  
            </form>
        </div>
      </div>
    
  )
}
