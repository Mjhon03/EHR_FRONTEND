import React from 'react'
import { FormLogin } from '../../Layout/FormLogin/FormLogin'
import { Header } from '../../Layout/Header/Header'
import { RegisterFooter } from '../../Layout/RegisterFooter/RegisterFooter'
import './Login.css'


export const Login = () => {
  return (
    <div>
      <Header />
      < FormLogin />
      < RegisterFooter />
    </div>
  )
}
