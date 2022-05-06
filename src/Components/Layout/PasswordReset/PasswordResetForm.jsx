import './PasswordReset.css'
import { useSearchParams } from 'react-router-dom';
import React , { useEffect, useState } from 'react'
import axios from 'axios';

 
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
    
    const getPassword = ((e) => {
        setPassword(e.target.value)
        console.log(e.target.value);
    })

    const getVerifyPassword = ((e) =>{
        setVerifyPassword(e.target.value)
        console.log(e.target.value);
    })

    console.log(emailToken);

    // const sendNewData = () =>{
    //     axios.post("passwordURL",{ params:{ token:emailToken , newPassword:password , newVerifyPassword: verifyPassword }})
    //     .then(response => {
    //         console.log(response.status);
    //     }).catch(err =>{
    //         console.log(err);
    //     })
    // }


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
                        <button className='send-email'>Restaurar</button>
                    </div>      
                    </form>
                </div>
        </div>
        }
      </>
    )
}