import './Contact.css'
import React from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { ContactUs } from '../../UI/ContactUs/ContactUs'


export const Contact = () => {
  return (
    <>
      <Header/>
      <ContactUs/>
      <Footer/>
    </>
  )
}
