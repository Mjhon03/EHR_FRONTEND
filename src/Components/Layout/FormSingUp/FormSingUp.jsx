import React from 'react'
import './FormSingUp.css'
import { RegisterCover } from '../../UI/RegisterCover/RegisterCover'
import { GoogleAuth } from '../../UI/GoogleAuth/GoogleAuth';
import { FacebookAuth } from '../../UI/FacebookAuth/FacebookAuth';


export const FormSingUp = () => {

    const [photo, setPhoto] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [name, setName] = useState("")
    const [yearsOld , setYearsOld] = useState("")
    const [lastName, setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const setEventToName=((event)=>{
        setName(event.target.value)
    }) 

    const setEventToLastName=((event)=>{
        setLastName(event.target.value)
    })
    
    const setEventToYearsOld=((event)=>{
        setYearsOld(event.target.value)
    })
    
    const setEventToPhoneNumber=((event)=>{
        setPhoneNumber(event.target.value)
    })
    
    const setEventToEmail=((event)=>{
        setEmail(event.target.value)
    })

    const SetEventToPassword=((event)=>{
        setPassword(event.target.value)
    }) 

    return (
        <div className="register-form">
            < RegisterCover />
            <div className="form-register-text">
                <form>
                    <FacebookAuth />
                <br></br><br></br>
                    < GoogleAuth />
                    <div className="separator">
                        <div className="line"></div>
                        <p className='or'>OR</p>
                        <div className="line"></div>
                    </div>
                    <div className="info-register">
                    <label>Nombre</label>
                    <br></br>
                    <input type="text" maxLength="80" required className='info-input-register' onChange={ setEventToName }></input>
                    <br></br>
                    <label>Apellidos</label>
                    <br></br>
                    <input type="text" maxLength='80' required className='info-input-register' onChange={ setEventToLastName }></input>
                    <label>edad</label>
                    <input type="number" max="800" required className='info-input-register' onChange={ setEventToYearsOld }></input>
                    <br></br>
                       
                    <label>Telefono</label>
                    <br></br>
                    <input type="text" maxLength="10" placeholder='opcional' required className='info-input-register' onChange={ setEventToPhoneNumber }></input>
                    <label>Email</label>
                    <br></br>
                    <input type="email" maxLength="80" required className='info-input-register' onChange={ setEventToEmail } ></input>
                    <br></br>
                    <label>Contraseña</label>
                    <br></br>
                    <input type="password" minLength='8' required className='info-input-register' onChange={ SetEventToPassword}></input>
                    </div>                   
                </form>
                
                <button className="register-submit">registrarme</button>            
            </div>
        </div>
    )  
}
