import React from 'react'
import Description from '../../molecules/DescriptionCard'
import { HeroWrapper } from './heroStyles'
import Illustration from "../../atoms/vectors/Illustration.png"
import AlternativeButton from '../../atoms/Button/AlternativeButton'

const Hero = () => {
  return (
    <HeroWrapper>
      <div className='description'>
        <Description 
          Title={(
            <h1>Secured Wallet Services for your Transactions</h1>
          )}
          description={"Connect to our blockchain wallet service and seamlessly carry out transactions. Securely initiate crypto transactions, and store them with one simple integration"}
          cta={{text: "Get Started"}}
          secondaryCta={"Watch a demo"}
          width="31rem"
          heroSection
        />
        <div className='alt-cont'>
          <AlternativeButton />
        </div>
      </div>
      <div className='img-cont'>
        <img src={Illustration} alt='hero-img' />
      </div>
    </HeroWrapper>
  )
}

export default Hero