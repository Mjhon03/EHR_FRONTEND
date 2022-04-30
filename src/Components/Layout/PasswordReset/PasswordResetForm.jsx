import './PasswordReset.css'
import { useSearchParams } from 'react-router-dom';
import React , { useState } from 'react'
import axios from 'axios';

 
export const PasswordResetForm = () => {

    const [ emailToken , setEmailToken ] = useState(null);
    const [ password , setPassword ] = useState('');
    const [ verifyPassword , setVerifyPassword ] = useState('');

    const GetToken =  () => {
        const [searchParams] = useSearchParams();
        setEmailToken(searchParams.get('token'))
        console.log(searchParams.get('token'));
    }

    const getPassword = ((e) => {
        setPassword(e.target.value)
        console.log(e.target.value);
    })

    const getVerifyPassword = ((e) =>{
        setVerifyPassword(e.target.value)
        console.log(e.target.value);
    })

    const sendNewData = () =>{
        axios.post("passwordURL",{ params:{ token:emailToken , newPassword:password , newVerifyPassword: verifyPassword }})
        .then(response => {
            console.log(response.status);
        }).catch(err =>{
            console.log(err);
        })
    }

    GetToken()

    return (
        <div className="body-container">
            <div className="reset-password-container">
                <div className="logo-container">
                    <h3>EHR</h3>
                    <p>Easy House Rent</p>
                </div>
                <h2 className='forgot-title'>Cambio de contraseña</h2>
                <form>
                    <input className='password-put' type="password" placeholder='Nueva contraseña' onChange={getPassword}  name="user_name"></input>
                    <div className="separator"></div>
                    <input className='password-put' type="password" placeholder='Confirmacion nueva contraseña' onChange={getVerifyPassword} name="user_name"></input>                    
                    <div className="send-content">
                    <button className='send-email'>Restaurar</button>
                </div>      
                </form>
            </div>
      </div>
    )
}