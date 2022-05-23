import './PasswordReset.css'
import { useSearchParams } from 'react-router-dom';
import React , { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import validator from 'validator';

export const PasswordResetForm = () => {

    const [ tokenState , setTokenState ] = useState(false)
<<<<<<< HEAD
=======

    const navigate = useNavigate()

>>>>>>> 0d1ba145fca0387e7ea35f30c7a4491aeaf96be1
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const [passwordError, setpasswordError] = useState("")
    const [verifyPasswordError, setverifyPasswordError] = useState("")
    const [passwordmatch, setpasswordmatch] = useState("")

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
    const [ email, setemail] = useState('');
    const getemail = () => {
        if (email != null) {
            setemail(localStorage.getItem('email'))
        }
    }

    useEffect(()=>{
        getemail()
    })    

    const getPassword = ((e) => {
        setPassword(e.target.value)
        if(validator.isLength(e.target.value, {min: 8, max: undefined})){
            setpasswordError("")
        }
        else{
            setpasswordError("La contraseña debe tener al menos 8 caracteres.")
        }
        if (e.target.value === "") {
            setverifyPasswordError("")    
        }
    })

    const getVerifyPassword = ((e) =>{
        setVerifyPassword(e.target.value)
        if(validator.isLength(e.target.value, {min: 8, max: undefined})){
            setverifyPasswordError("")
        }
        else{
            setverifyPasswordError("La contraseña debe tener al menos 8 caracteres.")
        }
        if(e.target.value === "") {
            setverifyPasswordError("")    
        }
    })

    const passwordMatch = () => {
        if(validator.equals(password, verifyPassword)){
            setpasswordmatch("")
        }
        else{
            setpasswordmatch("Las contraseñas no coinciden")
        }
    }

    useEffect(()=>{
        passwordMatch()
    },[password, verifyPassword])


    const bodyParameters = {
        password: password,
        email: email
    };

    const sendNewPassword = (e) => {
        e.preventDefault();
        axios.put(`https://localhost:44375/api/Password`, bodyParameters, {headers:{ Authorization: `Bearer ${emailToken}` }})
        .then(response => {
            alert('Contraseña ha sido actualizada correctamente')
            navigate('/login')
        }).catch(ex => {
            console.log(ex);
        })
    }

    const enterLogin=(event)=>{
        let charCode = event.keyCode;
        if (charCode===13){
            sendNewPassword()
        }
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
                        <input className='password-put' type="password" placeholder='Nueva contraseña' onChange={getPassword}  name="user_name"></input><br></br>
                        <span style={{color: 'red'}}>{passwordError}</span>
                        <div className="separator"></div>
                        <input className='password-put' type="password" placeholder='Confirmacion nueva contraseña' onChange={getVerifyPassword} name="user_name" onKeyUp={e => (enterLogin(e))}></input><br></br>
                        <span style={{color: 'red'}}>{verifyPasswordError}</span>
                        <span style={{color: 'red'}}>{passwordmatch}</span>                  
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