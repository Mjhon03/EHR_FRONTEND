import React from 'react'
import { FormSingUp } from '../../Layout/FormSingUp/FormSingUp'
import { Header } from '../../Layout/Header/Header'
import { RegisterFooter } from '../../Layout/RegisterFooter/RegisterFooter'


export const Register = () => {
  return (
    <div>
      < Header />
      < FormSingUp />
      < RegisterFooter /> 
    </div>
  )
}
