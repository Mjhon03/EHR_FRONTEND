import React from 'react'
import './FormSingUp.css'
import { RegisterCover } from '../../UI/RegisterCover/RegisterCover'
import { GoogleAuth } from '../../UI/GoogleAuth/GoogleAuth';
import { FacebookAuth } from '../../UI/FacebookAuth/FacebookAuth';
import { SelectDepartment } from '../../UI/SelectDepartment/SelectDepartment';
import { urLDepartments, urlMunicipality, urlUsers } from '../../ApiRoutes';
import { useState , useEffect } from 'react'
import axios from 'axios';
import { postUsers } from '../../../methodsUsers';


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

    useEffect(() =>{
        fetchDeparments()            
    },[])

    

    const [ datadeparment , setdatadeparment ] = useState([{ nombre : ''}])
    const [ datamunicipality , setdatamunicipality ] = useState([{ nombre : ''}])


    const fetchDeparments = () =>{
        axios.get(urLDepartments)
        .then(response => {     
            setdatadeparment(response.data)
        })
        .catch(e => {
            console.log(e);
        })
    }

    let idDepartament
    let idMunicipality
    const setNameDepartment = (event) =>{
        idDepartament=event.target.value
        console.log(event.target.value);
        console.log(idDepartament);
        const fetchMunicipality = () =>{
            axios.get(`${urlMunicipality}/0?iddepartamento=${event.target.value}`)
            .then(response => {
                setdatamunicipality(response.data)
                idMunicipality=response.data[0].idmunicipio
                console.log(idMunicipality);
            })
            .catch(e => {
                console.log(e);
            })
        }
        fetchMunicipality()
    }
    
    

    const registerData = () =>{
        postUsers(name,lastName,yearsOld,phoneNumber,email,password,"A",idDepartament,idMunicipality)
    }

    return (
        <div className="register-form">
            < RegisterCover />
            <div className="form-register-text">
                <form>
                    <FacebookAuth buttonText={"registar por facebook"} />
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
                    <input type="text" maxLength="80" required className='info-input-register' onChange={ setEventToLastName }></input>
                    <div className="department-info">
                        <div className="yearsOld-info">
                            <label>edad</label>
                            <input type="number" max="800" required className='info-aditional' onChange={ setEventToYearsOld }></input>
                        </div>
                        <div className="phoneNumber-info">
                            <label>telefono</label>
                            <input type="text" maxLength="10" placeholder='opcional' required className='info-input-register' onChange={ setEventToPhoneNumber }></input>
                        </div>
                    </div>
                    <div className="department-info">
                        <SelectDepartment data={ datadeparment } name={ "Departamento"} event={setNameDepartment}/>
                        <SelectDepartment data={ datamunicipality} name={"Municipio"} />
                    </div>
                    <label>Email</label>
                    <br></br>
                    <input type="email" maxLength="80" required className='info-input-register' onChange={ setEventToEmail } ></input>
                    <br></br>
                    <label>Contraseña</label>
                    <br></br>
                    <input type="password" minLength='8' required className='info-input-register' onChange={ SetEventToPassword}></input>
                    </div>                   
                </form>
                
                <button className="register-submit" onClick={ registerData }>registrarme</button>            
            </div>
        </div>
    )  
}
