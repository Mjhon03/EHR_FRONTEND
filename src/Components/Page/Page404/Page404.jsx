import React from 'react'
import { Header } from '../../Layout/Header/Header'
import { RegisterFooter } from '../../Layout/RegisterFooter/RegisterFooter'
import './Page404.css'
import errorPage from '../../../images/404.jpg'

export const Page404 = () => {
  return (
    <div>
        < Header/>
        <div className="not-found-container">
            <div className="not-found">   
                <div className="info-error">
                    <h1 className='error-title'>Oooops!</h1>
                    <p className='error-subtitle'>lo sentimos, Pagina no encontrada...</p>
                    <p className='error-subtitle'>Intenta buscar otra cosa</p>
                    <button className='error-relink'>Regresar al inicio</button>

                </div>
                <div className="error-image-container">
                    <img className="error-image" src={ errorPage } alt='errorPage'></img>
                </div>  
            </div>
        </div>
        <RegisterFooter />
    </div>
  )
}
