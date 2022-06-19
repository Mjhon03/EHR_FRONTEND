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
              <input type="checkbox" className="Checkbox-modal" id="btn-questions"/>
              <label htmlFor="btn-questions" className="Questions">¿Que metodos de pago tiene EHR?</label>
              <div className="ModalQuestions">
                <div className="Container-ModalQuestions">
                  <div className="Header-questions">
                    <header >¿Que metodos de pago tiene EHR?</header>
                    <label className="Close-questions" htmlFor="btn-questions">X</label>
                  </div>
                  <div className="Contenido-Modal-Questions">
                    <p className="Contenido-Modal-QuestionsP">Por el momento EHR no tiene opciones de pago atravez de la pagina, Por el momento somos unicamente un aplicativo encargado de acercar 
                      y juntar usuarios que tengan un inmueble en venta o renta con usuarios que necesitan un inmueble para rentar o comprar</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <input type="checkbox" className="Checkbox-modal" id="btn-questions"/>
              <label htmlFor="btn-questions" className="Questions">¿Es seguro publicar aqui?</label>
              <div className="ModalQuestions">
                <div className="Container-ModalQuestions">
                  <div className="Header-questions">
                    <header >¿Es seguro publicar aqui?</header>
                    <label className="Close-questions" htmlFor="btn-questions">X</label>
                  </div>
                  <div className="Contenido-Modal-Questions"> Usamos tecnologias muy fuertes, velando por tu seguridad, 
                  todos tus datos estan siendo manejados por la computadora y no por personas.
                  Sin embargo no podemos asegurarte al 100% que tus datos son seguros</div>
                </div>
              </div>
            </div>
            <div>
              <input type="checkbox" className="Checkbox-modal" id="btn-questions"/>
              <label htmlFor="btn-questions" className="Questions">¿Los anuncios son reales?</label>
              <div className="ModalQuestions">
                <div className="Container-ModalQuestions">
                  <div className="Header-questions">
                    <header >¿Los anuncios son reales?</header>
                    <label className="Close-questions" htmlFor="btn-questions">X</label>
                  </div>
                  <div className="Contenido-Modal-Questions"> Se intenta verificar los anuncios atravez del informacion como el certificado, sin embargo no podemos asegurar si todos los datos de los anuncios y los anuncios sean completamente reales.</div>
                </div>
              </div>
            </div>            
            <div>
              <input type="checkbox" className="Checkbox-modal" id="btn-questions"/>
              <label htmlFor="btn-questions" className="Questions">¿Se puede hacer inicio de sesion externo?</label>
              <div className="ModalQuestions">
                <div className="Container-ModalQuestions">
                  <div className="Header-questions">
                    <header >¿Se puede hacer inicio de sesion externo?</header>
                    <label className="Close-questions" htmlFor="btn-questions">X</label>
                  </div>
                  <div className="Contenido-Modal-Questions"> Si, con el inicio de sesion a travez de GOOGLE podras ahorrarte muchos pasos y datos que se tienen que dar para la creacion de tu perfil en EHR y agilizando el proceso de registro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
