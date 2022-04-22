import React from 'react'
import WhyWalletCloud from '../../molecules/WhyWalletCloud.jsx'
import { WhyWalletSectionWrapper } from './whyWalletSectionStyle'
import worldMap from '../../atoms/vectors/world-map.png'
const WhyWalletSection = () => {
  return (
    <WhyWalletSectionWrapper>
      <div>
        <img src={worldMap} alt='wold-map' />
      </div>
      <WhyWalletCloud />
    </WhyWalletSectionWrapper>
  )
}

export default WhyWalletSection