import React from 'react'
import LogoIcon from '../vectors/LogoIcon'
import LogoText from './logotext'
import { LogoWrapper } from './styles'

const WalletCloudLogo = ({greenBg}) => {
  return (
    <LogoWrapper>
      <LogoIcon greenbg={`${greenBg}`}/>
      <LogoText greenbg={`${greenBg}`}/>
    </LogoWrapper>
  )
}

export default WalletCloudLogo