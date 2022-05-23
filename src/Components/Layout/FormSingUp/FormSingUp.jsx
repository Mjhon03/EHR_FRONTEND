import React from 'react'
import './FormSingUp.css'
import { GoogleAuth } from '../../UI/GoogleAuth/GoogleAuth';
import { FacebookAuth } from '../../UI/FacebookAuth/FacebookAuth';
import { SelectDepartment } from '../../UI/SelectDepartment/SelectDepartment';
import { SelectMunicipality } from '../../UI/SelectMunicipality/SelectMunicipality';
import { urLDepartments, urlMunicipality} from '../../ApiRoutes';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { postUsers } from '../../../methodsUsers';
import { NavLink } from 'react-router-dom';
import validator from 'validator';

export const FormSingUp = () => {

    const [ imageSelected, setImageSelected] = useState('')
    const [ photo , setPhoto ] = useState('')

    const [emailError, setemailError] = useState("")
    const [passwordError, setpasswordError] = useState("")

  

    const [phoneNumber, setPhoneNumber] = useState("")
    const [name, setName] = useState("")
    const [yearsOld, setYearsOld] = useState(0)
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const setEventToName = ((event) => {
        setName(event.target.value)
    })

    const setEventToLastName = ((event) => {
        setLastName(event.target.value)
    })

    const setEventToYearsOld = ((event) => {
        setYearsOld(event.target.value)
    })

    const setEventToPhoneNumber = ((event) => {
        setPhoneNumber(event.target.value)
    })

    const setEventToEmail = ((event) => {
        setEmail(event.target.value)
        if(validator.isEmail(event.target.value)){
            setemailError("")
        }
        else{
            setemailError("El correo no es valido.")
        }
        if (event.target.value === "") {
            setemailError("")
        }
    })

    const SetEventToPassword = ((event) => {
        setPassword(event.target.value)
        if (validator.isStrongPassword(event.target.value, { min: 8, max: undefined, minLowercase:1, minUppercase:1, minNumbers:1, minSymbols:1})) {
            setpasswordError("")
        }
        else{
            setpasswordError("La contraseña debe contener al menos una mayuscula, una minuscula, un numero y un simbolo")
        }
        if (event.target.value === "") {
            setpasswordError("")    
        }
    })

    useEffect(() => {
        fetchDeparments()
    }, [])

    

    const [iddepartment, setIdDepartment] = useState()
    const [idmunicipality, setIdMunicipality] = useState()

    const [datadeparment, setdatadeparment] = useState([{ nombre: '' }])
    const [datamunicipality, setdatamunicipality] = useState([{ nombre: '' }])


    const fetchDeparments = () => {
        axios.get(urLDepartments)
            .then(response => {
                setdatadeparment(response.data)
            })
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(() => {
        fetchMunicipality()
    }, [iddepartment])

    const setNameDepartment = (event) => {
        setIdDepartment(event.target.value)
    }

    const getIdMunicipality = (event) => {
        setIdMunicipality(event.target.value)
    }

    const fetchMunicipality = () => {
        axios.get(`${urlMunicipality}${iddepartment}`)
            .then(response => {
                setdatamunicipality(response.data)
            })
            .catch(e => {
                console.log(e);
            })
    }

    const userRegister = () => {
        postUsers(name, lastName, parseInt(yearsOld), phoneNumber, email, password, "A", parseInt(iddepartment), parseInt(idmunicipality) , photo);
    }
    return (
        <div className="form-register-valid">
            <form className='register-valid-info'>
                <FacebookAuth buttonText={"Ingresar con facebook"} />
                <br></br><br></br>
                < GoogleAuth
                    buttonText={"iniciar sesion con Google"}
                />
                <div className="separator-container">
                    <div className="line-separator" />
                    <p className='separator-info'>OR</p>
                    <div className="line-separator" />
                </div>
                <div className="info-register">
                    <input type="text" placeholder='nombre' maxLength="80" required className='info-input-register' onChange={setEventToName}></input><br></br>
                    <input type="text" placeholder='Apellidos' maxLength="80" required className='info-input-register' onChange={setEventToLastName}></input>
                    <div className="add-register-info">
                        <input type="number" max="800" placeholder='Edad' required className='info-input-add' onChange={setEventToYearsOld}></input>
                        <input type="numbers" maxLength="10" placeholder='Telefono' required className='info-input-add' onChange={setEventToPhoneNumber}></input>
                    </div>
                    <div className="department-info">
                        <SelectDepartment data={datadeparment} name={"Departamento"} event={setNameDepartment} />
                        <SelectMunicipality data={datamunicipality} name={"Municipio"} event={getIdMunicipality} />
                    </div>
                    <input type="email" placeholder='Correo electronico' maxLength="80" required className='info-input-register' onChange={setEventToEmail} ></input><br></br>
                    <span style={{
                        fontSize: "12px",
                        color: "red",
                    }}>{emailError}</span>
                    <input type="password" placeholder='Contraseña' minLength='8' required className='info-input-register' onChange={SetEventToPassword}></input><br></br>
                    <span style={{
                        fontSize: "12px",
                        color: "red"
                    }}>{passwordError}</span>
                </div>
                <button className="register-submit" disabled={false} onClick={userRegister}>REGISTRAR</button>
                <div className="create-account-login create-account-register">
                    <p>Ya tienes cuenta... </p>
                    <NavLink to="/login"><p className='create-account-link'>Iniciar sesion</p></NavLink>
                </div>
            </form>
        </div>
    )
}
