import React from 'react'
import { Header } from '../../Layout/Header/Header'
import { HomeCover } from '../../UI/HomeCover/HomeCover'
import { HomeImgCover } from '../../UI/HomeImgCover/HomeImgCover'
import './Home.css'



export const Home = () => {
  return (
    <div>
        < Header />
        <div className="home-container">
           < HomeCover />
           < HomeImgCover />
        </div>
    </div>
  )
}
