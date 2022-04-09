import React from 'react'
import { Header } from '../../Layout/Header/Header'
import { HomeSection } from '../../Layout/HomeSection/HomeSection'
import { MostPopular } from '../../Layout/MostPopular/MostPopular'
import './Home.css'



export const Home = () => {
  
  // const userData = () =>{
  //   localStorage.getItem('UserName')
  //   localStorage.getItem('UserLastName')
  //   localStorage.getItem('PhoneNumber')
  //   localStorage.getItem('UserEmail')
  // }
  
  return (
    <div>
        < Header />
        <HomeSection />
        < MostPopular />
    </div>

  )
}
