import React from 'react'
import { RegisterCover } from '../../UI/RegisterCover/RegisterCover'
import './FormSingUp.css'


export const FormSingUp = () => {
    const URL = 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg'
    return (
        <div className="Rgister-form">
            < RegisterCover/>
{/* Aqui en la carpeta HomeImgCover me esta produciendo un conflicto y no soy capaz de evitar que me afecte */}
            <div className="form-text">
                <section className="FormSingup">
                    <p className="ParSing">NOMBRE</p>
                    <input type="text" className="InpSing"></input>
                    <br></br><br></br>
                    <p className="ParSing">CORREO ELECTRONICO</p>
                    <input max="80" type="text" className="InpSing"></input>
                    <br></br><br></br>
                    <p className="ParSing">CONTRASEÑA</p>
                    <input minLength='8' type="text" className="InpSing"></input>
                    <br></br><br></br>
                    <p className="ParSing">FECHA DE NACIMIENTO</p>
                    <input type="date" className="InpSing"></input>
                    <br></br><br></br>
                    <input type="submit" value="Crear Cuenta" className="CreateSing"/>
                </section>
            </div>
        </div>
)
}
