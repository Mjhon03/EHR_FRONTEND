import React from 'react'
import './AboutUs.css'
import '../../UI/PhotosSlider/PhotosSLider'
import { Header } from '../../Layout/Header/Header'

import { PhotosSLider } from '../../UI/PhotosSlider/PhotosSLider'

import { Footer } from '../../Layout/Footer/Footer'

export const AboutUs = () => {
  return (
    <>
      < Header />
      <div className='title-content' id='filter'>
        <PhotosSLider/>
      </div>

      <div className='allcontainers'>
        <div className='grid-div'>
          <p>Ubicados en el Quindío somos un equipo de jóvenes  desarrolladores  web con altas expectativas en lo que podemos  lograr,
            y conocimiento suficiente en la industria para crear productos innovadores.
            Uniendo toda nuestra excepcional  creatividad hemos trabajado juntos  para crear,A
            diseñar y desarrollar Easy House Rent. </p>
        </div>
        <div className='grid-div divImageAboutUs' id='grid-item-photo'>
          <img alt='investigate' src='https://img.freepik.com/free-vector/software-developing-programmers-investigates-code_90220-174.jpg?t=st=1652926756~exp=1652927356~hmac=bebcd8fa111e9bedbaa31d462678bde3d0d5fb12561a8ae27b9f425db0ace298&w=740' className='Descriptive-img' />
        </div>
        <div className='grid-div divImageAboutUs' id='grid-item-photo'>
          <img alt='concept' src='https://img.freepik.com/free-vector/meeting-concept-illustration_114360-895.jpg?t=st=1652767271~exp=1652767871~hmac=b7b3d7b3c91b42cdbfd701f3ab33bc176e248a069cd49ddcfb82425db9a24567&w=740' className='Descriptive-img' />
        </div>
        <div className='grid-div'>
          <p>
            Nuestra idea nace  generar facilidad al usuario en una tarea  que podría significar algo de trabajo para este, como en este
            caso sería emprender un trayecto en busca de un inmueble, con Easy House Rent harás un esfuerzo mínimo, y obtendrás  los mejores
            resultados , pretendemos que sea de gran ayuda.
          </p>
        </div>
        <div className='grid-div' >
          <p>En Easy House rent nuestra prioridad es  ofrecerte el alcance de encontrar inmuebles desde
            la comodidad de tu casa, ahorrándote la molestia y el tiempo de caminar por horas para
            encontrar tu destino, contamos con variedad de opciones para  que encuentres lo que se
            ajusta a tus necesidades.</p>
        </div>
        <div className='grid-div divImageAboutUs' id='grid-item-photo'>
          <img alt='making' src='https://cdni.iconscout.com/illustration/premium/thumb/boy-making-decision-with-help-of-discussion-2527773-2114679.png' className='Descriptive-img' />
        </div>
        <div className='grid-div divImageAboutUs' id='grid-item-photo'>
          <img alt='cognitive' src='https://dev.cognitive.la/uploads/covid192_1615227029.jpg' className='Descriptive-img' />
        </div>
        <div className='grid-div' >
          <p>Queremos contagiarte de la facilidad que puede significar  para ti utilizar Easy House Rent
            cuando de buscar vivienda se trata , Easy house rent es único porque busca compartirte las
            mejores alternativas de inmuebles existentes en Armenia Quindío y sus alrededores,
            Easy house rent es contar con diferentes elecciones para ti y para todos.</p>
        </div>
        <div className='grid-div'>
          <p>
            A solo un click podrías encontrar lo que tanto has estado buscando, las herramientas incluidas en
            nuestra plataforma te permitirán realizar acciones como navegar, publicar, ponerte en contacto con
            los usuarios que consideres pertinente y muchas otras opciones más que facilitarán tu búsqueda a la
            hora de querer encontrar  algo en específico.</p>
        </div>
        <div className='grid-div divImageAboutUs' id='grid-item-photo'>
          <img alt='report' src='https://atlantaagentmagazine.com/wp-content/uploads/sites/6/2021/02/2020-Report-scaled.jpg' className='Descriptive-img' />
        </div>
      </div >
      <div className='menu-documentation'>
        <a href="https://docs.google.com/document/d/1DrMiacSmUaDV-KP539nJ3Ih5Rh1ChZUK/edit" className='link-documentation'>¿Cómo usarlo?</a>
      </div>
      <Footer />
    </>
  )
}
