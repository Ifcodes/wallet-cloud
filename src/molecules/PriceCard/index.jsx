import React from 'react'
import RecommendedHint from '../../atoms/hint'
import { HeadingDescription, TitleText } from '../../atoms/Typography'
import GreenTickIcon from '../../atoms/vectors/GreenTickIcon'
import { PriceCardWrapper } from './priceCardStyles'

const PriceCard = ({cardData, isYearly, errorMessage}) => {
  const cardNameInitial = cardData && cardData.name.charAt(0).toUpperCase()
  const cardName = cardData && cardNameInitial + cardData.name.split('').slice(1).join('')
  
  const splitMthPrice = cardData && String(cardData.price.monthly).split(".")

  const splitYrPrice = cardData && String(Math.ceil(cardData.price.yearly))


  const monthlyPrice = () => (
    <h1 className='price'>{splitMthPrice[0]}<sup>.99</sup> </h1>
  ) 

  const yearlyPrice = () => (
    <h1 className='price'>{splitYrPrice}</h1>
  ) 

  return (
    <PriceCardWrapper emptyPage={cardData === ""}>
      {cardData === ""
        ? <p className='error'>{errorMessage}</p>
        : (
          <>
            {cardData.recomended && 
            <div className='hint-cont'>
              <RecommendedHint />
            </div>
            }
            <div className='title'>
              <TitleText color={"#219653"} fs={"1.5rem"}>{cardName}</TitleText>
            </div>

            <div className='price-cont'>
              {
                cardData.price === 0 
                ? <h1 className='price'>Free</h1> 
                : isYearly 
                ? yearlyPrice() 
                : monthlyPrice()
              }
              
              <span>{
                cardData.price === 0 
                ? "" 
                : isYearly 
                ? `/yr` 
                : `/mth`}
              </span>
            </div>
            <HeadingDescription>
              {
                cardData.price === 0
                ? ''
                : isYearly
                ? 'Billed yearly'
                : 'Billed monthly'
              }
            </HeadingDescription>
            <button className={`btn ${cardData.price === 0 ? "free" : "paid"}`}>
              {
                cardData.price === 0
                ? "Current Plan"
                : "Start Free Trial"
              }
            </button>
            <div className='feat-cont'>
              {cardData.features.map((feature, index) => (
                <div className='feat' key={`feat-key-${index}`}>
                  <GreenTickIcon />
                  <span >{feature}</span>
                </div>
              ))}
            </div>
          </>
        )
      }
    </PriceCardWrapper>
  )
}

export default PriceCard