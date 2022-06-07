import React from 'react'
import { Header } from '../../Layout/Header/Header'
import { HomeSection } from '../../Layout/HomeSection/HomeSection'
import { MostRecent } from '../../Layout/MostRecent/MostRecent'
import { CategoriesBar } from '../../UI/CategoriesBar/CategoriesBar'
import { RegisterFooter } from '../../Layout/RegisterFooter/RegisterFooter'
import { RandomBanner } from '../RandomBanner/RandomBanner'

export const Home = () => {
  return (
    <div className='home-container'>  
        < Header />
        <HomeSection />
        <CategoriesBar />
        <MostRecent />
        <RandomBanner />
        <RegisterFooter />
    </div>
  )
}
