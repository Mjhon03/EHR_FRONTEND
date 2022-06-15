import React from "react";
import { NavLink } from "react-router-dom";
import './Support.css'

export const TecnicalSupport = () =>{

  return(
    <div className="BodySupport">
      <div className="FatherSupport">
        <div className="TextArea">
          <div className="OrganicerText">
            <h1 className="TituloSupport">Bienvenido al Soporte tecnico de EASY HOUSE RENT</h1>
            <br />
            <h4 className="TextSupport">Esperamos que tengas una grata experiencia usanso nuestra aplicacion.
              Pero en caso de que hayas tenido algun problema esperamos que nos contactes y podamos ayudarte.
              Easy House Rent, ¡Vivienda a solo un click!
            </h4>
            <br />
            <button className="ContacSupport">Contactanos</button>
          </div>
        </div>
        <div>
          <img className="ImagePersonSupport" src="https://www.disenodepaginasweb.info.bo/images/Diseno_de_Paginas_Web_Bolivia/Servicios/Servicio_tecnico/Dise%C3%B1oDesarrolloDePaginasWeb-LandingPages-Creadores-Bolivia-LaPaz-Cochabamba-SantaCruz-P%C3%A1ginaDeAterrizaje-disenodepaginasweb-webpagedesign-openfs-softwarelibrebolivia-soporte-tecnico.png" alt="ImagenSupport" />
        </div>
      </div>
      <div className="OrganicerQuestions">
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
      </div>
    </div>
  )
}
