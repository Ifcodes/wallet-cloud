import React from 'react'
import { PartnersWrapper } from './partnersStyles';
import rectangle from '../vectors/rectangle_with_logo.png'


const Partners = () => {
  return (
    <PartnersWrapper>
      <img src={rectangle} alt='partners' />
    </PartnersWrapper>
  )
}

export default Partners