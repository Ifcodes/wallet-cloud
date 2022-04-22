
import React from 'react'
import Button from '../../atoms/Button'
import AlternativeButton from '../../atoms/Button/AlternativeButton'
import { Headings } from '../../atoms/Typography'
import Chart from '../../atoms/vectors/ChartIcon'
import CloudConnectionIcon from '../../atoms/vectors/CloudConnection'
import { useState } from 'react'
import codebox from '../../atoms/vectors/code-box.png'
import Description from '../../molecules/DescriptionCard'
import { Wrapper } from './builtStyles'

const BuiltWithLove = () => {
  const [clickType, setClickType] = useState('chart')

  const handleClick = (type) => {
    setClickType(type)
  }

  return (
    <Wrapper>
      <div className='codeBox-cont'>
        <div className='codebox-img-cont'>
          <img src={codebox} alt='code-illustration' 
          className='codebox'
          />
        </div>
        <div className='btn-cont'>
          <Button buttonText={"Get the API"}/>
          <Button buttonText={"API Documentation"} greenBg hasOutline />
          <Button buttonText={"Watch a Demo"} otherButton greenBg/>
        </div>
      </div>
      <div className='description-cont'>
        <Description 
          Title={(
            <Headings>Built with love - for developers, by developers</Headings>
          )}
          description={"We're a team of passionate engineers who obsess over sleek, robust, and flexible integration. We have made cryptocurrencies transaction easy for you with simple integration and clear documentation guides to ensure that you can get up and running in no time."}
          width={"80%"}
        />
        <div className='icons-wrapper'>
          <div className={`icon-cont ${clickType === "chart" && "isActive"}`} onClick={() => handleClick("chart")}>
            <Chart />
          </div>
          <div className={`icon-cont ${clickType === "cloud" && "isActive"}`} onClick={() => handleClick("cloud")}>
            <CloudConnectionIcon />
          </div>
        </div>
        <AlternativeButton />
      </div>
    </Wrapper>
  )
}

export default BuiltWithLove