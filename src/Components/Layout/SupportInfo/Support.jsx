import React from "react";
import { NavLink } from "react-router-dom";
import './Support.css'

export const TecnicalSupport = () =>{

  return(
    <div className="BodySupport">
      <div className="SingSuport">
        <h1 className="SingSuporth1">Te damos la bienvenida al soporte tecnico de EHR</h1>
        <div className="SingSuportDIV">
          <h4 className="SingSuporth4">Para ayudarte mejor te recomendamos  </h4> <NavLink to="/login"><button className="loginTecnical">Iniciar sesion</button></NavLink>
        </div>
      </div>
      <div className="FrecuentsQuentions">
        <h4 className="FrecuentsQuentionsh4">Preguntas Frecuentes</h4>
        <div className="Questionsspace">
          <div>
            <p className="Questions">*contenido sin terminar*</p>
          </div>
          <div>
            <p className="Questions">*contenido sin terminar*</p>
          </div>
          <div>
            <p className="Questions">*contenido sin terminar*</p>
          </div>
          <div>
            <p className="Questions">*contenido sin terminar*</p>
          </div>
        </div>
      </div>
      <div className="Manualspace">
        {/* <img className="LogoImgSupport" src=""/> */}
        <h1 className="Manualh1">EHR</h1>
        <div className="textSpace">
          <h4 className="ManualH4">Te tenemos un manual para que puedas guiarte en caso de confusiones</h4>
          <p>Sabemos que en ocasiones no es facil ubicarte en un sistema, por eso 
            muchas empresas optan por diseñar manuales para que el usuario sepa que hacer y que significan ciertas pantallas
            o que posibilidades y formas de moverte en nuestra app.</p>
          <p className="ManualP">En caso de que estes en movil o en un computador tenemos un manual individual para ti.</p>
          <ul>
            <li><a href="*">Manual de usuario desde un computador</a></li>
            <li><a href="*">Manual de usuario desde un movil</a></li>
          </ul>
        </div>
      </div>
      <div className="Emailspace">
        <img className="Emailimg" src="https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901_960_720.png" alt="Gmail" />
        <p className="Emailtext">¡En caso de no haberte ayudado con tu problema aqui tenemos nuestro correo oficial 
          para que te comuniques con nosotros y poder ayudarte de manera personal! </p>
      </div>
          <h4 className="EmailDirec">easyhouserent02@gmail.com</h4>
      
    </div>
  )
}