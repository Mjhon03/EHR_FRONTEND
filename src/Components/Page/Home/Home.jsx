import React from 'react'
import { Header } from '../../Layout/Header/Header'
import { HomeCover } from '../../UI/HomeCover/HomeCover'
import { HomeImgCover } from '../../UI/HomeImgCover/HomeImgCover'
import './Home.css'



export const Home = () => {
  const URL = 'https://cdn.pixabay.com/photo/2017/04/06/02/46/bogota-2207075_960_720.jpg'
  return (
    <div>
        < Header />
        <div className="img-responsive-container">
          <img className='img-responsive' src={ URL} alt="home" />
          </div>
        <div className="home-container">  
           < HomeCover className="cover"></HomeCover>
           < HomeImgCover />
        </div>
    </div>
  )
}
