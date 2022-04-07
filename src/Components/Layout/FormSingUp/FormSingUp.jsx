import React from 'react'
import './FormSingUp.css'
import { GoogleAuth } from '../../UI/GoogleAuth/GoogleAuth';
import { FacebookAuth } from '../../UI/FacebookAuth/FacebookAuth';
import { SelectDepartment } from '../../UI/SelectDepartment/SelectDepartment';
import { SelectMunicipality } from '../../UI/SelectMunicipality/SelectMunicipality';
import { urLDepartments, urlMunicipality, urlUsers } from '../../ApiRoutes';
import { useState , useEffect } from 'react'
import axios from 'axios';
import { postUsers } from '../../../methodsUsers';
import { type } from '@testing-library/user-event/dist/type';


export const FormSingUp = () => {

    const [photo, setPhoto] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [name, setName] = useState("")
    const [yearsOld , setYearsOld] = useState(0)
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

    const [ iddepartment , setIdDepartment ] = useState()
    const [ idmunicipality , setIdMunicipality ] = useState()

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

    useEffect(() => {
        // fetchMunicipality()
        fetchMunicipality()
    }, [iddepartment])
    
    useEffect(() => {
        console.log(idmunicipality)
    }, [idmunicipality])

    const setNameDepartment = (event) =>{
        setIdDepartment(event.target.value)
    }

    const getIdMunicipality = (event) =>{
        setIdMunicipality(event.target.value)
    }

    const fetchMunicipality = () =>{
        axios.get(`${urlMunicipality}${iddepartment}`)
        .then(response => {
            setdatamunicipality(response.data)
        })
        .catch(e =>{
            console.log(e);
        })
    }

    const userRegister = () =>{
        console.log(typeof(name),typeof(lastName),typeof(yearsOld) ,typeof(phoneNumber), typeof(email),typeof(password),"A",typeof(iddepartment), typeof(idmunicipality));
        postUsers(name,lastName, parseInt(yearsOld),phoneNumber,email,password,"A",parseInt(iddepartment),parseInt(idmunicipality));
    }
    return (
        <div className="register-form">
                <form className='form-register'>
                    <FacebookAuth buttonText={"registar por facebook"} />
                <br></br><br></br>
                    < GoogleAuth />
                    <div className="info-register">
                    
                    <input type="text" placeholder='nombre' maxLength="80" required className='info-input-register' onChange={ setEventToName }></input>
        
                    <input type="text" placeholder='Apellidos' maxLength="80" required className='info-input-register' onChange={ setEventToLastName }></input>
                    <div className="add-register-info">
                        <div className="yearsOld-info">
                            <input type="number" max="800"  placeholder='Edad' required className='info-input-add' onChange={ setEventToYearsOld }></input>
                        </div>
                        <div className="phoneNumber-info">
                            <input type="text" maxLength="10" placeholder='Telefono' required className='info-input-add' onChange={ setEventToPhoneNumber }></input>
                        </div>
                    </div>
                    <div className="department-info">
                        <SelectDepartment data={ datadeparment } name={ "Departamento"} event={setNameDepartment}/>
                        <SelectMunicipality data={ datamunicipality} event={getIdMunicipality} />
                    </div>                 
                   <input type="email" placeholder='Correo electronico' maxLength="80" required className='info-input-register' onChange={ setEventToEmail } ></input>        
                    <input type="password" placeholder='Contraseña' minLength='8' required className='info-input-register' onChange={ SetEventToPassword}></input>
                    </div>
                    <button className="register-submit" onClick={userRegister}>registrarme</button>                    
                </form>
        </div>
    )  
}
