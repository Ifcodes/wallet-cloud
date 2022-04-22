import React from 'react'
import { ButtonWrapper } from './buttonStyles'
import PlayVideoIcon from '../vectors/PlayVideoIcon'

const Button = ({
  hasOutline,
  marginRight,
  greenBg,
  bgColor,
  color,
  otherButton,
  buttonText,
  onclick,
  props,
}) => {
  return (
    <ButtonWrapper
      bgColor={bgColor}
      mr={marginRight}
      hasBorder={hasOutline}
      otherButton={otherButton}
      greenBg={greenBg} 
      color={color}
      onClick={onclick}
      {...props}
    >
      <PlayVideoIcon className='play-icon'/>
      {buttonText}
    </ButtonWrapper>
  )
}

export default Button