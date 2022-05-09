import './PasswordReset.css'
import { useSearchParams } from 'react-router-dom';
import React , { useEffect, useState } from 'react'
import axios from 'axios';
import { urlPassword } from '../../ApiRoutes';

export const PasswordResetForm = () => {

    const [ tokenState , setTokenState ] = useState(false)

    const [searchParams] = useSearchParams();

    let emailToken = searchParams.get('token');

    
    const getToken = () => {
        if(emailToken != null){
            setTokenState(true)
        }
    }

    useEffect(()=>{
        getToken()
    })

    const [ password , setPassword ] = useState('');
    const [ verifyPassword , setVerifyPassword ] = useState('')
    const [ email, setEmail ] = useState('')
    
    const getPassword = ((e) => {
        setPassword(e.target.value)
        console.log(e.target.value);
    })

    const getVerifyPassword = ((e) =>{
        setVerifyPassword(e.target.value)
        console.log(e.target.value);
    })

    console.log(emailToken);

    const config = {
        headers: { Authorization: `Bearer ${emailToken}` }
    }


    const sendNewPassword = (e) => {
        e.preventDefault();
        axios.put(urlPassword, { params:{newPassword:password, email: }}, config)
        .then(response => {
            console.log(response.status);
        }).catch(ex => {
            console.log(ex);
        })
    }


    return (
        <>
        {tokenState &&
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
                        <button className='send-email' onClick={(e) => sendNewPassword(e)}>Restaurar</button>
                    </div>      
                    </form>
                </div>
        </div>
        }
    </>
    )
}