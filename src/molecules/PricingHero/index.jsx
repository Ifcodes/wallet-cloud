import React from 'react'
import Button from '../../atoms/Button'
import { Headings } from '../../atoms/Typography'
import { PricingHeroWrapper } from './pricingHero'

const PricingHero = ({handleClick, isActive}) => {
  return (
    <PricingHeroWrapper>
      <div className='hero-desc'>
        <Headings fs={"3.5rem"} color="white">
          Get Straight to Business, Pick a Flexible Plan for you
        </Headings>
        <div className='btn-cont'>
          <Button 
            buttonText={"Monthly"} 
            bgColor={`${isActive === "yearly" ? "#1C8448" : "white"}`}
            color={`${isActive === "yearly" ? "white" : "#1C8448"}`}
            onclick={()=> handleClick("monthly")}
          />
          <Button 
            buttonText={"Yearly"} 
            bgColor={`${isActive === "yearly" ? "white" : "#1C8448"}`}
             color={`${isActive === "yearly" ? "#1C8448" : "white"}`}
            onclick={() => handleClick("yearly")}
          />
        </div>
      </div>
    </PricingHeroWrapper>
  )
}

export default PricingHero