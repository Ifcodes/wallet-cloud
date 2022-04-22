import React from 'react'
import ForwardArrow from '../../atoms/vectors/ForwardArrow'
import { AlternativeBtnWrapper } from './buttonStyles'

const AlternativeButton = () => {
  return (
    <AlternativeBtnWrapper>
      <span>Questions? Talk to an expert</span>
      <ForwardArrow />
    </AlternativeBtnWrapper>
  )
}

export default AlternativeButton