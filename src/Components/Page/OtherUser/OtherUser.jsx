import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import './OtherUser.css'

export const OtherUser = () => {

  const [searchParams] = useSearchParams()

  let idUser = searchParams.get('idUser')
  console.log(idUser);
  
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}
